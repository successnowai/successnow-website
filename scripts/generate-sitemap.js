const fs = require("fs")
const path = require("path")

const generateSitemap = () => {
  const baseUrl = "https://successnow.ai"
  const publicDir = path.join(process.cwd(), "public")

  // Ensure sitemap files exist
  const sitemapFiles = [
    "sitemap.xml",
    "sitemap-index.xml",
    "sitemap-industries.xml",
    "sitemap-blogs.xml",
    "sitemap-competitors.xml",
  ]

  sitemapFiles.forEach((file) => {
    const filePath = path.join(publicDir, file)
    if (!fs.existsSync(filePath)) {
      console.warn(`Warning: ${file} not found in public directory`)
    } else {
      console.log(`✓ ${file} found and accessible`)
    }
  })

  // Verify SEO files
  const seoFiles = ["robots.txt", "llms.txt", "llms-full.txt"]
  seoFiles.forEach((file) => {
    const filePath = path.join(publicDir, file)
    if (!fs.existsSync(filePath)) {
      console.warn(`Warning: ${file} not found in public directory`)
    } else {
      console.log(`✓ ${file} found and accessible`)
    }
  })
}

generateSitemap()
