"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PilotFundingBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 mb-8 rounded-lg border-2 border-orange-400 shadow-lg animate-pulse">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">🎉 Pilot Funding Announced — $2,000 Off Your Custom AI Build</h3>
            <p className="text-sm opacity-90">
              SuccessNOW AI Systems Inc. awarded $250,000 in pilot funding. Use code{" "}
              <span className="bg-white/20 px-2 py-1 rounded font-bold">"2000OFF"</span> — Limited time!
            </p>
          </div>
        </div>
        <Link href="https://signup.successnow.ai" target="_blank" rel="noopener noreferrer">
          <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">Claim Now</Button>
        </Link>
      </div>
    </div>
  )
}
