const fs = require("fs")
const path = require("path")

const verifyStaticFiles = () => {
  console.log("🔍 Verifying static file deployment...")

  const publicDir = path.join(process.cwd(), "public")
  const requiredFiles = [
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

  requiredFiles.forEach((file) => {
    const filePath = path.join(publicDir, file)
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath)
      console.log(`✅ ${file} - ${stats.size} bytes - Modified: ${stats.mtime.toISOString()}`)
    } else {
      console.error(`❌ ${file} - MISSING`)
      allFilesExist = false
    }
  })

  // Check file permissions
  if (allFilesExist) {
    console.log("\n📋 File permissions check:")
    requiredFiles.forEach((file) => {
      const filePath = path.join(publicDir, file)
      try {
        fs.accessSync(filePath, fs.constants.R_OK)
        console.log(`✅ ${file} - Readable`)
      } catch (err) {
        console.error(`❌ ${file} - Not readable: ${err.message}`)
      }
    })
  }

  return allFilesExist
}

// Verify content of key files
const verifyFileContent = () => {
  console.log("\n🔍 Verifying file content...")

  const robotsPath = path.join(process.cwd(), "public", "robots.txt")
  if (fs.existsSync(robotsPath)) {
    const content = fs.readFileSync(robotsPath, "utf8")
    const hasUserAgent = content.includes("User-agent:")
    const hasSitemap = content.includes("Sitemap:")
    const hasAIBots = content.includes("GPTBot") || content.includes("ChatGPT-User")

    console.log(`✅ robots.txt - User-agent: ${hasUserAgent}, Sitemap: ${hasSitemap}, AI Bots: ${hasAIBots}`)
  }

  const llmsPath = path.join(process.cwd(), "public", "llms.txt")
  if (fs.existsSync(llmsPath)) {
    const content = fs.readFileSync(llmsPath, "utf8")
    const hasUrl = content.includes("https://successnow.ai")
    const hasContact = content.includes("contact")

    console.log(`✅ llms.txt - URL: ${hasUrl}, Contact: ${hasContact}`)
  }
}

if (require.main === module) {
  const filesExist = verifyStaticFiles()
  if (filesExist) {
    verifyFileContent()
    console.log("\n🎉 All static files verified successfully!")
  } else {
    console.error("\n❌ Some static files are missing. Deployment may fail.")
    process.exit(1)
  }
}

module.exports = { verifyStaticFiles, verifyFileContent }
