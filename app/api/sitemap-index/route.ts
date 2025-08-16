import { NextResponse } from "next/server"

export async function GET() {
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Main sitemap with all pages -->
  <sitemap>
    <loc>https://successnow.ai/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </sitemap>
  
  <!-- Industry-specific pages -->
  <sitemap>
    <loc>https://successnow.ai/sitemap-industries.xml</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </sitemap>
  
  <!-- Blog content -->
  <sitemap>
    <loc>https://successnow.ai/sitemap-blogs.xml</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </sitemap>
  
  <!-- Competitor analysis pages -->
  <sitemap>
    <loc>https://successnow.ai/sitemap-competitors.xml</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </sitemap>
  
  <!-- Audio content for AI crawlers -->
  <sitemap>
    <loc>https://successnow.ai/api/sitemap-audio</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </sitemap>
  
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "X-Robots-Tag": "noindex",
    },
  })
}
