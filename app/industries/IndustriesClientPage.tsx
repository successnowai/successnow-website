"use client"

import Navbar from "@/components/navigation/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RotatingText } from "@/components/ui/rotating-text"
import { useInView } from "@/hooks/use-intersection-observer"
import { ArrowRight, CheckCircle } from "lucide-react"
import Footer from "@/components/home/footer"
import StarryBackground from "@/components/ui/starry-background"

export default function IndustriesClientPage() {
  const { ref: heroRef } = useInView()
  const { ref: industriesRef, isInView: industriesAreInView } = useInView()
  const { ref: ctaRef, isInView: ctaIsInView } = useInView()

  const rotatingWords = ["Industries", "Businesses", "Sectors", "Markets", "Niches"]

  const allIndustries = [
    {
      emoji: "🚗",
      title: "Auto Dealers",
      rotatingFeatures: [
        "Book Test Drives Automatically",
        "Convert Leads 24/7",
        "Increase Financing Approvals",
        "Follow Up Cold Leads",
        "Qualify Hot Prospects",
      ],
      buttonText: "See AutoDealersNOW",
      slug: "autodealersnow",
    },
    {
      emoji: "🏡",
      title: "Realtors",
      rotatingFeatures: [
        "Qualify Buyers Instantly",
        "Book Showings Automatically",
        "Never Miss Hot Leads",
        "Pre-Qualify Timeline",
        "Prioritize Best Prospects",
      ],
      buttonText: "See RealtorNOW",
      slug: "realtornow",
    },
    {
      emoji: "🏋️",
      title: "Gyms & Studios",
      rotatingFeatures: [
        "Fill Classes Automatically",
        "Reduce Cancellations by 42%",
        "Automate Follow-Ups",
        "Boost Member Retention",
        "Manage Waitlists Smart",
      ],
      buttonText: "See GymsNOW",
      slug: "gymsnow",
    },
    {
      emoji: "🧑‍⚖️",
      title: "Lawyers",
      rotatingFeatures: [
        "Get Qualified Clients",
        "Book Consultations Auto",
        "Convert While Competitors Sleep",
        "Handle Intake Automatically",
        "Collect 5-Star Reviews",
      ],
      buttonText: "See LawyersNOW",
      slug: "lawyersnow",
    },
    {
      emoji: "💆",
      title: "Medspas",
      rotatingFeatures: [
        "Book Appointments Auto",
        "Increase Package Sales",
        "Collect Reviews Effortlessly",
        "Upsell High-Margin Services",
        "Confirm Appointments Smart",
      ],
      buttonText: "See MedspaNOW",
      slug: "medspanow",
    },
    {
      emoji: "🏦",
      title: "Mortgage Brokers",
      rotatingFeatures: [
        "Pre-Qualify Without Manual Work",
        "Close More Loans Easily",
        "Nurture Until Ready to Buy",
        "Automate Document Reminders",
        "Send Rate Alerts Smart",
      ],
      buttonText: "See MortgageNOW",
      slug: "mortgagenow",
    },
    {
      emoji: "🦷",
      title: "Dentists",
      rotatingFeatures: [
        "Book Appointments 24/7",
        "Reduce No-Shows",
        "Automate Patient Recall",
        "Generate 5-Star Reviews",
        "Fill Your Schedule",
      ],
      buttonText: "See DentistsNOW",
      slug: "dentistsnow",
    },
    {
      emoji: "🦴",
      title: "Chiropractors",
      rotatingFeatures: [
        "Automate Appointment Booking",
        "Follow-Up Post-Treatment",
        "Generate Positive Reviews",
        "Enroll in Wellness Programs",
        "Reduce No-Shows",
      ],
      buttonText: "See ChiropractorsNOW",
      slug: "chiropractorsnow",
    },
    {
      emoji: "☀️",
      title: "Solar Companies",
      rotatingFeatures: [
        "Generate Qualified Leads",
        "Automate Consultation Booking",
        "Nurture Prospects Long-Term",
        "Streamline Project Updates",
        "Increase Installation Rate",
      ],
      buttonText: "See SolarNOW",
      slug: "solarnow",
    },
    {
      emoji: "🏠",
      title: "Roofers",
      rotatingFeatures: [
        "Automate Quote Requests",
        "Schedule Inspections 24/7",
        "Follow-Up on Estimates",
        "Generate Customer Reviews",
        "Win More Bids",
      ],
      buttonText: "See RoofersNOW",
      slug: "roofersnow",
    },
    {
      emoji: "🔧",
      title: "Plumbers",
      rotatingFeatures: [
        "Book Emergency Calls Instantly",
        "Automate Service Reminders",
        "Dispatch Technicians Faster",
        "Collect Payments & Reviews",
        "Increase Repeat Business",
      ],
      buttonText: "See PlumbersNOW",
      slug: "plumbersnow",
    },
    {
      emoji: "💨",
      title: "HVAC Companies",
      rotatingFeatures: [
        "Schedule Maintenance Calls",
        "Automate Tune-Up Reminders",
        "Provide Instant Quotes",
        "Manage Technician Schedules",
        "Boost Service Contracts",
      ],
      buttonText: "See HVACNOW",
      slug: "hvacnow",
    },
    {
      emoji: "👷",
      title: "Contractors",
      rotatingFeatures: [
        "Qualify New Project Leads",
        "Automate Bid Follow-Ups",
        "Schedule Client Meetings",
        "Streamline Project Communication",
        "Build a 5-Star Reputation",
      ],
      buttonText: "See ContractorsNOW",
      slug: "contractorsnow",
    },
    {
      emoji: "🍽️",
      title: "Restaurants",
      rotatingFeatures: [
        "Automate Table Reservations",
        "Manage Waitlists Intelligently",
        "Promote Daily Specials",
        "Drive Repeat Customers",
        "Boost Online Orders",
      ],
      buttonText: "See RestaurantsNOW",
      slug: "restaurantsnow",
    },
    {
      emoji: "🛠️",
      title: "Custom Build",
      rotatingFeatures: [
        "Build Custom AI Solutions",
        "Tailor to Your Business",
        "Unique Industry Requirements",
        "Personalized Development",
        "Complete Custom Automation",
      ],
      buttonText: "See CustomBuildNOW",
      slug: "custombuildnow",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0f1a] to-[#00274D] text-white">
      <StarryBackground />
      <Navbar currentPage="industries" />

      {/* Hero Section */}
      <section ref={heroRef} className="text-center py-12 sm:py-16 px-4 sm:px-6 md:px-10 overflow-hidden pt-20">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-white animate-fadeTextUp">AI Solutions for Every</span>
            <span className="block animate-fadeTextUp animation-delay-300">
              <RotatingText words={rotatingWords} className="text-[#00BFFF]" interval={2500} />
            </span>
            <span className="block text-white animate-fadeTextUp animation-delay-600">we serve</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeTextUp animation-delay-900 px-2">
            Discover how <strong className="text-white">SuccessNOW AI Superagents</strong> are transforming businesses
            across industries with automated lead generation, client acquisition, and growth systems.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fadeTextUp animation-delay-1200 px-4">
            <Button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              onClick={() => document.getElementById("available-industries")?.scrollIntoView({ behavior: "smooth" })}
            >
              EXPLORE AVAILABLE SOLUTIONS →
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-sm sm:text-base bg-transparent"
              onClick={() => (window.location.href = "/payment")}
            >
              Get AI NOW
            </Button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BFFF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* All Industries Section */}
      <section id="available-industries" ref={industriesRef} className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-4 text-white animate-fade-up ${industriesAreInView ? "animate-show" : ""}`}
            >
              🚀 Industry-Specific AI Solutions
            </h2>
            <p
              className={`text-gray-300 text-lg max-w-2xl mx-auto animate-fade-up ${industriesAreInView ? "animate-show" : ""} animate-delay-100`}
            >
              Ready-to-deploy AI systems tailored for your industry's unique needs.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            {allIndustries.map((industry, index) => (
              <Card
                key={industry.title}
                className={`bg-[#1c2230] border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,191,255,0.2)] animate-fade-up ${
                  industriesAreInView ? "animate-show" : ""
                } animate-delay-${index * 100}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="text-4xl">{industry.emoji}</div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                  </div>

                  <div className="mb-8 min-h-[60px] flex items-center justify-center">
                    <h4 className="text-xl font-bold">
                      <span className="text-white">AI that </span>
                      <RotatingText
                        words={industry.rotatingFeatures}
                        className="text-[#00BFFF]"
                        interval={3000 + index * 100}
                      />
                    </h4>
                  </div>

                  <Button
                    className="w-full bg-[#00BFFF] text-[#00274D] hover:bg-[#00BFFF]/90 font-bold py-3 px-4 text-base transition-transform duration-200 hover:scale-105"
                    onClick={() => (window.location.href = `/${industry.slug}`)}
                  >
                    {industry.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg mb-4">
              Don't see your industry? Our AI demo can adapt to any business need.
            </p>
            <Button
              variant="outline"
              className="border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 bg-transparent"
              onClick={() => (window.location.href = "/demo")}
            >
              Request Custom Demo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 px-6">
        <div
          className={`max-w-4xl mx-auto text-center bg-[#00274D]/80 backdrop-blur-sm p-12 rounded-2xl border border-[#00BFFF]/30 animate-fade-up ${
            ctaIsInView ? "animate-show" : ""
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#00BFFF]">Ready to Transform Your Industry?</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join successful businesses already using SuccessNOW AI to automate growth, generate leads, and close more
            sales — while getting back their time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="px-8 py-4 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-base"
              onClick={() => (window.location.href = "/payment")}
            >
              Get AI NOW <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-md hover:bg-[#00BFFF] hover:text-white transition-all duration-200 hover:scale-105 text-base bg-transparent"
              onClick={() => (window.location.href = "/demo")}
            >
              Launch Instant Demo NOW
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
