const fs = require("fs")
const path = require("path")

const postBuild = () => {
  console.log("🔧 Running post-build SEO optimizations...")

  const publicDir = path.join(process.cwd(), "public")
  const buildDir = path.join(process.cwd(), ".next")

  // Verify all SEO files exist
  const seoFiles = [
    "robots.txt",
    "llms.txt",
    "llms-full.txt",
    "sitemap.xml",
    "sitemap-index.xml",
    "sitemap-blogs.xml",
    "sitemap-competitors.xml",
    "sitemap-industries.xml",
  ]

  let allFilesExist = true
  seoFiles.forEach((file) => {
    const filePath = path.join(publicDir, file)
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing SEO file: ${file}`)
      allFilesExist = false
    } else {
      console.log(`✅ SEO file verified: ${file}`)
    }
  })

  // Copy SEO files to build output if needed
  if (fs.existsSync(buildDir)) {
    const staticDir = path.join(buildDir, "static")
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true })
    }

    seoFiles.forEach((file) => {
      const sourcePath = path.join(publicDir, file)
      const destPath = path.join(staticDir, file)

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath)
        console.log(`📋 Copied ${file} to build output`)
      }
    })
  }

  if (allFilesExist) {
    console.log("🎉 Post-build SEO optimization completed successfully!")
  } else {
    console.error("❌ Post-build failed: Missing SEO files")
    process.exit(1)
  }
}

if (require.main === module) {
  postBuild()
}

module.exports = { postBuild }
