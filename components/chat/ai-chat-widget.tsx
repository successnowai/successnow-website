"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function AIChatWidget() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const predefinedPrompts = [
    "What is AI Assistant?",
    "How do I get started?",
    "What does it cost?",
    "How does it work?",
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Add initial greeting message
    const initialMessage: Message = {
      id: "1",
      text: "👋 Hey there! My name is A.S.I.A (Advanced Sales Intelligence Agent) and I'm here to find out why you aren't making money with voice AI.",
      sender: "bot",
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }, [])

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Make API call to botdisplay service
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          assistantId: "1753831573951x589054349879485360",
          accountId: "UMy2Y82UItPQzkvXP7VK",
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text:
            data.response ||
            "I'm here to help you understand how voice AI can transform your business. What specific questions do you have?",
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        throw new Error("Failed to get response")
      }
    } catch (error) {
      // Fallback response if API fails
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm here to help you understand how voice AI can transform your business. What specific questions do you have about implementing AI for your company?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handlePromptClick = (prompt: string) => {
    sendMessage(prompt)
  }

  return (
    <div className="w-full max-w-md">
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 blur-sm animate-pulse" />

      {/* Main widget container */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border border-cyan-300/30 rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border-b border-cyan-300/20 p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-cyan-100">A.S.I.A</h3>
              <p className="text-xs text-cyan-300/70">Advanced Sales Intelligence Agent</p>
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gradient-to-br from-slate-800/80 via-purple-800/80 to-slate-800/80 border border-cyan-300/20 text-cyan-100"
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.sender === "bot" && <Bot className="w-4 h-4 text-cyan-300 mt-0.5 flex-shrink-0" />}
                  {message.sender === "user" && <User className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gradient-to-br from-slate-800/80 via-purple-800/80 to-slate-800/80 border border-cyan-300/20 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-300" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Predefined prompts */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <div className="grid grid-cols-2 gap-2">
              {predefinedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handlePromptClick(prompt)}
                  className="text-xs bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-300/30 text-cyan-200 hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-300/50 transition-all duration-200"
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="border-t border-cyan-300/20 p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me about voice AI..."
              className="flex-1 bg-slate-800/50 border-cyan-300/30 text-cyan-100 placeholder:text-cyan-300/50 focus:border-cyan-300/50 focus:ring-cyan-300/20"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="sm"
              disabled={!inputValue.trim() || isLoading}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none rounded-2xl" />
      </div>
    </div>
  )
}
