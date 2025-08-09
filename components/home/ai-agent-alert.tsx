"use client"

import { PhoneCall, MessageSquare, FileText, BrainCircuit, BarChart2, History } from "lucide-react"

export default function AiAgentAlert() {
  const features = [
    { icon: PhoneCall, text: "Take & Make Voice Calls" },
    { icon: MessageSquare, text: "Answer SMS, Email & Social Media" },
    { icon: BarChart2, text: "Launch Paid Ads Like a Pro" },
    { icon: FileText, text: "Update Client Notes on Every Call" },
    { icon: BrainCircuit, text: "Learns Your Business & Client History" },
    { icon: History, text: "Remembers previous conversations to build rapport" },
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 border border-blue-500/30 shadow-2xl shadow-blue-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-neural-network-background.png')] bg-cover opacity-5"></div>
          <div className="relative p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Revolutionary{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  SuccessNOW AI Agents
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                It's like having the best salesperson imaginable—one who never sleeps, never gets sick, and works 24/7
                for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                  <feature.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center bg-blue-900/20 border border-blue-500/50 rounded-lg p-6">
              <p className="text-2xl md:text-3xl font-bold text-white">
                Less than <span className="text-cyan-300">30 cents a minute.</span>
              </p>
              <p className="text-gray-300 mt-1">
                An average 2-3 minute sales call costs less than $1 per booked appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
