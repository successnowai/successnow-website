"use client"
import { StarryBackground } from "@/components/ui/starry-background"
import { DemoPopup } from "@/components/ui/demo-popup"
import { cn } from "@/lib/utils"
import { Sparkles, Star, Zap, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"

interface ValueStackItem {
  label: string
  value: string
  numericValue: number
  highlight?: boolean
}

function DominatePage() {
  const [isClient, setIsClient] = useState(false)
  const [debugMode, setDebugMode] = useState(false)
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    setIsClient(true)
    setRenderCount((prev) => prev + 1)
    console.log("DominatePage: Component mounted, render count:", renderCount + 1)
  }, [])

  // Define value stack with explicit calculations and validation
  const valueStackItems: ValueStackItem[] = [
    { label: "Custom Build:", value: "$60,000+", numericValue: 60000 },
    { label: "Ads Management:", value: "$11,982", numericValue: 11982 },
    { label: "SEO Domination:", value: "$14,994", numericValue: 14994 },
    { label: "1-on-1 Coaching:", value: "$11,964", numericValue: 11964 },
    { label: "Affiliate Tier Access:", value: "UNLIMITED", highlight: true, numericValue: 0 },
    { label: "Lockout & Vault Access:", value: "EXCLUSIVE", highlight: true, numericValue: 0 },
  ]

  // Calculate total values with detailed logging
  const totalNumericValue = valueStackItems.reduce((sum, item) => {
    console.log(`Adding ${item.label} ${item.numericValue} to total`)
    return sum + item.numericValue
  }, 0)

  const investmentAmount = 35888
  const calculatedSavings = totalNumericValue - investmentAmount
  const displaySavings = "$63,052" // Fixed display value
  const formattedCalculatedSavings = `$${calculatedSavings.toLocaleString()}`

  // Comprehensive logging
  useEffect(() => {
    if (isClient) {
      console.group("DominatePage Value Calculations")
      console.log("Value Stack Items:", valueStackItems)
      console.log("Total Numeric Value:", totalNumericValue)
      console.log("Investment Amount:", investmentAmount)
      console.log("Calculated Savings:", calculatedSavings)
      console.log("Formatted Calculated Savings:", formattedCalculatedSavings)
      console.log("Display Savings (Fixed):", displaySavings)
      console.log("Component State - isClient:", isClient)
      console.log("Render Count:", renderCount)
      console.groupEnd()
    }
  }, [isClient, totalNumericValue, calculatedSavings, formattedCalculatedSavings, displaySavings, renderCount])

  const valueCards = [
    {
      emoji: "⚠️",
      title: "Limited Time Offer",
      body: "Only 5 spots available per industry. Secure your exclusive territory now!",
      color: "from-yellow-400/30 to-rose-400/30",
    },
    {
      emoji: "💎",
      title: "Exclusive Diamond Tier Affiliate Program",
      body: "Earn 50% Recurring MRR from every person you refer to SuccessNOW!",
      color: "from-emerald-400/30 to-teal-400/30",
    },
  ]

  // Loading state with proper styling
  if (!isClient) {
    return (
      <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <StarryBackground className="absolute inset-0 -z-10" />
        <div className="text-white text-3xl font-bold animate-pulse drop-shadow-2xl">Loading Dominate Page...</div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <StarryBackground className="absolute inset-0 -z-10" />

      {/* Comprehensive Debug Panel */}
      <div className="fixed top-4 right-4 z-50 bg-black/90 text-white p-6 rounded-xl text-sm border border-white/20 backdrop-blur-lg max-w-sm">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="w-4 h-4 text-yellow-400" />
          <span className="font-bold">Debug Panel</span>
        </div>
        <div className="space-y-2 text-xs">
          <div>Status: {isClient ? "✅ Hydrated" : "⏳ Loading"}</div>
          <div>Renders: {renderCount}</div>
          <div>Total Value: ${totalNumericValue.toLocaleString()}</div>
          <div>Investment: ${investmentAmount.toLocaleString()}</div>
          <div>Calculated: {formattedCalculatedSavings}</div>
          <div className="text-yellow-400 font-bold">Display: {displaySavings}</div>
          <button
            onClick={() => setDebugMode(!debugMode)}
            className="mt-3 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors w-full"
          >
            {debugMode ? "Hide" : "Show"} Details
          </button>
        </div>
      </div>

      <main className="relative flex flex-col items-center justify-start min-h-screen px-4 py-16 z-10">
        {/* Hero Section */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Zap className="w-16 h-16 text-yellow-400 animate-pulse drop-shadow-2xl" />
          <h1 className="text-5xl font-extrabold text-center text-white md:text-7xl drop-shadow-2xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Dominate Your Market with SuccessNOW
          </h1>
          <Star className="w-16 h-16 text-yellow-400 animate-pulse drop-shadow-2xl" />
        </div>

        <section className="w-full max-w-7xl space-y-10">
          {/* Main Value Stack Card - CRITICAL SECTION */}
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              border: "3px solid rgba(255, 255, 255, 0.5)",
              boxShadow:
                "0 50px 100px -20px rgba(0, 0, 0, 0.9), inset 0 4px 0 rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.1)",
              minHeight: "700px",
            }}
          >
            {/* Animated Top Border */}
            <div
              className="absolute top-0 left-0 w-full h-4 animate-pulse"
              style={{
                background: "linear-gradient(90deg, #fbbf24 0%, #ec4899 25%, #8b5cf6 50%, #06b6d4 75%, #10b981 100%)",
                backgroundSize: "200% 100%",
                animation: "gradient-shift 3s ease-in-out infinite",
              }}
            ></div>

            <div className="p-12 md:p-20">
              <div className="text-center space-y-10">
                {/* Main Title Section */}
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <Sparkles className="w-16 h-16 text-yellow-400 drop-shadow-2xl animate-bounce" />
                  <div className="space-y-2">
                    <h2
                      className="text-7xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tight leading-none"
                      style={{
                        textShadow: "0 0 30px rgba(255, 255, 255, 0.8), 0 10px 20px rgba(0, 0, 0, 0.9)",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      TOTAL VALUE
                    </h2>
                    <h2
                      className="text-7xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tight leading-none"
                      style={{
                        textShadow: "0 0 30px rgba(255, 255, 255, 0.8), 0 10px 20px rgba(0, 0, 0, 0.9)",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      STACKED
                    </h2>
                  </div>
                  <Sparkles className="w-16 h-16 text-yellow-400 drop-shadow-2xl animate-bounce" />
                </div>

                <p
                  className="text-4xl md:text-5xl text-cyan-300 font-bold drop-shadow-2xl tracking-wide animate-pulse"
                  style={{
                    textShadow: "0 0 20px rgba(6, 182, 212, 1), 0 5px 15px rgba(0, 0, 0, 0.8)",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  YOUR PATH TO TOTAL DOMINATION
                </p>

                {/* Value Stack Items Container - CRITICAL DISPLAY AREA */}
                <div
                  className="space-y-10 mt-20 rounded-3xl p-12 border-3 border-white/40"
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                    boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3)",
                    border: "3px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {/* Individual Value Items with Enhanced Styling */}
                  {valueStackItems.map((item, index) => {
                    console.log(`Rendering item ${index}:`, item)
                    return (
                      <div
                        key={`value-item-${index}-${item.label}`}
                        className="flex justify-between items-center text-3xl md:text-4xl border-b-3 border-white/30 pb-8 last:border-b-0"
                        style={{
                          minHeight: "80px",
                          borderBottomWidth: "3px",
                          borderBottomColor: "rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        <span
                          className="text-white font-bold drop-shadow-2xl"
                          style={{
                            textShadow: "0 4px 8px rgba(0, 0, 0, 1), 0 0 10px rgba(255, 255, 255, 0.3)",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          className={cn(
                            "font-black drop-shadow-2xl text-4xl md:text-5xl",
                            item.highlight ? "text-yellow-400 animate-pulse text-5xl md:text-6xl" : "text-emerald-400",
                          )}
                          style={{
                            textShadow: item.highlight
                              ? "0 0 25px rgba(251, 191, 36, 1), 0 5px 15px rgba(0, 0, 0, 0.9)"
                              : "0 0 20px rgba(16, 185, 129, 0.8), 0 5px 15px rgba(0, 0, 0, 0.9)",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    )
                  })}

                  {/* CRITICAL: Total Savings Display Section */}
                  <div
                    className="border-t-4 pt-12 mt-16"
                    style={{
                      borderTopWidth: "4px",
                      borderTopColor: "#fbbf24",
                      borderTopStyle: "solid",
                    }}
                  >
                    <div className="flex justify-between items-center text-5xl md:text-6xl font-black">
                      <span
                        className="text-white drop-shadow-2xl"
                        style={{
                          textShadow: "0 6px 12px rgba(0, 0, 0, 1), 0 0 15px rgba(255, 255, 255, 0.4)",
                          fontFamily: "system-ui, -apple-system, sans-serif",
                        }}
                      >
                        Total Savings:
                      </span>

                      {/* MAIN SAVINGS DISPLAY - Multiple Fallbacks */}
                      <div className="flex flex-col items-end">
                        <span
                          className="text-yellow-400 drop-shadow-2xl animate-pulse text-6xl md:text-7xl font-black"
                          style={{
                            textShadow:
                              "0 0 40px rgba(251, 191, 36, 1), 0 0 20px rgba(251, 191, 36, 0.8), 0 8px 16px rgba(0, 0, 0, 1)",
                            color: "#fbbf24",
                            fontWeight: "900",
                            fontFamily: "system-ui, -apple-system, sans-serif",
                            letterSpacing: "-0.02em",
                          }}
                          data-testid="total-savings-display"
                          data-value="63052"
                          aria-label="Total savings of sixty-three thousand fifty-two dollars"
                        >
                          $63,052
                        </span>

                        {/* Debug Information */}
                        {debugMode && (
                          <div className="mt-4 text-lg text-gray-300 space-y-2 text-right">
                            <div>Calculated: {formattedCalculatedSavings}</div>
                            <div>Raw Calculation: ${calculatedSavings}</div>
                            <div>Display Value: {displaySavings}</div>
                            <div>Component Renders: {renderCount}</div>
                            <div>Hydration Status: {isClient ? "Complete" : "Pending"}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Value Proposition Cards */}
          {valueCards.map((card, cardIndex) => (
            <div
              key={`value-card-${cardIndex}-${card.title}`}
              className={cn(
                "rounded-3xl p-12 text-center backdrop-blur-lg border-3 border-white/40 shadow-2xl transform hover:scale-[1.02] transition-all duration-300",
                "bg-gradient-to-br",
                card.color,
              )}
              style={{
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              <h2 className="flex items-center justify-center gap-6 mb-8 text-4xl font-bold text-white drop-shadow-2xl">
                <span className="text-5xl drop-shadow-lg">{card.emoji}</span>
                <span style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}>{card.title}</span>
              </h2>
              <p
                className="text-2xl text-white/95 drop-shadow-lg font-medium leading-relaxed"
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }}
              >
                {card.body}
              </p>
            </div>
          ))}

          {/* Call-to-Action Section */}
          <div className="flex justify-center pt-12">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <DemoPopup triggerLabel="🎯 Experience the AI Demo Now" />
            </div>
          </div>
        </section>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}

export { DominatePage }
export default DominatePage
