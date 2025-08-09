"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  FileText,
  Shield,
  Download,
  AlertCircle,
  Building,
  MessageSquare,
  Eye,
  Lock,
  Users,
  Gavel,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function PrivacyClientPage() {
  const handleDownloadPrivacy = async () => {
    try {
      const response = await fetch("/api/privacy-pdf")
      const htmlContent = await response.text()

      // Create a blob and download link
      const blob = new Blob([htmlContent], { type: "text/html" })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "SuccessNOW-Privacy-Policy.html"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading privacy policy:", error)
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
              <Shield className="w-6 h-6 text-[#00BFFF]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
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
                  <h2 className="text-2xl font-bold text-white mb-2">Complete Privacy Policy</h2>
                  <p className="text-gray-300 mb-6">
                    Download the complete Privacy Policy document that explains how we collect, use, and protect your
                    personal information when using SuccessNOW.ai platform and services. The document will be downloaded
                    as an HTML file that you can view in any browser or convert to PDF.
                  </p>
                  <Button
                    onClick={handleDownloadPrivacy}
                    className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-semibold px-8 py-3 text-lg"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Complete Privacy Policy
                  </Button>
                </div>

                <Alert className="bg-yellow-500/10 border-yellow-500/20 mb-8">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <AlertDescription className="text-yellow-200">
                    <strong>Important:</strong> By using SuccessNOW.ai services, you agree to the data collection and
                    processing practices outlined in this Privacy Policy. Please review the full document carefully.
                  </AlertDescription>
                </Alert>
              </div>

              <Separator className="bg-white/10 mb-8" />

              {/* Introduction */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Building className="w-5 h-5 text-[#00BFFF]" />
                  <h2 className="text-2xl font-semibold text-white">Privacy Policy Overview</h2>
                </div>
                <div className="bg-black/20 p-6 rounded-lg mb-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    At <strong className="text-white">SuccessNOW AI™</strong>, we respect your privacy and are committed
                    to protecting your personal information. This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you visit our website, purchase our services, or engage with our
                    AI-powered platform.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We employ advanced AI technologies, including AI voice and text agents, to enhance your experience.
                    This policy covers both traditional data collection and our specific AI interaction practices.
                  </p>
                </div>
              </div>

              {/* Key Sections Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">AI Technology Disclosure</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Clear bot disclosure requirements</li>
                      <li>• AI conversation data handling</li>
                      <li>• Limitations and disclaimers</li>
                      <li>• Opt-out mechanisms available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <Eye className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Data Collection</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Personal identification data</li>
                      <li>• Website usage analytics</li>
                      <li>• Payment and financial information</li>
                      <li>• Social media interactions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <Lock className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Data Protection</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• SSL encryption for all data</li>
                      <li>• Secure server infrastructure</li>
                      <li>• Limited access controls</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                        <Users className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Your Privacy Rights</h3>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Access your personal data</li>
                      <li>• Request data corrections</li>
                      <li>• Delete your information</li>
                      <li>• Data portability options</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Data Sharing Commitment */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Data Sharing Commitment</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">WE DO NOT SELL YOUR DATA</h4>
                    <p className="text-gray-300 text-sm">
                      We do not sell, trade, or otherwise transfer to outside parties your personally identifiable
                      information for marketing or promotional purposes. Your information will never be sold, exchanged,
                      transferred, or given to any other company for any reason whatsoever, without your consent.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Limited Sharing with Service Providers</h4>
                    <p className="text-gray-300 text-sm">
                      We may share your information with trusted third parties who assist us in operating our website,
                      conducting our business, processing payments, or servicing you, so long as those parties agree to
                      keep this information confidential.
                    </p>
                  </div>
                </div>
              </div>

              {/* SMS Privacy */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">SMS/Text Message Privacy</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">No Data Sharing</h4>
                    <p className="text-gray-300 text-sm">
                      All text messaging originator opt-in data and consent information will not be shared with any
                      third parties, excluding aggregators and providers necessary to deliver the SMS service.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Marketing Restrictions</h4>
                    <p className="text-gray-300 text-sm">
                      Your mobile information will not be shared with any third parties or affiliates for marketing or
                      promotional purposes.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Opt-Out Control</h4>
                    <p className="text-gray-300 text-sm">
                      You can stop receiving text messages at any time by texting "STOP" to our shortcode. Upon doing
                      so, we will confirm your opt-out status via SMS and will cease sending you text messages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Compliance */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Gavel className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Legal Compliance</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">California Privacy Rights (CCPA)</h4>
                      <p className="text-gray-300 text-sm">
                        California residents have specific rights to request, access, and delete personal information we
                        have collected. We are fully compliant with the California Consumer Privacy Act.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Children's Privacy Protection (COPPA)</h4>
                      <p className="text-gray-300 text-sm">
                        We do not specifically market to children under 13 and do not knowingly collect personal
                        information from children under 13.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">CAN-SPAM Act Compliance</h4>
                      <p className="text-gray-300 text-sm">
                        We comply with the CAN-SPAM Act for commercial email communications and provide easy unsubscribe
                        options for all marketing emails.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">International Data Transfers</h4>
                      <p className="text-gray-300 text-sm">
                        Our website is hosted on servers located in the United States. We use reasonable methods to
                        protect data during international transfers.
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
                    If you have questions about this Privacy Policy or need to exercise your privacy rights:
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
                  onClick={handleDownloadPrivacy}
                  className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-semibold px-8 py-3"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Complete Privacy Policy Document
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
