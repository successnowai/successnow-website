import type { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const templateUrls: Record<string, string> = {
    // Auto Dealer Templates
    "auto-1": "https://v0-autodele-now-template-site.vercel.app/",
    auto: "https://v0-autodele-now-template-site.vercel.app/",

    // Medspa Templates
    "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",
    medspa: "https://v0-med-spa-now-client-template-1.vercel.app/",

    // Realtor Templates
    "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-2": "https://v0-realtor-professional-template.vercel.app/",
    realtor: "https://v0-realtor-template-site-1.vercel.app/",

    // Lawyer Templates
    "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",
    lawyer: "https://v0-lawyer-now-template-1.vercel.app/",

    // Mortgage Templates
    "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
    mortgage: "https://v0-free-idx-api-options.vercel.app/",
  }

  let templateUrl = templateUrls[id]

  // If exact match not found, try partial matching
  if (!templateUrl) {
    const partialMatch = Object.keys(templateUrls).find((key) => key.includes(id) || id.includes(key))

    if (partialMatch) {
      templateUrl = templateUrls[partialMatch]
    } else {
      // Default fallback
      templateUrl = templateUrls["auto-1"]
    }
  }

  // Redirect to the template URL
  return new Response(null, {
    status: 302,
    headers: {
      Location: templateUrl,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  })
}
