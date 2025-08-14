import { NextResponse } from "next/server"
import { list } from "@vercel/blob"

export const runtime = "nodejs"

export async function GET() {
  try {
    // Get all audio files from Vercel Blob
    const { blobs } = await list({
      prefix: "voices/",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })

    // Generate XML sitemap
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blobs
  .map(
    (blob) => `  <url>
    <loc>${blob.url}</loc>
    <lastmod>${blob.uploadedAt.toISOString().split("T")[0]}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`

    return new NextResponse(xmlContent, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("Error generating audio sitemap:", error)
    return new NextResponse("Error generating sitemap", { status: 500 })
  }
}
