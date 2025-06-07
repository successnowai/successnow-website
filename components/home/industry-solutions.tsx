"use client"

import type React from "react"
import { useInView } from "@/hooks/use-intersection-observer"
import { AnimatedSwitcher } from "@/components/ui/animated-switcher"

export default function IndustrySolutions() {
  const { ref, isInView } = useInView()

  const industries = [
    {
      emoji: "🚗",
      title: "Auto Dealers",
      checkmark: "✅",
      benefits: [
        "Increase Financing Approvals",
        "Book More Test Drives",
        "Convert Leads 24/7",
        "Qualify Buyers Instantly",
      ],
      buttonText: "See AutoDealersNOW",
      slug: "autodealersnow",
    },
    {
      emoji: "🏡",
      title: "Realtors",
      checkmark: "✅",
      benefits: [
        "Book Showings Automatically",
        "Qualify Buyers While You Sleep",
        "Never Miss Hot Leads",
        "Close More Deals Faster",
      ],
      buttonText: "See RealtorNOW",
      slug: "realtornow",
    },
    {
      emoji: "🏋️",
      title: "Gyms & Studios",
      checkmark: "✅",
      benefits: [
        "Reduce Cancellations by 42%",
        "Fill Classes Without Marketing",
        "Automate Follow-ups for No-shows",
        "Boost Member Retention",
      ],
      buttonText: "See GymsNOW",
      slug: "gymsnow",
    },
    {
      emoji: "🧑‍⚖️",
      title: "Lawyers",
      checkmark: "✅",
      benefits: [
        "Book Consultations Auto",
        "Get More Qualified Clients",
        "Convert Leads While Competitors Sleep",
        "Handle Intake 24/7",
      ],
      buttonText: "See LawyersNOW",
      slug: "lawyersnow",
    },
    {
      emoji: "💆",
      title: "Medspas",
      checkmark: "✅",
      benefits: [
        "Collect Reviews Effortlessly",
        "Book Appointments Automatically",
        "Increase Treatment Package Sales",
        "Reduce No-Shows by 60%",
      ],
      buttonText: "See MedspaNOW",
      slug: "medspanow",
    },
    {
      emoji: "🏦",
      title: "Mortgage Brokers",
      checkmark: "✅",
      benefits: [
        "Close More Loans Easily",
        "Pre-qualify Leads Without Work",
        "Nurture Leads Until Ready",
        "Beat Competitors on Speed",
      ],
      buttonText: "See MortgageNOW",
      slug: "mortgagenow",
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="mx-auto max-w-6xl px-4 sm:px-5 py-12 sm:py-15">
      <h2
        className={`mb-6 sm:mb-8 text-center text-2xl sm:text-3xl font-bold text-white animate-fade-up ${isInView ? "animate-show" : ""}`}
      >
        AI-Powered Solutions for Top Industries
      </h2>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer animate-fade-up ${
              isInView ? "animate-show" : ""
            } animate-delay-${(index % 6) * 100}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{industry.emoji}</span>
                <h3 className="font-bold text-white text-base sm:text-lg">{industry.title}</h3>
              </div>
              <span className="text-green-400 text-xl">{industry.checkmark}</span>
            </div>

            <div className="mb-6 min-h-[60px] flex items-center">
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="text-white font-bold">AI that </span>
                <AnimatedSwitcher
                  phrases={industry.benefits}
                  className="text-blue-400 font-bold inline"
                  interval={3000 + index * 500}
                  scrolling={false}
                />
              </p>
            </div>

            <button
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base min-h-[44px]"
              onClick={() => (window.location.href = `/${industry.slug}`)}
            >
              {industry.buttonText} →
            </button>
          </div>
        ))}
      </div>
      <p
        className={`mt-6 sm:mt-8 text-center text-gray-300 animate-fade-up ${isInView ? "animate-show" : ""} animate-delay-500 text-sm sm:text-base px-4`}
      >
        {"Don't see your industry? Our AI demo will adapt. A Custom Dev Agent will follow up after your live test."}
      </p>
    </section>
  )
}
