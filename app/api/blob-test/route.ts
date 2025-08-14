import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

export const runtime = "nodejs"

export async function GET() {
  const b = new Blob([`hello ${Date.now()}`], { type: "text/plain" })
  const r = await put("voices/test/hello.txt", b, {
    access: "public",
    contentType: "text/plain",
    addRandomSuffix: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })
  return NextResponse.json({ url: r.url })
}
