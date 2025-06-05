"use client"

import type React from "react"

import { useInView } from "@/hooks/use-intersection-observer"

export default function PricingTable() {
  const { ref, isInView } = useInView()

  const bots = [
    {
      name: "Speed to Lead",
      role: "Instant engagement",
      description: "Calls/texts every lead in seconds",
    },
    {
      name: "SalesBot",
      role: "Appointment closer",
      description: "Books calls, sends contracts, closes",
    },
    {
      name: "Ads Bot",
      role: "Media buyer",
      description: "Creates + optimizes high-converting ads",
    },
    {
      name: "Follow-Up Bot",
      role: "Reactivator",
      description: "Texts/calls unsold leads over time",
    },
    {
      name: "Nurturing Bot",
      role: "Trust builder",
      description: "Builds relationships, collects reviews",
    },
    {
      name: "Accountability Bot",
      role: "Task tracker",
      description: "Holds your team accountable daily",
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-15">
      <h2
        className={`mb-6 sm:mb-8 text-center text-2xl sm:text-3xl font-bold text-white animate-fade-up ${isInView ? "animate-show" : ""}`}
      >
        Your Full AI Team – <span className="text-[#00BFFF]">90% Off Setup</span>
      </h2>
      <div className={`overflow-x-auto animate-fade-up ${isInView ? "animate-show" : ""} animate-delay-200`}>
        <table className="mx-auto w-full max-w-4xl text-white text-xs sm:text-sm md:text-base">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="pb-3 sm:pb-4 text-left font-bold text-xs sm:text-sm">Bot Name</th>
              <th className="pb-3 sm:pb-4 text-left font-bold text-xs sm:text-sm">Role</th>
              <th className="pb-3 sm:pb-4 text-left font-bold text-xs sm:text-sm">What It Does</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {bots.map((bot, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2 sm:py-3 font-medium text-xs sm:text-sm">{bot.name}</td>
                <td className="py-2 sm:py-3 text-gray-300 text-xs sm:text-sm">{bot.role}</td>
                <td className="py-2 sm:py-3 text-gray-300 text-xs sm:text-sm">{bot.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
