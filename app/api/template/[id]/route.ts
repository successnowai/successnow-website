import type { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const templateUrls: Record<string, string> = {
    // Auto Dealer Templates
    "auto-1": "https://v0-autodele-now-template-site.vercel.app/",

    // Medspa Templates
    "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",

    // Realtor Templates
    "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
    "realtor-2": "https://v0-realtor-professional-template.vercel.app/",

    // Lawyer Templates
    "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",

    // Mortgage Templates
    "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
  }

  const templateUrl = templateUrls[params.id]

  if (!templateUrl) {
    return new Response("Template not found", { status: 404 })
  }

  // Use proper Next.js redirect
  return new Response(null, {
    status: 302,
    headers: {
      Location: templateUrl,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  })
}
