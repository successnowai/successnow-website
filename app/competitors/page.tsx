import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"
import StarryBackground from "@/components/ui/starry-background"
import CompetitorBreadcrumb from "@/components/ui/competitor-breadcrumb"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"

// ... existing metadata and competitors data ...

export default function CompetitorsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      {/* ... existing schema ... */}

      <section className="relative pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <CompetitorBreadcrumb />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gray-900/90 text-white border-2 border-cyan-400/60 px-6 py-2 text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <Target className="w-4 h-4 mr-2 text-cyan-400" />
              Competitive Analysis
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">SuccessNOW vs</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              The Competition
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-12 max-w-4xl mx-auto">
            Why pay <span className="text-red-400 font-semibold">triple the price</span> for
            <span className="text-red-400 font-semibold"> half the features</span>? See how SuccessNOW delivers the{" "}
            <span className="text-cyan-300 font-semibold">complete AI growth suite</span>
            while competitors offer just pieces of the puzzle.
          </p>

          <div className="mb-12">
            <VoiceSnippetPlayer
              text="Why pay triple the price for half the features? See how SuccessNOW delivers the complete AI growth suite while competitors offer just pieces of the puzzle. We're up to 93% cheaper than competitors with 5x more features and 24/7 operation."
              category="competitors-hero"
              variant="compact"
            />
          </div>

          {/* ... existing stats and buttons ... */}
        </div>
      </section>

      {/* ... existing sections ... */}

      {/* Why SuccessNOW Wins Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                SuccessNOW
              </span>{" "}
              <span className="text-white">Always Wins</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              While competitors offer pieces, we deliver the complete AI growth engine
            </p>

            <VoiceSnippetPlayer
              text="Why does SuccessNOW always win? While competitors offer pieces, we deliver the complete AI growth engine with better pricing, more features, 24/7 operation, and easy setup. See the detailed comparison of how we beat every competitor."
              category="why-we-win"
              variant="compact"
            />
          </div>

          {/* ... existing cards ... */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Stop Paying More for</span> <span className="text-red-400">Less</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join our Pilot Program and get the complete AI growth suite for a fraction of what competitors charge
          </p>

          <div className="mb-8">
            <VoiceSnippetPlayer
              text="Stop paying more for less. Join our Pilot Program and get the complete AI growth suite for a fraction of what competitors charge. Just $988 setup plus $997 per month with 30-day money-back guarantee - No Risk, Just Missed Opportunity!"
              category="competitors-cta"
              variant="compact"
            />
          </div>

          {/* ... existing pricing and buttons ... */}
        </div>
      </section>
    </div>
  )
}
