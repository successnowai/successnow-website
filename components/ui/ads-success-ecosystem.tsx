"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AdsSuccessEcosystemProps {
  onDemoClick: () => void
}

export function AdsSuccessEcosystem({ onDemoClick }: AdsSuccessEcosystemProps) {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#00BFFF]">The Complete AI Success Ecosystem</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to dominate your market with AI-powered automation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">AI Super Agents</h3>
              <p className="text-gray-300">
                Custom AI agents trained on your business that never sleep, never miss a call, and always follow up.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Smart Funnels</h3>
              <p className="text-gray-300">
                AI-powered funnels that automatically qualify leads, book appointments, and nurture prospects.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Custom Website</h3>
              <p className="text-gray-300">
                Professional website branded to your business with integrated AI chat and lead capture.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Analytics Dashboard</h3>
              <p className="text-gray-300">
                Real-time insights into your AI performance, lead quality, and conversion rates.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">CRM Integration</h3>
              <p className="text-gray-300">
                Seamlessly connects with your existing tools and workflows for maximum efficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-[#00BFFF]/20 hover:border-[#00BFFF]/40 transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-[#00BFFF]">Training & Support</h3>
              <p className="text-gray-300">
                Complete onboarding, training, and ongoing support to ensure your success.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onDemoClick}
            className="px-8 py-4 bg-[#00BFFF] text-white font-semibold rounded-md shadow-lg hover:bg-[#0099CC] transition-all duration-200 hover:scale-105 text-base"
          >
            See It In Action - Launch Demo NOW
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AdsSuccessEcosystem
