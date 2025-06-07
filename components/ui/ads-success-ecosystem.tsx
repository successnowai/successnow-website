"use client"

import { Button } from "@/components/ui/button"

interface AdsSuccessEcosystemProps {
  onDemoClick: () => void
}

export function AdsSuccessEcosystem({ onDemoClick }: AdsSuccessEcosystemProps) {
  return (
    <section className="relative py-16 px-6 md:px-10 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-[#0B1426]/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Complete AI Ecosystem:</span>
            <br />
            <span className="text-purple-400">AdsNow.ai</span>
            <span className="text-white"> + </span>
            <span className="text-[#00BFFF]">SuccessNOW AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The only platform that creates high-converting ads AND instantly converts every lead into customers using
            data from <span className="text-[#00BFFF] font-bold">10,000+ leads generated daily</span>
          </p>
        </div>

        {/* Two-Column Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* AdsNow.ai Column */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-purple-600 rounded-full px-6 py-3">
                <span className="text-white font-bold text-lg">🎯 AdsNow.ai</span>
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">AI Ad Creation & Optimization</h3>
              <p className="text-purple-300">Creates, launches, and optimizes ads 24/7</p>
            </div>

            <div className="space-y-4">
              {[
                "Creates High-Converting Ads Automatically",
                "Optimizes Campaigns 24/7 for Best ROI",
                "Launches Across All Platforms Instantly",
                "Uses Data from 10,000+ Daily Leads",
              ].map((feature, index) => (
                <div key={index} className="bg-purple-800/30 rounded-lg p-4 border border-purple-600/30">
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-3 flex-shrink-0">🎯</span>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SuccessNOW AI Column */}
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#00BFFF] rounded-full px-6 py-3">
                <span className="text-white font-bold text-lg">⚡ SuccessNOW AI</span>
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">AI Lead Engagement & Conversion</h3>
              <p className="text-blue-300">Instantly converts every lead into customers</p>
            </div>

            <div className="space-y-4">
              {[
                "Instantly Engages Every Lead 24/7",
                "Books Appointments Automatically",
                "Follows Up Always, Never Misses a Lead",
                "Gets Reviews & Referrals Automatically",
              ].map((feature, index) => (
                <div key={index} className="bg-blue-800/30 rounded-lg p-4 border border-blue-600/30">
                  <div className="flex items-center">
                    <span className="text-[#00BFFF] mr-3 flex-shrink-0">⚡</span>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl font-bold text-[#00BFFF] mb-2">10,000+</div>
            <div className="text-gray-300">Leads Generated Daily</div>
          </div>
          <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-bold text-[#00BFFF] mb-2">24/7</div>
            <div className="text-gray-300">AI Operations</div>
          </div>
          <div className="text-center bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-2">📈</div>
            <div className="text-3xl font-bold text-[#00BFFF] mb-2">500+</div>
            <div className="text-gray-300">Businesses Automated</div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Complete Sales Automation Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "AI Creates Ads",
                desc: "AdsNow.ai generates high-converting ads",
                color: "purple",
              },
              {
                step: "2",
                title: "Launches & Optimizes",
                desc: "Deploys across platforms and optimizes 24/7",
                color: "purple",
              },
              {
                step: "3",
                title: "Instant Engagement",
                desc: "SuccessNOW AI engages every lead immediately",
                color: "blue",
              },
              {
                step: "4",
                title: "Converts to Sales",
                desc: "Books appointments and closes deals automatically",
                color: "blue",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full ${item.color === "purple" ? "bg-purple-600" : "bg-[#00BFFF]"} flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">Ready for Complete AI Automation?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Get both AdsNow.ai and SuccessNOW AI working together to dominate your market
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-[#00BFFF] text-white font-semibold rounded-md shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-base"
              onClick={onDemoClick}
            >
              Get Complete AI System →
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-md hover:bg-purple-500 hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => window.open("https://adsnow.ai", "_blank")}
            >
              Learn More About AdsNow.ai
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
