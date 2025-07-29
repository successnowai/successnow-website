const fs = require("fs")
const path = require("path")

// GHL Page Template
function createGHLPage(title, htmlContent, pagePath) {
  return {
    name: title,
    slug: pagePath.replace("/", "").replace(/\//g, "-") || "home",
    type: "page",
    content: {
      html: htmlContent,
      css: `
        /* SuccessNOW.ai Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #000;
          color: #fff;
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Add your Tailwind-like utilities here */
        .bg-black { background-color: #000; }
        .text-white { color: #fff; }
        .text-blue-400 { color: #60a5fa; }
        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .text-4xl { font-size: 2.25rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        
        /* Button styles */
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: #00bfff;
          color: #000;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .btn:hover {
          background: #0099cc;
          transform: translateY(-2px);
        }
      `,
      js: `
        // SuccessNOW.ai JavaScript
        console.log('SuccessNOW.ai page loaded');
        
        // Add any interactive functionality here
        document.addEventListener('DOMContentLoaded', function() {
          // Initialize any components
        });
      `,
    },
    seo: {
      title: title,
      description: "SuccessNOW.ai - AI-powered business automation platform",
      keywords: "AI, automation, business, leads, sales",
    },
  }
}

async function generateGHLPages() {
  const exportDir = path.join(process.cwd(), "html-export")
  const ghlDir = path.join(process.cwd(), "ghl-pages")

  if (!fs.existsSync(ghlDir)) {
    fs.mkdirSync(ghlDir, { recursive: true })
  }

  // Read all HTML files
  const htmlFiles = fs.readdirSync(exportDir, { recursive: true }).filter((file) => file.endsWith(".html"))

  for (const file of htmlFiles) {
    const filePath = path.join(exportDir, file)
    const htmlContent = fs.readFileSync(filePath, "utf8")

    // Extract title from HTML
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/)
    const title = titleMatch ? titleMatch[1] : "SuccessNOW.ai Page"

    // Get page path
    const pagePath = file.replace(".html", "").replace("index", "")

    // Create GHL page object
    const ghlPage = createGHLPage(title, htmlContent, pagePath)

    // Save as JSON file
    const outputFile = path.join(ghlDir, `${file.replace(".html", ".json")}`)
    fs.writeFileSync(outputFile, JSON.stringify(ghlPage, null, 2))

    console.log(`✅ Generated GHL page: ${outputFile}`)
  }

  console.log("🎉 GHL pages generated successfully!")
}

generateGHLPages().catch(console.error)
