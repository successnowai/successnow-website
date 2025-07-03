"use client"

import { useState, useEffect } from "react"
import { Bot, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-modal="true"
            aria-label="AI Chat Assistant"
            className="bg-white rounded-lg shadow-2xl w-96 h-[448px] flex flex-col overflow-hidden mb-4 origin-bottom-right"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="flex justify-center items-center h-full">
              <iframe
                src="https://iframes.ai/o/1750493608926x366840044583387140?color=00BFFF&icon=bot"
                allow="microphone"
                className="w-full h-full border-none"
                id="assistantFrame"
                title="AI Assistant"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={toggleChat}
        className="relative w-16 h-16 bg-[#00BFFF] text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00BFFF]"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
        aria-controls="chat-panel"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 rounded-full bg-[#00BFFF] animate-pulse opacity-50" />
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "x" : "bot"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default FloatingChatRobot
