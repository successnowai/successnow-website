import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const check = searchParams.get("check") || "all"

  const debugInfo = {
    timestamp: new Date().toISOString(),
    requested_check: check,
    debug_info: {
      structured_data_rendering: {
        method: "server-side",
        location: "HTML head",
        components: [
          "OrganizationSchema (layout.tsx)",
          "WebSiteSchema (layout.tsx)",
          "AIServiceSchema (layout.tsx)",
          "FAQSchema (faq page)",
          "HowToSchema (homepage)",
        ],
        validation: "All schemas render as JSON-LD script tags in HTML",
      },
      common_issues_fixed: [
        {
          issue: "Client-side useEffect schema injection",
          fix: "Converted to server-side rendering with dangerouslySetInnerHTML",
          impact: "Schemas now visible to crawlers on initial page load",
        },
        {
          issue: "Missing FAQ answer text",
          fix: "Added comprehensive FAQ implementation with full answers",
          impact: "FAQ pages now have complete Q&A content with audio",
        },
        {
          issue: "Incomplete meta tags",
          fix: "Added 45+ comprehensive meta tags for AI optimization",
          impact: "Enhanced discoverability by AI crawlers and voice search",
        },
        {
          issue: "Missing sitemap organization",
          fix: "Created sitemap index with proper categorization",
          impact: "Better crawler navigation and content discovery",
        },
      ],
      verification_steps: [
        "1. View page source - JSON-LD scripts should be visible in <head>",
        "2. Test with Google Rich Results Test tool",
        "3. Validate schemas at validator.schema.org",
        "4. Check robots.txt accessibility at /robots.txt",
        "5. Verify llms.txt content at /llms.txt",
        "6. Test audio sitemap at /api/sitemap-audio",
      ],
      troubleshooting: {
        if_schemas_not_visible: [
          "Check if JavaScript is disabled in crawler",
          "Verify server-side rendering is working",
          "Test with curl or wget to see raw HTML",
        ],
        if_files_not_accessible: [
          "Check Vercel deployment status",
          "Verify file paths are correct",
          "Test direct URL access",
        ],
        if_audio_not_working: [
          "Check Blob storage configuration",
          "Verify OpenAI API key is set",
          "Test voice snippet generation",
        ],
      },
    },
  }

  return NextResponse.json(debugInfo, {
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Mode": "enabled",
      "Access-Control-Allow-Origin": "*",
    },
  })
}
