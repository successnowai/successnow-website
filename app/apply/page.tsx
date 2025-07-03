import type React from "react"
import StarryBackground from "@/components/ui/starry-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Rocket,
  Diamond,
  DollarSign,
  Sparkles,
  Package,
  Megaphone,
  Search,
  UserCheck,
  Lock,
  BrainCircuit,
  Wallet,
} from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

const FeatureCard = ({
  icon: Icon,
  title,
  value,
  children,
}: { icon: React.ElementType; title: string; value: string; children: React.ReactNode }) => (
  <Card className="bg-black/50 backdrop-blur-lg border border-gray-700/80 h-full">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
          <p className="text-cyan-400 font-semibold">Value: {value}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent className="text-gray-300 space-y-2">{children}</CardContent>
  </Card>
)

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 pt-12 md:pt-20">
        {/* Header Banner */}
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 text-sm font-bold rounded-full mb-8 shadow-lg shadow-cyan-500/20">
              🚀 SUCCESSNOW JED-AI PROGRAM - LIMITED TO 5 PEOPLE PER INDUSTRY - ONLY 1 PER GEOGRAPHICAL AREA!
            </Badge>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SuccessNOW JED-AI Program
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-cyan-400 max-w-4xl mx-auto">
              Become a JED-AI MASTER and Master AI before AI becomes your MASTER. Join the revolution, don't become a
              victim of it.
            </p>
          </div>

          {/* Application & Value Stack Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <Card className="lg:col-span-3 bg-black/50 backdrop-blur-lg border border-gray-700/80 shadow-2xl shadow-blue-500/10">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center text-white">
                    Apply for the JED-AI Program
                  </CardTitle>
                  <p className="text-gray-300 text-center">Complete your application to secure your exclusive spot.</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Temporary Form Fields for Demo */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="First Name"
                          className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                        />
                        <Input
                          placeholder="Last Name"
                          className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                        />
                      </div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                      <Input
                        placeholder="Business Name"
                        className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                      <Input
                        placeholder="Industry"
                        className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                      <Input
                        placeholder="City, State"
                        className="bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                      <Textarea
                        placeholder="Tell us about your business goals..."
                        className="bg-gray-800/80 border-gray-700 text-white min-h-[120px] placeholder:text-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>

                    <div className="space-y-3 rounded-lg bg-gray-800/50 p-4 border border-gray-700/50">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          className="mt-1 w-5 h-5 border-2 border-gray-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                          By submitting this application, you agree to receive marketing communications and text
                          messages from SuccessNOW.ai. You can opt-out at any time.
                        </label>
                      </div>
                    </div>

                    <Link href="/dominate-checkout">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 text-lg shadow-lg shadow-cyan-500/30">
                        Submit Application & Continue to Payment
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Total Value Stacked */}
              <Card className="lg:col-span-2 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-cyan-900/60 backdrop-blur-lg border-2 border-purple-400 shadow-2xl shadow-purple-500/20 flex flex-col">
                <CardHeader>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                      <Sparkles className="w-8 h-8 text-purple-300" />
                      TOTAL VALUE STACKED
                    </h4>
                    <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      YOUR PATH TO TOTAL DOMINATION
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col justify-center">
                  <div className="space-y-2 text-gray-300 mb-6 text-md">
                    <div className="flex justify-between">
                      <span>Custom Build:</span> <span className="font-semibold text-white">$60,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ads Management:</span> <span className="font-semibold text-white">$11,982</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SEO Domination:</span> <span className="font-semibold text-white">$14,994</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1-on-1 Coaching:</span> <span className="font-semibold text-white">$11,964</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Affiliate Tier Access:</span>{" "}
                      <span className="font-semibold text-purple-400">UNLIMITED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lockout & Vault Access:</span>{" "}
                      <span className="font-semibold text-purple-400">EXCLUSIVE</span>
                    </div>
                  </div>
                  <hr className="border-gray-700 my-4" />
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-200 text-lg">GRAND TOTAL VALUE:</span>
                      <span className="font-bold text-2xl text-white">$98,940+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 flex items-center font-semibold text-md">
                        <Rocket className="w-5 h-5 mr-2" /> Your Investment:
                      </span>
                      <span className="font-bold text-xl text-cyan-400">Starting at $9,888</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 flex items-center font-semibold text-md">
                        <DollarSign className="w-5 h-5 mr-2" /> Savings:
                      </span>
                      <span className="font-bold text-xl text-green-400">$8,994</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Offer Breakdown Section */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Here's Everything You Get...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard icon={Package} title="Custom AI Website, Funnels & Agents" value="$60,000+">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Full branded website & funnel design
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Speed to Lead Bot, SalesBot, & more
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  AI-driven lead capture & booking
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Offer strategy, video scripts, ad hooks
                </p>
              </FeatureCard>

              <FeatureCard icon={Megaphone} title="6 Months Paid Ads Management" value="$11,982">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Ads for 2 platforms (Google, FB, etc.)
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Managed via AdsNOW.ai + real team
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  A/B testing, copywriting, targeting
                </p>
                <p className="text-xs text-gray-400">🔔 Min. $2,500/mo ad spend recommended</p>
              </FeatureCard>

              <FeatureCard icon={Search} title="6 Months Local SEO Domination" value="$14,994">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Full SEO audit, setup, & optimization
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  SEO Bot + expert content strategy
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Google Business Profile optimization
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Backlink strategy & ranking acceleration
                </p>
              </FeatureCard>

              <FeatureCard icon={UserCheck} title="1-on-1 Performance Coaching" value="$11,964">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Private 1-on-1 coaching calls (2x weekly)
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Strategy, clarity, systems, & focus
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Hosted by JED-AI certified coaches
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Access to private support thread
                </p>
              </FeatureCard>

              <FeatureCard icon={Diamond} title="Diamond Tier Affiliate Program" value="UNLIMITED">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Earn 50% recurring revenue on referrals
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Done-for-you funnels & swipe copy
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  High-converting, exclusive assets
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Invite-only tier with scaling potential
                </p>
              </FeatureCard>

              <FeatureCard icon={Lock} title="Territory & Industry Lockout" value="EXCLUSIVE">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Only 5 per industry per 6-month cycle
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Only 1 per local area (geo-lockout)
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Competitors denied after your approval
                </p>
                <p className="text-red-400 font-bold">Guaranteed Exclusivity!</p>
              </FeatureCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <FeatureCard icon={BrainCircuit} title="Lifetime Access: Dominate Content Vault" value="Included">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Full SuccessNOW AI Prompt Vault
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Lead magnet templates, funnel copy
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Evergreen ad examples & breakdowns
                </p>
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-2 text-green-400" />
                  Early access to SuccessNOW Bot updates
                </p>
              </FeatureCard>
              <FeatureCard icon={Wallet} title="Payment Plan Options" value="Flexible">
                <p className="font-semibold text-white">Standard Plan:</p>
                <p>$9,997 setup + 5 x $6,977/mo</p>
                <p className="font-semibold text-white mt-2">30-Day Accelerated Plan:</p>
                <p>$9,888 deposit + 4 x $6,500 (weekly)</p>
                <p className="text-green-400 font-bold">You Save: $8,994 with Accelerated</p>
              </FeatureCard>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-2">Questions about the JED-AI Program?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:8666125353"
                className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                (866) 612-5353
              </a>
              <span className="text-gray-400 hidden sm:block">•</span>
              <a
                href="https://successnow.ai"
                className="text-lg text-purple-400 hover:text-purple-300 transition-colors"
              >
                https://successnow.ai
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
