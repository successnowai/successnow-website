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

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:audio="http://www.google.com/schemas/sitemap-audio/1.0">
${blobs
  .map((blob) => {
    // Extract category and filename from path
    const pathParts = blob.pathname.split("/")
    const category = pathParts[1] || "general"
    const filename = pathParts[2] || blob.pathname.split("/").pop()

    return `  <url>
    <loc>${blob.url}</loc>
    <lastmod>${blob.uploadedAt.toISOString().split("T")[0]}</lastmod>
    <audio:audio>
      <audio:title>SuccessNOW AI Voice Snippet - ${category}</audio:title>
      <audio:description>AI-generated voice content for ${category} from SuccessNOW.ai</audio:description>
      <audio:content_loc>${blob.url}</audio:content_loc>
      <audio:duration>60</audio:duration>
      <audio:category>Business AI Voice Content</audio:category>
    </audio:audio>
  </url>`
  })
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
