"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const industries = [
  {
    title: "Real Estate",
    description: "AI-powered lead generation and automated follow-up for realtors",
    icon: "🏠",
    link: "/realtornow",
  },
  {
    title: "Healthcare",
    description: "Patient acquisition and appointment booking automation",
    icon: "🏥",
    link: "/dentistsnow",
  },
  {
    title: "Legal Services",
    description: "Client intake and case management automation",
    icon: "⚖️",
    link: "/lawyersnow",
  },
  {
    title: "Home Services",
    description: "Lead capture and service booking for contractors",
    icon: "🔧",
    link: "/contractorsnow",
  },
  {
    title: "Fitness & Wellness",
    description: "Membership sales and class booking automation",
    icon: "💪",
    link: "/gymsnow",
  },
  {
    title: "Restaurants",
    description: "Online ordering and reservation management",
    icon: "🍽️",
    link: "/restaurantsnow",
  },
]

export default function IndustrySolutions() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Industry-Specific Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored AI automation for your specific industry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-[#00BFFF]/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{industry.icon}</div>
                <CardTitle className="text-white">{industry.title}</CardTitle>
                <CardDescription className="text-gray-300">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-[#00274D] font-semibold"
                  onClick={() => window.open(industry.link, "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-[#00274D] font-bold px-8 py-4"
            onClick={() => window.open("/industries", "_blank")}
          >
            View All Industries
          </Button>
        </div>
      </div>
    </section>
  )
}
