"use client"

import { Button } from "@/components/ui/button"
import { Bot, Zap } from "lucide-react"

interface AdsSuccessEcosystemProps {
  onDemoClick: () => void
}

export default function AdsSuccessEcosystem({ onDemoClick }: AdsSuccessEcosystemProps) {
  return (
    <section className="py-16 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The <span className="text-[#00BFFF]">SuccessNOW</span> + <span className="text-purple-400">AdsNOW</span>{" "}
          Ecosystem
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Combine our industry-specific AI agents with a powerful ad-generation platform. We don&apos;t just get you
          leads—we convert them.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-[#00BFFF]" />
              <h3 className="text-2xl font-bold text-white">SuccessNOW AI Agent</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00BFFF] mt-1.5">•</span>
                <span>24/7 lead engagement & qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00BFFF] mt-1.5">•</span>
                <span>Automated appointment booking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00BFFF] mt-1.5">•</span>
                <span>Persistent, intelligent follow-up</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">AdsNOW.ai Platform</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1.5">•</span>
                <span>AI-generated, high-converting ads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1.5">•</span>
                <span>Optimized for your specific industry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1.5">•</span>
                <span>Drives qualified traffic to your AI agent</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <Button
            variant="outline"
            className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
            onClick={onDemoClick}
          >
            See The Full Ecosystem In Action
          </Button>
        </div>
      </div>
    </section>
  )
}
