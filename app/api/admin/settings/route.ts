import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { apiKeys, integrationSettings } = await request.json()

    // In production, save to secure database or environment variables
    // For now, just log the settings
    console.log("Saving admin settings:", { apiKeys, integrationSettings })

    // Here you would typically:
    // 1. Validate the admin user
    // 2. Encrypt sensitive data
    // 3. Save to database or update environment variables
    // 4. Update Vercel environment variables via API

    return NextResponse.json({ success: true, message: "Settings saved successfully" })
  } catch (error) {
    console.error("Error saving settings:", error)
    return NextResponse.json({ success: false, message: "Error saving settings" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Return current settings (without sensitive data)
    const settings = {
      integrationSettings: {
        ghlWebhookUrl: process.env.GHL_WEBHOOK_URL || "",
        ghlLocationId: process.env.GHL_LOCATION_ID || "",
        vapiAssistantId: process.env.VAPI_ASSISTANT_ID || "",
        geteverbotsWorkspaceId: process.env.GETEVERBOTS_WORKSPACE_ID || "",
      },
      // Don't return actual API keys for security
      apiKeys: {
        ghlApiKey: process.env.GHL_API_KEY ? "***" : "",
        vapiApiKey: process.env.VAPI_API_KEY ? "***" : "",
        geteverbotsApiKey: process.env.GETEVERBOTS_API_KEY ? "***" : "",
        vercelApiKey: process.env.VERCEL_API_KEY ? "***" : "",
        stripeApiKey: process.env.STRIPE_API_KEY ? "***" : "",
      },
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error("Error fetching settings:", error)
    return NextResponse.json({ error: "Error fetching settings" }, { status: 500 })
  }
}
