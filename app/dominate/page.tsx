"use client"
import { StarryBackground } from "@/components/ui/starry-background"
import { DemoPopup } from "@/components/ui/demo-popup"
import { cn } from "@/lib/utils"
import { Sparkles, Star, Zap, AlertCircle, TrendingUp, Crown } from "lucide-react"
import { useEffect, useState } from "react"

export default function DominatePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const valueStackItems = [
    { label: "Custom Build:", value: "$60,000+", numericValue: 60000 },
    { label: "Ads Management:", value: "$11,982", numericValue: 11982 },
    { label: "SEO Domination:", value: "$14,994", numericValue: 14994 },
    { label: "1-on-1 Coaching:", value: "$11,964", numericValue: 11964 },
    { label: "Affiliate Tier Access:", value: "UNLIMITED", highlight: true, numericValue: 0 },
    { label: "Lockout & Vault Access:", value: "EXCLUSIVE", highlight: true, numericValue: 0 },
  ]

  const totalNumericValue = valueStackItems.reduce((sum, item) => sum + item.numericValue, 0)
  const investmentAmount = 35888
  const calculatedSavings = totalNumericValue - investmentAmount
  const displaySavings = "$63,052"

  const valueCards = [
    {
      emoji: "⚠️",
      title: "Limited Time Offer",
      body: "Only 5 spots available per industry. Secure your exclusive territory now!",
      icon: AlertCircle,
      gradient: "from-amber-500/20 to-red-500/20",
    },
    {
      emoji: "💎",
      title: "Exclusive Diamond Tier Affiliate Program",
      body: "Earn 50% Recurring MRR from every person you refer to SuccessNOW!",
      icon: Crown,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ]

  if (!isClient) {
    return (
      <div className="relative min-h-screen w-full flex items-center justify-center bg-slate-900">
        <StarryBackground className="absolute inset-0 -z-10" />
        <div className="text-white text-3xl font-bold animate-pulse">Loading Dominate Experience...</div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <StarryBackground className="absolute inset-0 -z-10" />

      <style jsx>{`
        .glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .glass-card-dark { background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .glass-card-premium { background: rgba(255, 215, 0, 0.1); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border: 2px solid rgba(255, 215, 0, 0.4); }
        
        .savings-card-override {
          background: linear-gradient(145deg, #1a1a1a, #000000) !important;
          border: 5px solid #FFD700 !important;
          border-image: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) 1 !important;
          box-shadow: 0 0 60px 20px rgba(255, 215, 0, 0.4), inset 0 0 20px 5px rgba(255, 215, 0, 0.2) !important;
          padding: 2rem !important;
          border-radius: 1.5rem !important;
          text-align: center !important;
          margin-top: 2rem !important;
          animation: pulse-glow 2s infinite alternate !important;
        }
        .savings-value-override {
          font-size: clamp(4rem, 15vw, 9rem) !important;
          font-weight: 900 !important;
          color: #FCF6BA !important;
          text-shadow: 0 0 10px #fff, 0 0 20px #FFD700, 0 0 35px #FFD700, 0 0 50px #B38728 !important;
          line-height: 1 !important;
        }
        .savings-label-override {
          font-size: clamp(2rem, 8vw, 4rem) !important;
          font-weight: 800 !important;
          color: #FFFFFF !important;
          text-shadow: 0 2px 5px rgba(0,0,0,0.8) !important;
          margin-bottom: 1rem !important;
        }
        @keyframes pulse-glow {
          from {
            box-shadow: 0 0 60px 15px rgba(255, 215, 0, 0.3), inset 0 0 20px 5px rgba(255, 215, 0, 0.1) !important;
          }
          to {
            box-shadow: 0 0 70px 25px rgba(255, 215, 0, 0.5), inset 0 0 25px 8px rgba(255, 215, 0, 0.3) !important;
          }
        }
      `}</style>

      <main className="relative flex flex-col items-center justify-start min-h-screen px-4 py-12 z-10">
        <div className="glass-card rounded-3xl p-8 mb-12 w-full max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Dominate Your Market
            </h1>
            <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-gray-200">The Ultimate Business Transformation Package</p>
        </div>

        <section className="w-full max-w-7xl space-y-8">
          <div className="glass-card-premium rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Sparkles className="w-12 h-12 text-yellow-400 animate-bounce" />
                <div>
                  <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">TOTAL VALUE</h2>
                  <h2 className="text-5xl md:text-6xl font-black text-yellow-400 tracking-tight animate-pulse">
                    STACKED
                  </h2>
                </div>
                <TrendingUp className="w-12 h-12 text-green-400 animate-bounce" />
              </div>

              <p className="text-2xl md:text-3xl text-cyan-300 font-bold tracking-wide">
                YOUR PATH TO TOTAL DOMINATION
              </p>

              <div className="glass-card-dark rounded-2xl p-8 space-y-6 mt-12">
                {valueStackItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-xl md:text-2xl border-b border-white/20 pb-4 last:border-b-0"
                  >
                    <span className="text-white font-bold">{item.label}</span>
                    <span
                      className={cn(
                        "font-black",
                        item.highlight ? "text-yellow-400 animate-pulse text-2xl md:text-3xl" : "text-emerald-400",
                      )}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}

                <div className="border-t-2 border-yellow-400/50 pt-6 mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl md:text-3xl font-black text-white">Total Value:</span>
                    <span className="text-3xl md:text-4xl font-black text-green-400">
                      ${totalNumericValue.toLocaleString()}+
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl md:text-3xl font-black text-white">Your Investment:</span>
                    <span className="text-3xl md:text-4xl font-black text-red-400 line-through">
                      ${investmentAmount.toLocaleString()}
                    </span>
                  </div>

                  <div className="savings-card-override">
                    <h3 className="savings-label-override">TOTAL SAVINGS</h3>
                    <div className="savings-value-override">{displaySavings}</div>
                    <p className="text-xl text-yellow-200 font-semibold mt-4">
                      Over {Math.round((calculatedSavings / totalNumericValue) * 100)}% in Savings!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valueCards.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className={cn("glass-card rounded-2xl p-8 text-center bg-gradient-to-br", card.gradient)}
              >
                <div className="flex items-center justify-center mb-6">
                  <card.icon className="w-12 h-12 text-white mr-4" />
                  <span className="text-4xl">{card.emoji}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-lg md:text-xl text-gray-200">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Dominate Your Market?</h3>
            <div className="flex justify-center">
              <DemoPopup triggerLabel="🎯 Experience the AI Demo Now" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
