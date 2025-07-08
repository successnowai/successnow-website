import PartnerOptinForm from "@/components/forms/PartnerOptinForm"
import StarryBackground from "@/components/ui/starry-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, Target, Rocket } from "lucide-react"
import { DemoPopup } from "@/components/ui/demo-popup"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"

export default function PartnerSignupPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <main className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Become a SuccessNOW.ai Partner</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our partner program to bring cutting-edge AI solutions to your clients and earn recurring revenue.
          </p>
          <div className="flex justify-center">
            <DemoPopup trigger={<GlowingOrbCta label="See The AI in Action" />} />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Handshake className="w-8 h-8 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold">Why Partner With Us?</h3>
                </div>
                <p className="text-gray-400">
                  Leverage our powerful AI platform to deliver incredible results for your clients while building a new,
                  stable revenue stream for your agency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Target className="w-8 h-8 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold">Who is this for?</h3>
                </div>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>Marketing Agencies</li>
                  <li>Business Consultants</li>
                  <li>SaaS Resellers</li>
                  <li>Industry Influencers</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Rocket className="w-8 h-8 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold">What You Get</h3>
                </div>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>Generous Recurring Commissions</li>
                  <li>Full Training & Support</li>
                  <li>White-labeling Options</li>
                  <li>Dedicated Partner Manager</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800">Apply to Become a Partner</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <PartnerOptinForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
