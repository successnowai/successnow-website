"use client"
import { StarryBackground } from "@/components/ui/starry-background"
import { DemoPopup } from "@/components/ui/demo-popup"
import { cn } from "@/lib/utils"

/**
 * Glass-morphic Dominate page showcasing the key program benefits.
 */
function DominatePage() {
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

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen px-4 py-16">
      <StarryBackground className="absolute inset-0 -z-10" />

      <h1 className="mb-10 text-4xl font-extrabold text-center text-white md:text-6xl">
        Dominate Your Market with SuccessNOW 🚀
      </h1>

      <section className="w-full max-w-5xl space-y-8">
        {valueCards.map((card) => (
          <div
            key={card.title}
            className={cn(
              "rounded-2xl p-8 text-center backdrop-blur-lg border border-white/20",
              "bg-gradient-to-br",
              card.color,
            )}
          >
            <h2 className="flex items-center justify-center gap-3 mb-3 text-2xl font-bold text-white">
              <span>{card.emoji}</span>
              {card.title}
            </h2>
            <p className="text-lg text-white/80">{card.body}</p>
          </div>
        ))}

        {/* Instant voice-demo CTA */}
        <div className="flex justify-center">
          <DemoPopup triggerLabel="Experience the AI Demo Now" />
        </div>
      </section>
    </main>
  )
}

export { DominatePage }
export default DominatePage
