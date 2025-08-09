"use client"
import { Target, Zap, MessageCircle, Star, Bot, Sparkles } from "lucide-react"

export default function AdsNowSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-[#00274D]/40 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Complete AI Ecosystem:</span>
            <br />
            <span className="text-purple-400">AdsNow.ai</span>
            <span className="text-white"> + </span>
            <span className="text-[#00BFFF]">SuccessNOW AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The only platform that creates high-converting ads AND instantly converts every lead into customers using
            data from <strong className="text-[#00BFFF]">10,000+ leads generated daily</strong>
          </p>
        </div>

        {/* Revolutionary Feature Section */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-purple-500/30 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">REVOLUTIONARY</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">AdsNOW Super Agent</h3>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simply text your AI AdsNOW Super Agent and watch the magic happen!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: "1",
                title: "Create Ads",
                desc: "Agent creates ads for your review",
                icon: Target,
                color: "from-purple-600 to-purple-700",
              },
              {
                step: "2",
                title: "Send Copy",
                desc: "Sends you copy to review",
                icon: MessageCircle,
                color: "from-pink-600 to-pink-700",
              },
              {
                step: "3",
                title: "Choose & Edit",
                desc: "Choose 1 ad or all, make edits",
                icon: Star,
                color: "from-blue-600 to-blue-700",
              },
              {
                step: "4",
                title: "Launch Ads",
                desc: "Set budget and launch instantly",
                icon: Zap,
                color: "from-green-600 to-green-700",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg`}
                >
                  {process.step}
                </div>
                <process.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <h4 className="\
