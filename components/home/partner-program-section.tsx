"use client"

import { useState } from "react"

export default function PartnerProgramSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-800">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400">💼</div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Partner with SuccessNOW &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Earn</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Love SuccessNOW? Refer businesses and agencies to our AI solutions and earn generous recurring
              commissions! Partners are automatically enrolled in our multi-tier program.
            </p>
          </div>

          {/* Commission Tiers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300 font-medium">Direct Referrals</div>
                <div className="text-gray-400 text-sm mt-1">Businesses you refer</div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">15%</div>
                <div className="text-gray-300 font-medium">2nd Tier</div>
                <div className="text-gray-400 text-sm mt-1">Their direct referrals</div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">5%</div>
                <div className="text-gray-300 font-medium">3rd Tier</div>
                <div className="text-gray-400 text-sm mt-1">Their referrals' referrals</div>
              </div>
            </div>
          </div>

          {/* Earnings Potential */}
          <div className="text-center mb-8">
            <p className="text-gray-300 text-base sm:text-lg mb-2">
              Refer just 4 businesses to our AI solutions, and you could earn over
            </p>
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              $1,500 every month!
            </div>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Plus, earn on referrals made by those you bring in.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`
                inline-flex items-center justify-center
                px-8 py-4 text-lg font-semibold rounded-xl
                transition-all duration-300 transform
                ${
                  isHovered
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 scale-105 shadow-lg shadow-cyan-500/25"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500"
                }
                text-white hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900
              `}
            >
              <span className="mr-2">🤝</span>
              Start Referring & Earning
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="text-gray-400">
                <div className="text-cyan-400 font-semibold">Multi-Tier Rewards</div>
                <div className="text-sm">Earn from 3 levels deep</div>
              </div>
              <div className="text-gray-400">
                <div className="text-cyan-400 font-semibold">Monthly Payouts</div>
                <div className="text-sm">Reliable income stream</div>
              </div>
              <div className="text-gray-400">
                <div className="text-cyan-400 font-semibold">Easy Tracking</div>
                <div className="text-sm">Real-time dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
