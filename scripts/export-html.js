const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

// List of all pages to export
const pages = [
  // Main pages
  "/",
  "/affiliate",
  "/affiliate/apply",
  "/industries",
  "/demo",
  "/community",
  "/signup",
  "/payment",

  // Industry pages
  "/adsnow",
  "/autodealersnow",
  "/chiropractorsnow",
  "/contractorsnow",
  "/custombuildnow",
  "/dentistsnow",
  "/gymsnow",
  "/hvacnow",
  "/lawyersnow",
  "/medspanow",
  "/mortgagenow",
  "/plumbersnow",
  "/realtornow",
  "/restaurantsnow",
  "/roofersnow",
  "/solarnow",

  // Industry signup pages
  "/autodealersnow/signup",
  "/chiropractorsnow/signup",
  "/contractorsnow/signup",
  "/custombuildnow/signup",
  "/dentistsnow/signup",
  "/gymsnow/signup",
  "/hvacnow/signup",
  "/lawyersnow/signup",
  "/medspanow/signup",
  "/mortgagenow/signup",
  "/plumbersnow/signup",
  "/realtornow/signup",
  "/restaurantsnow/signup",
  "/roofersnow/signup",
  "/solarnow/signup",

  // Affiliate pages
  "/leo",
  "/nara",
  "/nana",
  "/sheshopslocal",

  // Diamond class pages
  "/diamond",
  "/diamond/apply",
  "/diamond/confirmation",
  "/diamond/payment/full",
  "/diamond/payment/plan",
  "/diamond/signup-pay-full",
  "/diamond/signup-payment-plan",

  // Special pages
  "/dominate",
  "/dominate-checkout",
  "/dominate-paid",
  "/partner-signup",
  "/apply",
]

async function exportHTML() {
  console.log("Starting HTML export process...")

  // Create export directory
  const exportDir = path.join(process.cwd(), "html-export")
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true })
  }

  // Build the Next.js app first
  console.log("Building Next.js application...")
  try {
    execSync("npm run build", { stdio: "inherit" })
  } catch (error) {
    console.error("Build failed:", error.message)
    return
  }

  // Start the Next.js server
  console.log("Starting Next.js server...")
  const server = require("next")({ dev: false })
  const handle = server.getRequestHandler()

  await server.prepare()

  const http = require("http")
  const httpServer = http.createServer((req, res) => {
    handle(req, res)
  })

  httpServer.listen(3000, async () => {
    console.log("Server started on http://localhost:3000")

    // Export each page
    for (const page of pages) {
      try {
        console.log(`Exporting ${page}...`)

        const response = await fetch(`http://localhost:3000${page}`)
        const html = await response.text()

        // Create directory structure
        const pagePath = page === "/" ? "/index" : page
        const filePath = path.join(exportDir, `${pagePath}.html`)
        const dir = path.dirname(filePath)

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }

        // Clean up the HTML for GHL
        const cleanHTML = cleanHTMLForGHL(html)

        fs.writeFileSync(filePath, cleanHTML)
        console.log(`✅ Exported: ${filePath}`)
      } catch (error) {
        console.error(`❌ Failed to export ${page}:`, error.message)
      }
    }

    httpServer.close()
    console.log("🎉 HTML export completed!")
    console.log(`Files saved to: ${exportDir}`)
  })
}

function cleanHTMLForGHL(html) {
  // Remove Next.js specific scripts and replace with static content
  const cleaned = html
    // Remove Next.js scripts
    .replace(/<script[^>]*\/_next\/[^>]*><\/script>/g, "")
    .replace(/<script[^>]*>.*?__NEXT_DATA__.*?<\/script>/gs, "")
    // Convert relative paths to absolute
    .replace(/href="\/_next\//g, 'href="https://your-domain.com/_next/')
    .replace(/src="\/_next\//g, 'src="https://your-domain.com/_next/')
    // Add GHL compatible meta tags
    .replace(
      /<head>/,
      `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">`,
    )

  return cleaned
}

// Run the export
exportHTML().catch(console.error)
