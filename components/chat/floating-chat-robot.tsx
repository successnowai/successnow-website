"use client"

import { useState, useEffect } from "react"
import { MessageSquare, X } from "lucide-react"

const FloatingChatRobot = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      // Check microphone permissions when chat opens
      if (typeof navigator !== "undefined" && navigator.permissions) {
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
            console.log("Permission query not supported:", err)
          })
      }
    }
  }, [isOpen])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div
          id="chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label="AI Chat Assistant"
          className="bg-white rounded-lg shadow-lg w-96 h-80 flex flex-col overflow-hidden mb-4"
        >
          <div className="flex justify-center items-center h-full">
            <iframe
              src="https://iframes.ai/o/1750493608926x366840044583387140?color=c540ea&icon=bot"
              allow="microphone"
              className="w-full h-full border-none"
              id="assistantFrame"
              title="AI Assistant"
            />
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00BFFF]"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
        aria-controls="chat-panel"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  )
}

export default FloatingChatRobot
