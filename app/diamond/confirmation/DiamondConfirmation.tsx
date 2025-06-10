"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Clock } from "lucide-react"

export default function DiamondConfirmation() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 mb-6">
            <CheckCircle className="h-12 w-12 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200 bg-clip-text text-transparent">
            Your SuccessNOW JED-AI Program application has been submitted and your payment has been processed.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your SuccessNOW JED-AI Program application has been submitted and your payment has been processed.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-black via-gray-900 to-black border-gray-300/30 shadow-2xl mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#00BFFF] to-gray-200 bg-clip-text text-transparent">
              What Happens Next?
            </h2>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00BFFF]/20 p-2 rounded-full">
                  <Clock className="h-6 w-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Application Review</h3>
                  <p className="text-gray-300">
                    Our team will review your application within 24 hours to ensure you're a good fit for the SuccessNOW
                    JED-AI Program.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#00BFFF]/20 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Acceptance Notification</h3>
                  <p className="text-gray-300">
                    You'll receive an email confirmation of your acceptance into the program. If not accepted, you'll
                    receive a 100% refund immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#00BFFF]/20 p-2 rounded-full">
                  <Calendar className="h-6 w-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Onboarding Call</h3>
                  <p className="text-gray-300">
                    Once accepted, we'll schedule your first onboarding call to get you set up with your custom AI
                    agents and begin your transformation journey.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 rounded-2xl p-8 border border-green-400/50 mb-12 relative overflow-hidden lightsaber-glow-box">
          {/* Green glow effect behind the box */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 blur-xl animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-green-400 text-center">
              💎 EXCLUSIVE DIAMOND TIER AFFILIATE PROGRAM
            </h3>
            <p className="text-gray-300 mb-6 text-center text-lg">
              SuccessNOW JED-AI Program members automatically get enrolled in our Diamond Tier Affiliate Partner Program
            </p>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-green-400 mb-4">
                Earn 50% Recurring MRR from every person you refer to SuccessNOW!
              </h4>
              <p className="text-gray-300">
                Turn your network into a passive income goldmine while helping others transform their businesses
              </p>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-400 text-black font-bold shadow-2xl border border-gray-300/50"
          onClick={() => (window.location.href = "/")}
        >
          Return to Homepage
        </Button>
      </div>
      <p className="text-center text-gray-500 mt-8">&copy; 2024 SuccessNOW JED-AI Program. All rights reserved.</p>
      <style jsx>{`
        .lightsaber-glow-box {
          box-shadow: 
            0 0 30px rgba(34, 197, 94, 0.6),
            0 0 60px rgba(34, 197, 94, 0.4),
            0 0 90px rgba(34, 197, 94, 0.3),
            inset 0 0 30px rgba(34, 197, 94, 0.1);
          animation: lightsaber-pulse 3s ease-in-out infinite alternate;
        }
        
        @keyframes lightsaber-pulse {
          from {
            box-shadow: 
              0 0 30px rgba(34, 197, 94, 0.6),
              0 0 60px rgba(34, 197, 94, 0.4),
              0 0 90px rgba(34, 197, 94, 0.3),
              inset 0 0 30px rgba(34, 197, 94, 0.1);
          }
          to {
            box-shadow: 
              0 0 50px rgba(34, 197, 94, 0.8),
              0 0 80px rgba(34, 197, 94, 0.6),
              0 0 120px rgba(34, 197, 94, 0.4),
              inset 0 0 40px rgba(34, 197, 94, 0.2);
          }
        }
      `}</style>
    </div>
  )
}
