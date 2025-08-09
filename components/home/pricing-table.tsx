"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingTable() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-400 uppercase tracking-wider mb-4">
              <span role="img" aria-label="fire">
                🔥
              </span>{" "}
              Limited Time: 90% OFF{" "}
              <span role="img" aria-label="fire">
                🔥
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-2">
              The SuccessNOW AI Systems - Your AI Agent All-in-One Platform
            </p>
            <p className="text-lg text-gray-400 mb-6">
              Usually <span className="line-through">$35,000</span>, Now Just
            </p>
            <div className="text-6xl sm:text-7xl font-extrabold text-white mb-6">$3,488</div>
            <div className="bg-green-500/10 border border-green-500 text-green-300 rounded-lg px-6 py-4 mb-6 inline-block text-lg font-semibold">
              + 2 MONTHS FREE Platform Access (Save $1,994)
            </div>

            {/* New Bonuses Section */}
            <div className="space-y-4 mb-8">
              <div className="bg-purple-500/10 border border-purple-500 text-purple-300 rounded-lg px-6 py-4 text-lg font-semibold">
                🎁 BONUS: AdsNOW AI Agent by adsnow.ai included
              </div>
              <div className="bg-blue-500/10 border border-blue-500 text-blue-300 rounded-lg px-6 py-4 text-lg font-semibold">
                🎁 BONUS: SEONOW by SEOexperts.ai included
              </div>
            </div>

            <div>
              <Link href="/signup" passHref>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
