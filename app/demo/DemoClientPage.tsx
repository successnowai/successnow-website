"use client"

import StarryBackground from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bot } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

function AiAssistantFrame() {
  useEffect(() => {
    const frame = document.getElementById("assistantFrame")
    const handleLoad = () => {
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: "microphone" as PermissionName })
          .then((result) => {
            if (result.state === "granted") {
              console.log("Microphone access already granted")
            } else if (result.state === "prompt") {
              console.log("User will be prompted for microphone access")
            }
          })
          .catch((err) => {
            console.error("Microphone permission query failed:", err)
          })
      }
    }

    if (frame) {
      frame.addEventListener("load", handleLoad)
    }

    return () => {
      if (frame) {
        frame.removeEventListener("load", handleLoad)
      }
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        src="https://iframes.ai/o/1750493608926x366840044583387140?color=00BFFF&icon=bot"
        allow="microphone"
        className="w-full h-full border-none rounded-lg"
        id="assistantFrame"
        title="AI Assistant"
      />
    </div>
  )
}

export default function DemoClientPage() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <StarryBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="absolute top-4 left-4">
          <Link href="/">
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="w-full max-w-4xl h-[70vh] max-h-[800px] flex flex-col">
          <div className="flex items-center gap-4 mb-6 text-center flex-col">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#00A3D9] rounded-full flex items-center justify-center shadow-lg">
              <Bot className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">SuccessNOW AI Assistant</h1>
            <p className="text-lg text-gray-300">
              Interact with our AI. Ask questions, test its capabilities, and see how it can help your business.
            </p>
          </div>
          <div className="flex-grow bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 shadow-2xl rounded-xl overflow-hidden">
            <AiAssistantFrame />
          </div>
        </div>
      </div>
    </div>
  )
}
