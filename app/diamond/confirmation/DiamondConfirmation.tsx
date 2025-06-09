"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your Diamond Club application has been submitted and your payment has been processed.
          </p>
          <Badge className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-black text-lg px-6 py-2 font-bold shadow-2xl border border-gray-300/50 mb-6">
            💎 DIAMOND CLUB - APPLICATION UNDER REVIEW
          </Badge>
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
                    Our team will review your application within 24 hours to ensure you're a good fit for the Diamond
                    Club program.
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

        <div className="bg-gradient-to-br from-[#00BFFF]/10 to-green-400/10 rounded-2xl p-8 border border-[#00BFFF]/20 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#00BFFF]">100% Satisfaction Guarantee</h3>
          <p className="text-gray-300 mb-6">
            If your application is not accepted, you'll receive a 100% refund. If at any time during the 6 months you're
            not fully satisfied, you'll get a 100% refund of your investment. Even if we remove you from the program for
            not taking it seriously, you'll still get a 100% refund - no questions asked!
          </p>
          <div className="bg-gradient-to-r from-green-400/20 to-[#00BFFF]/20 rounded-lg p-4">
            <p className="text-green-400 font-bold text-center">🎯 Your Success is Our Success</p>
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
      <p className="text-center text-gray-500 mt-8">&copy; 2024 Diamond Club. All rights reserved.</p>
    </div>
  )
}
