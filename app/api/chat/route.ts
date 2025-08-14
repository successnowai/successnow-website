import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, assistantId, accountId } = await request.json()

    // Try to connect to the actual botdisplay API
    // Note: This is a placeholder - you may need to adjust based on botdisplay's actual API
    try {
      const response = await fetch("https://api.botdisplay.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          assistant_id: assistantId,
          account_id: accountId,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        return NextResponse.json({ response: data.message || data.response })
      }
    } catch (apiError) {
      console.log("API call failed, using fallback response")
    }

    // Fallback intelligent responses based on common questions
    const lowerMessage = message.toLowerCase()

    let response =
      "I'm A.S.I.A, your Advanced Sales Intelligence Agent. I can help you understand how voice AI can transform your business operations."

    if (lowerMessage.includes("cost") || lowerMessage.includes("price") || lowerMessage.includes("pricing")) {
      response =
        "Our voice AI solutions are customized based on your business needs. Typically, businesses see ROI within 30-60 days through increased lead conversion and 24/7 availability. Would you like to schedule a strategy call to discuss pricing for your specific situation?"
    } else if (
      lowerMessage.includes("get started") ||
      lowerMessage.includes("begin") ||
      lowerMessage.includes("start")
    ) {
      response =
        "Getting started is simple! First, we analyze your current business processes, then we customize the AI to your industry and brand voice. The setup typically takes 1-2 weeks. Would you like me to connect you with our implementation team?"
    } else if (lowerMessage.includes("how") && lowerMessage.includes("work")) {
      response =
        "Our voice AI works by integrating with your existing phone systems and can handle inbound calls, make outbound calls, qualify leads, book appointments, and even handle customer service. It learns your business specifics and sounds completely natural. What aspect would you like me to explain in more detail?"
    } else if (lowerMessage.includes("ai assistant") || lowerMessage.includes("what is")) {
      response =
        "I'm an AI assistant specifically designed for business growth. I can handle your phone calls, qualify leads, book appointments, follow up with prospects, and work 24/7 to grow your business. Think of me as your most dedicated sales team member who never sleeps!"
    } else if (lowerMessage.includes("business") || lowerMessage.includes("help")) {
      response =
        "I can help your business by handling all your phone communications - answering calls, making outbound calls to leads, qualifying prospects, booking appointments, and following up. This frees up your time while ensuring no opportunity is missed. What type of business do you run?"
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { response: "I'm here to help you with voice AI solutions. How can I assist you today?" },
      { status: 200 },
    )
  }
}
