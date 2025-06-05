"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-intersection-observer"
import { AnimatedSwitcher } from "@/components/ui/animated-switcher"

export default function IndustrySolutions() {
  const { ref, isInView } = useInView()

  const industries = [
    {
      emoji: "🚗",
      title: "Auto Dealers",
      benefits: [
        "Book more test drives automatically",
        "Convert leads 24/7 without staffing",
        "Increase financing approvals by 37%",
      ],
      buttonText: "See the AutoDealersNOW Offer!",
      slug: "autodealersnow",
    },
    {
      emoji: "🏡",
      title: "Realtors",
      benefits: [
        "Qualify buyers while you sleep",
        "Book showings without lifting a finger",
        "Never miss a hot lead again",
      ],
      buttonText: "See the RealtorNOW Offer!",
      slug: "realtornow",
    },
    {
      emoji: "🏋️",
      title: "Gyms & Studios",
      benefits: [
        "Fill classes without extra marketing",
        "Reduce membership cancellations by 42%",
        "Automate follow-ups for no-shows",
      ],
      buttonText: "See the GymsNOW Offer!",
      slug: "gymsnow",
    },
    {
      emoji: "🧑‍⚖️",
      title: "Lawyers",
      benefits: [
        "Get more qualified clients",
        "Book consultations automatically",
        "Convert leads while competitors sleep",
      ],
      buttonText: "See the LawyersNOW Offer!",
      slug: "lawyersnow",
    },
    {
      emoji: "💆",
      title: "Medspas",
      benefits: [
        "Book more appointments automatically",
        "Increase treatment package sales",
        "Collect 5-star reviews effortlessly",
      ],
      buttonText: "See the MedspaNOW Offer!",
      slug: "medspanow",
    },
    {
      emoji: "🏦",
      title: "Mortgage Brokers",
      benefits: [
        "Pre-qualify leads without manual work",
        "Close more loans with less effort",
        "Nurture leads until they're ready to buy",
      ],
      buttonText: "See the MortgageNOW Offer!",
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
          <Card
            key={index}
            className={`bg-[#1c2230] border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,191,255,0.2)] cursor-pointer animate-fade-up ${
              isInView ? "animate-show" : ""
            } animate-delay-${(index % 6) * 100}`}
          >
            <CardContent className="p-4 sm:p-5">
              <div className="mb-2 text-lg sm:text-xl">{industry.emoji}</div>
              <h3 className="mb-2 font-bold text-white text-sm sm:text-base">{industry.title}</h3>
              <AnimatedSwitcher
                phrases={industry.benefits}
                className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4"
                interval={25000 + index * 2000}
                emoji={industry.emoji}
                scrolling={true}
              />
              <Button
                className="w-full bg-[#00BFFF] text-[#00274D] hover:bg-[#00BFFF]/90 font-bold py-2 px-3 sm:px-4 text-xs sm:text-sm transition-transform duration-200 hover:scale-105"
                onClick={() => (window.location.href = `/${industry.slug}`)}
              >
                {industry.buttonText}
              </Button>
            </CardContent>
          </Card>
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
