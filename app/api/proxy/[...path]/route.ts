import { type NextRequest, NextResponse } from "next/server"

// Simplified template URL mappings
const templateUrls: Record<string, string> = {
  // Auto Dealer Templates
  "auto-1": "https://v0-autodele-now-template-site-git-au-67d13d-info-9422s-projects.vercel.app",
  "auto-2": "https://v0-autodele-now-template-site-git-au-67d13d-info-9422s-projects.vercel.app",
  "auto-3": "https://v0-autodele-now-template-site-git-au-67d13d-info-9422s-projects.vercel.app",

  // Realtor Templates
  "realtor-1": "https://v0-realtor-template-site-1-git-realt-b5dc49-info-9422s-projects.vercel.app",
  "realtor-2": "https://v0-realtor-professional-template-git-a80c78-info-9422s-projects.vercel.app",
  "realtor-3": "https://v0-realtor-template-site-1-git-realt-b5dc49-info-9422s-projects.vercel.app",

  // Mortgage Templates
  "mortgage-1": "https://v0-free-idx-api-options-git-mortgage-1364af-info-9422s-projects.vercel.app",
  "mortgage-2": "https://v0-free-idx-api-options-git-mortgage-1364af-info-9422s-projects.vercel.app",
  "mortgage-3": "https://v0-free-idx-api-options-git-mortgage-1364af-info-9422s-projects.vercel.app",

  // Medical Spa Templates
  "medspa-1": "https://v0-med-spa-now-client-template-1-git-2ad733-info-9422s-projects.vercel.app",
  "medspa-2": "https://v0-med-spa-now-client-template-1-git-2ad733-info-9422s-projects.vercel.app",
  "medspa-3": "https://v0-med-spa-now-client-template-1-git-2ad733-info-9422s-projects.vercel.app",

  // Lawyer Templates
  "lawyer-1": "https://v0-lawyer-now-template-1-git-lawyer-ad1b08-info-9422s-projects.vercel.app",
  "lawyer-2": "https://v0-lawyer-now-template-1-git-lawyer-ad1b08-info-9422s-projects.vercel.app",
  "lawyer-3": "https://v0-lawyer-now-template-1-git-lawyer-ad1b08-info-9422s-projects.vercel.app",

  // Gym Templates
  "gym-1": "https://v0-martial-arts-gym-template-git-martial-arts-info-9422s-projects.vercel.app",
  "gym-2": "https://v0-yoga-studio-template-git-yoga-studio-info-9422s-projects.vercel.app",
  "gym-3": "https://v0-martial-arts-gym-template-git-martial-arts-info-9422s-projects.vercel.app",
}

export async function GET(request: NextRequest, { params }: { params: { path: string[] } }) {
  try {
    const templateId = params.path[0]
    const subPath = params.path.slice(1).join("/")

    console.log("🔍 Proxy Request:", { templateId, subPath })

    // Get the base URL for this template
    const baseUrl = templateUrls[templateId]
    if (!baseUrl) {
      console.error("❌ Template not found:", templateId)
      return createErrorResponse("Template Not Found", `Template "${templateId}" is not available.`)
    }

    // Construct the target URL
    const targetUrl = subPath ? `${baseUrl}/${subPath}` : baseUrl
    console.log("🎯 Target URL:", targetUrl)

    // Simple fetch with minimal headers
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SuccessNOW-Proxy/1.0)",
        Accept: "*/*",
      },
      redirect: "follow",
    })

    if (!response.ok) {
      console.error("❌ Fetch failed:", response.status, response.statusText)
      return createErrorResponse(
        "Template Loading Failed",
        `Failed to load template. Status: ${response.status}`,
        templateId,
      )
    }

    const contentType = response.headers.get("content-type") || "text/html"
    console.log("✅ Content loaded:", contentType)

    // Handle HTML content
    if (contentType.includes("text/html")) {
      let html = await response.text()

      // Simple URL replacement for relative paths
      const proxyPath = `/api/proxy/${templateId}`
      html = html.replace(/href="\/([^"]*?)"/g, `href="${proxyPath}/$1"`)
      html = html.replace(/src="\/([^"]*?)"/g, `src="${proxyPath}/$1"`)

      // Add mobile-optimized meta tags
      const mobileOptimizations = `
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <style>
          /* Mobile optimizations */
          @media (max-width: 768px) {
            body { 
              font-size: 16px !important; 
              line-height: 1.4 !important;
              -webkit-text-size-adjust: 100% !important;
            }
            * { 
              max-width: 100% !important; 
              box-sizing: border-box !important;
            }
          }
        </style>
      `

      html = html.replace("</head>", `${mobileOptimizations}</head>`)

      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          "X-Frame-Options": "SAMEORIGIN",
        },
      })
    } else {
      // Handle static assets (CSS, JS, images)
      const buffer = await response.arrayBuffer()
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=3600",
        },
      })
    }
  } catch (error) {
    console.error("💥 Proxy error:", error)
    return createErrorResponse(
      "Proxy Error",
      "An unexpected error occurred while loading the template.",
      params.path[0],
    )
  }
}

function createErrorResponse(title: string, message: string, templateId?: string) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title} - SuccessNOW</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .container {
          text-align: center;
          max-width: 500px;
          width: 100%;
        }
        h1 {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          margin-bottom: 1rem;
          font-weight: 700;
        }
        p {
          font-size: clamp(1rem, 3vw, 1.2rem);
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.5;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        button {
          background: white;
          color: #667eea;
          border: none;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          max-width: 250px;
        }
        button:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }
        .secondary {
          background: rgba(255,255,255,0.2);
          color: white;
        }
        .secondary:hover {
          background: rgba(255,255,255,0.3);
        }
        @media (min-width: 480px) {
          .buttons {
            flex-direction: row;
            justify-content: center;
          }
          button {
            width: auto;
            min-width: 120px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${title}</h1>
        <p>${message}</p>
        ${templateId ? `<p style="font-size: 0.9rem; opacity: 0.7;">Template: ${templateId}</p>` : ""}
        <div class="buttons">
          <button onclick="window.location.reload()">Try Again</button>
          <button class="secondary" onclick="window.close() || (window.location.href = '/')">
            Close
          </button>
        </div>
      </div>
    </body>
    </html>
  `

  return new NextResponse(html, {
    status: 500,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}

// Handle CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
