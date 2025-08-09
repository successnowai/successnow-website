import StarryBackground from "@/components/ui/starry-background"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Mail, Rocket } from "lucide-react"

export default function DominatePaidPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 pt-20">
        <main className="container mx-auto px-4 py-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Welcome to JED-AI!
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Congratulations! You've successfully secured your exclusive spot in the SuccessNOW JED-AI Program.
            </p>
          </div>

          {/* Next Steps */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-cyan-400 mr-3" />
                  What Happens Next?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Onboarding Call Scheduled</h3>
                        <p className="text-gray-300">
                          Our JED-AI specialist will contact you within 24 hours to schedule your personalized
                          onboarding session.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">AI System Setup</h3>
                        <p className="text-gray-300">
                          We'll configure your custom AI agents and integrate them with your existing business systems.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Territory Protection</h3>
                        <p className="text-gray-300">
                          Your exclusive geographical area is now protected - no competitors in your territory!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Diamond Tier Activation</h3>
                        <p className="text-gray-300">
                          Your Diamond Tier Affiliate status is activated - start earning 50% recurring commissions!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Launch & Dominate</h3>
                        <p className="text-gray-300">
                          Go live with your AI-powered business transformation and start dominating your market!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        6
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Ongoing Support</h3>
                        <p className="text-gray-300">
                          24/7 support and continuous optimization to ensure maximum ROI from your AI investment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Immediate Support</h3>
                  <p className="text-gray-300 mb-4">Have questions? Our JED-AI team is standing by.</p>
                  <a
                    href="tel:8666125353"
                    className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    (866) 612-5353
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                <CardContent className="p-6 text-center">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Program Resources</h3>
                  <p className="text-gray-300 mb-4">Access your JED-AI member portal and resources.</p>
                  <a
                    href="https://successnow.ai"
                    className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    successnow.ai
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Important Notice */}
            <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 mt-8">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">📧 Check Your Email</h3>
                <p className="text-gray-200">
                  We've sent you a confirmation email with your JED-AI Program details, next steps, and access
                  information. If you don't see it in your inbox, please check your spam folder.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
