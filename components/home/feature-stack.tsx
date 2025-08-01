import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "AI-Powered Websites",
    description: "Custom-designed websites that convert visitors into customers automatically",
    icon: "🌐",
  },
  {
    title: "Smart Ad Management",
    description: "AI creates, launches, and optimizes your ads across all platforms",
    icon: "📈",
  },
  {
    title: "24/7 AI Sales Agents",
    description: "Never miss a lead with AI agents that work around the clock",
    icon: "🤖",
  },
  {
    title: "Automated Follow-up",
    description: "Nurture leads automatically until they're ready to buy",
    icon: "📧",
  },
  {
    title: "Lead Generation",
    description: "Attract and capture high-quality leads on autopilot",
    icon: "🎯",
  },
  {
    title: "Analytics & Insights",
    description: "Track performance and optimize for maximum ROI",
    icon: "📊",
  },
]

export default function FeatureStack() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need to Dominate</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">A complete AI-powered business automation platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-[#00BFFF]/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
