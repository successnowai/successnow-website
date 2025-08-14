import { type NextRequest, NextResponse } from "next/server"
import { put, list } from "@vercel/blob"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

async function sha1(s: string) {
  const enc = new TextEncoder().encode(s)
  const buf = await crypto.subtle.digest("SHA-1", enc)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 12)
}

async function fetchTTS({ text, voice, format }: { text: string; voice: string; format: "mp3" | "wav" }) {
  const key = process.env.OPENAI_API_KEY
  if (!key) throw new Error("Missing OPENAI_API_KEY")

  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "tts-1",
      input: text,
      voice,
      response_format: format,
    }),
  })

  if (!res.ok) {
    const t = await res.text().catch(() => "")
    throw new Error(`OpenAI TTS failed: ${res.status} ${t}`)
  }
  const arrBuf = await res.arrayBuffer()
  return Buffer.from(arrBuf)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    let { text, voice, format, category, filename } = body as {
      text?: string
      voice?: string
      format?: string
      category?: string
      filename?: string
    }

    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json({ error: "text is required" }, { status: 400 })
    }
    text = text.trim()

    voice = (voice ?? "alloy").toLowerCase()
    format = (format ?? "mp3").toLowerCase()
    if (format !== "mp3" && format !== "wav") format = "mp3"

    category = (category ?? "misc").replace(/[^a-z0-9/_-]/gi, "").toLowerCase()

    // deterministic name (hash of voice|format|text) unless filename provided
    const h = await sha1(`${voice}|${format}|${text}`)
    const name = (filename?.replace(/[^a-z0-9._-]/gi, "").toLowerCase() || h) + "." + format
    const filePath = `voices/${category}/${name}`

    // cache check
    const existing = await list({ prefix: filePath })
    if (existing.blobs.length) {
      return NextResponse.json({
        success: true,
        url: existing.blobs[0].url,
        filePath,
        voice,
        format,
        cached: true,
      })
    }

    console.log("[SERVER] Processing voice", { preview: text.slice(0, 50), voice, format, filePath })

    // synthesize
    const audioBuffer = await fetchTTS({ text, voice, format: format as "mp3" | "wav" })

    // upload (as web Blob, not Node Buffer)
    const mime = format === "mp3" ? "audio/mpeg" : "audio/wav"
    const webBlob = new Blob([audioBuffer], { type: mime })

    const token = process.env.BLOB_READ_WRITE_TOKEN
    if (!token) console.warn("[BLOB] BLOB_READ_WRITE_TOKEN missing; upload will likely fail.")

    // simple retry
    let lastErr: any = null
    for (let i = 1; i <= 3; i++) {
      try {
        const up = await put(filePath, webBlob, {
          access: "public",
          contentType: mime,
          addRandomSuffix: false,
          token, // ✅ be explicit
        })
        return NextResponse.json({
          success: true,
          url: up.url,
          filePath,
          voice,
          format,
          cached: false,
        })
      } catch (e: any) {
        lastErr = e
        console.error(`[SERVER] Upload attempt ${i} failed:`, e?.message || e)
        await new Promise((r) => setTimeout(r, 800 * i))
      }
    }
    throw new Error(`Failed to upload after 3 attempts: ${lastErr?.message || lastErr}`)
  } catch (err: any) {
    console.error("[SERVER] Voice generation error:", err?.message || err)
    return NextResponse.json({ error: err?.message || "Internal error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Voice Generation API",
    usage: 'POST with { text: "your text", voice?: "alloy", format?: "mp3", category?: "test" }',
    availableVoices: ["alloy", "echo", "fable", "onyx", "nova", "shimmer"],
    supportedFormats: ["mp3", "wav"],
  })
}
