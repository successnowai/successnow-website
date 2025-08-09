"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  FileText,
  Scale,
  Shield,
  Download,
  AlertCircle,
  Building,
  CreditCard,
  Bot,
  MessageSquare,
  Gavel,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function TermsClientPage() {
  const handleDownloadTerms = async () => {
    try {
      const response = await fetch("/api/terms-pdf")
      const htmlContent = await response.text()

      // Create a blob and download link
      const blob = new Blob([htmlContent], { type: "text/html" })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "SuccessNOW-Terms-and-Conditions.html"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading terms:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
              <Scale className="w-6 h-6 text-[#00BFFF]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Terms and Conditions of Use</h1>
              <p className="text-gray-300">Effective Date: March 24, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8">
              {/* Download Section */}
              <div className="text-center mb-8">
                <div className="p-6 bg-[#00BFFF]/10 rounded-lg border border-[#00BFFF]/20 mb-6">
                  <FileText className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">Complete Terms and Conditions</h2>
                  <p className="text-gray-300 mb-6">
                    Download the complete Terms and Conditions document that governs your use of SuccessNOW.ai platform
                    and all related services. The document will be downloaded as an HTML file that you can view in any
                    browser or convert to PDF.
                  </p>
                  <Button
                    onClick={handleDownloadTerms}
                    className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-semibold px-8 py-3 text-lg"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Complete Terms
                  </Button>
                </div>

                <Alert className="bg-yellow-500/10 border-yellow-500/20 mb-8">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <AlertDescription className="text-yellow-200">
                    <strong>Important:</strong> By accessing or using SuccessNOW.ai services, you agree to be bound by
                    these complete Terms and Conditions. Please review the full document carefully.
                  </AlertDescription>
                </Alert>
              </div>

              <Separator className="bg-white/10 mb-8" />

              {/* Introduction */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Building className="w-5 h-5 text-[#00BFFF]" />
                  <h2 className="text-2xl font-semibold text-white">Agreement Overview</h2>
                </div>
                <div className="bg-black/20 p-6 rounded-lg mb-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Welcome to <strong className="text-white">SuccessNOW.ai</strong>, a product of SuccessNOW AI
                    Platform. This Terms of Use Agreement is made between you and{" "}
                    <strong className="text-white">SuccessNOW AI INC</strong> doing business as{" "}
                    <strong className="text-white">SuccessNOW AI™</strong>.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This Agreement sets forth the terms and conditions that govern your use of and access to our Website
                    and any products, materials, and services provided by or on the Website.
                  </p>
                </div>
              </div>

              {/* Key Sections Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <Shield className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Acceptance & Eligibility</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Must be at least 16 years old</li>
                      <li>• Cannot be a competitor</li>
                      <li>• Agreement binding upon use</li>
                      <li>• Changes with reasonable notice</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <Bot className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">AI Services Provided</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• AI-powered automation tools</li>
                      <li>• Smart websites & marketing systems</li>
                      <li>• Lead engagement agents</li>
                      <li>• CRM automation & paid ads management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <Scale className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Ownership & Access Rights</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• All systems proprietary to SuccessNOW</li>
                      <li>• No data transfer upon cancellation</li>
                      <li>• Access discontinued after termination</li>
                      <li>• No refunds for proprietary systems</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <CreditCard className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Payment Terms</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• One-time setup fee (non-refundable)</li>
                      <li>• Recurring subscription billing</li>
                      <li>• Service suspension for non-payment</li>
                      <li>• Cancel before next billing cycle</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* AI Services Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Artificial Intelligence (AI) Services</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">AI Service Disclosure</h4>
                    <p className="text-gray-300 text-sm">
                      When you interact with our AI Services, you are communicating with an automated system, not a
                      human representative. We clearly identify AI interactions and comply with bot disclosure
                      requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">AI Limitations</h4>
                    <p className="text-gray-300 text-sm">
                      AI technology has inherent limitations and may occasionally provide incomplete or inaccurate
                      responses. Information is for general purposes only and should not be considered professional
                      advice.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">User Responsibilities</h4>
                    <p className="text-gray-300 text-sm">
                      Users must use AI services lawfully, not attempt to circumvent safety measures, and verify
                      important information before making critical decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* SMS & Text Messaging */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">SMS & Text Messaging Services</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Compliance Requirements</h4>
                    <p className="text-gray-300 text-sm">
                      All text messaging services comply with TCPA, CAN-SPAM Act, and carrier requirements. Proper
                      consent must be obtained before sending messages.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Prohibited Practices</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Sending messages without explicit consent</li>
                      <li>• Continuing to message after opt-out</li>
                      <li>• Sending inappropriate or illegal content</li>
                      <li>• Messaging outside normal business hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Data Privacy</h4>
                    <p className="text-gray-300 text-sm">
                      Mobile information is not shared with third parties for marketing purposes. Opt-out requests are
                      honored immediately and permanently.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Provisions */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Gavel className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Key Legal Provisions</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Intellectual Property Rights</h4>
                      <p className="text-gray-300 text-sm">
                        All intellectual property rights in the Services are owned by SuccessNOW AI INC. Limited license
                        granted for business use only.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">No Warranty</h4>
                      <p className="text-gray-300 text-sm">
                        Services provided "AS-IS" without warranties. No guarantees of accuracy, reliability, or fitness
                        for particular purpose.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Limitation of Liability</h4>
                      <p className="text-gray-300 text-sm">
                        Company not liable for indirect, incidental, or consequential damages. Maximum liability limited
                        to amounts paid for services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Governing Law & Disputes</h4>
                      <p className="text-gray-300 text-sm">
                        Agreement governed by Cayman Islands law. Disputes resolved through binding arbitration. Claims
                        must be filed within one year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="bg-white/10 mb-8" />

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="bg-black/20 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    If you have questions about these Terms and Conditions or need clarification on any provisions:
                  </p>
                  <div className="text-gray-300">
                    <p>
                      <strong className="text-white">SuccessNOW.ai Inc.</strong>
                    </p>
                    <p>20 Genesis Close</p>
                    <p>George Town KY1-1208</p>
                    <p>Cayman Islands</p>
                    <p>📧 support@successnow.ai</p>
                    <p>
                      Website:{" "}
                      <Link href="/" className="text-[#00BFFF] hover:underline">
                        https://successnow.ai
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="text-center space-y-4">
                <Button
                  onClick={handleDownloadTerms}
                  className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-semibold px-8 py-3"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Complete Terms Document
                </Button>
                <div>
                  <Link href="/">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      Return to SuccessNOW.ai
                    </Button>
                  </Link>
                </div>
                <p className="text-gray-400 text-sm">
                  Effective Date: March 24, 2025 | SuccessNOW AI INC doing business as SuccessNOW AI™
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
