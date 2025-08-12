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
  Database,
  Globe,
  UserCheck,
  Smartphone,
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

              {/* AI Technology Disclosure */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">AI Technology Disclosure</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Nature of AI Interaction</h4>
                    <p className="text-gray-300 text-sm">
                      When you interact with our AI Agents, you are communicating with an automated system powered by
                      artificial intelligence, not a human representative. We always identify when you are interacting
                      with an AI Agent rather than a human representative.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">AI Data Collection and Processing</h4>
                    <p className="text-gray-300 text-sm">
                      Our AI Agents may collect and process information you provide during interactions, including
                      inquiries, preferences, and feedback. Conversations may be stored and analyzed to improve our AI
                      systems, and we may use anonymized conversations for training purposes.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">AI Limitations</h4>
                    <p className="text-gray-300 text-sm">
                      AI technology has inherent limitations and may occasionally provide incomplete, inaccurate, or
                      inappropriate responses. Information provided by our AI Agents is for general informational
                      purposes only and should not be considered professional advice.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Bot Disclosure & Opt-Out</h4>
                    <p className="text-gray-300 text-sm">
                      We clearly disclose that our automated agents are bots at the beginning of any conversation. You
                      may opt-out of interacting with our AI Agents at any time by requesting to speak with a human
                      representative.
                    </p>
                  </div>
                </div>
              </div>

              {/* Information We Collect Grid */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Database className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Information We Collect</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                          <UserCheck className="w-5 h-5 text-[#00BFFF]" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">Personal Data</h4>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Name, address, email, phone number</li>
                        <li>• Demographic information (age, gender, location)</li>
                        <li>• Account registration information</li>
                        <li>• Purchase and transaction history</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                          <Eye className="w-5 h-5 text-[#00BFFF]" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">Derivative Data</h4>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• IP address and browser type</li>
                        <li>• Website usage patterns</li>
                        <li>• Device information and mobile data</li>
                        <li>• Cookies and tracking data</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                          <Lock className="w-5 h-5 text-[#00BFFF]" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">Financial Data</h4>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Payment method information</li>
                        <li>• Processed via Stripe, PayPal, Intuit</li>
                        <li>• Limited financial data storage</li>
                        <li>• Secure payment processing</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                          <Globe className="w-5 h-5 text-[#00BFFF]" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">Social & Mobile Data</h4>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Social media profile information</li>
                        <li>• Mobile device data and location</li>
                        <li>• App permissions and notifications</li>
                        <li>• Contest and survey responses</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">How We Use Your Information</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Service Delivery</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Create and administer your account</li>
                        <li>• Deliver purchased products/services</li>
                        <li>• Process payments and refunds</li>
                        <li>• Provide customer support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Communication & Marketing</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Send newsletters and updates</li>
                        <li>• Deliver targeted advertising</li>
                        <li>• Social media interactions</li>
                        <li>• Request feedback and reviews</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Business Operations</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Analyze trends and improve services</li>
                        <li>• Prevent fraud and security issues</li>
                        <li>• Compile statistical data</li>
                        <li>• Assist law enforcement when required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Personalization</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Customize your experience</li>
                        <li>• Suggest relevant products/services</li>
                        <li>• Generate personalized profiles</li>
                        <li>• Administer contests and giveaways</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                    <p className="text-gray-300 text-sm mb-3">
                      We may share your information with trusted third parties who assist us in operating our website,
                      conducting our business, processing payments, or servicing you, so long as those parties agree to
                      keep this information confidential. These include:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Payment processors (Stripe, PayPal, Intuit)</li>
                        <li>• Email service providers</li>
                        <li>• Website hosting services</li>
                        <li>• SMS message providers</li>
                      </ul>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Course delivery platforms</li>
                        <li>• Coaching session schedulers</li>
                        <li>• Certification verification systems</li>
                        <li>• Third-party CRM services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* White-Labeled CRM Services */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">White-Labeled CRM Services</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Third-Party Platform</h4>
                    <p className="text-gray-300 text-sm">
                      Our CRM is a third-party platform that we provide access to under our brand. The actual software,
                      servers, and infrastructure are owned and operated by the third-party provider.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Limitation of Liability</h4>
                    <p className="text-gray-300 text-sm">
                      We are not responsible for issues, outages, data breaches, or other problems that may occur with
                      the third-party platform, including service interruptions, data loss, security breaches, or
                      changes to platform features.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Data Processing</h4>
                    <p className="text-gray-300 text-sm">
                      When you use our white-labeled CRM services, your data may be processed according to the
                      third-party provider's own privacy policy and terms of service, in addition to our policies.
                    </p>
                  </div>
                </div>
              </div>

              {/* SMS/Text Message Privacy */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-5 h-5 text-[#00BFFF]" />
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
                    <h4 className="text-white font-medium mb-2">Limited Use & Opt-Out Control</h4>
                    <p className="text-gray-300 text-sm">
                      Your SMS opt-in data will only be used for specific purposes you've consented to, such as
                      appointment reminders, event notifications, receipts, and customer service updates. You can stop
                      receiving text messages at any time by texting "STOP" to our shortcode.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Privacy Rights */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Your Privacy Rights</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <h4 className="text-white font-medium mb-3">Data Access & Control</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Update or change your information</li>
                        <li>• Confirm what data we hold about you</li>
                        <li>• Request a copy of your data</li>
                        <li>• Transfer your data to another controller</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <h4 className="text-white font-medium mb-3">Data Management</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Change your consent preferences</li>
                        <li>• Delete all your data</li>
                        <li>• Opt out of marketing communications</li>
                        <li>• Restrict data processing</li>
                      </ul>
                    </CardContent>
                  </Card>
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
                        have collected. We are fully compliant with the California Consumer Privacy Act and do not sell
                        personal data.
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
                        protect data during international transfers and comply with applicable privacy laws.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Fair Information Practices</h4>
                      <p className="text-gray-300 text-sm">
                        We follow Fair Information Practice Principles and will notify users via email within 7 business
                        days in case of a data breach. We provide individuals with enforceable rights and recourse
                        mechanisms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Integrations */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Third-Party Integrations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <h4 className="text-white font-medium mb-3">Google Services</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Google Analytics tracking</li>
                        <li>• Remarketing with Google AdWords</li>
                        <li>• Display Network Impression Reporting</li>
                        <li>• Demographics and Interests Reporting</li>
                      </ul>
                      <p className="text-gray-300 text-xs mt-3">
                        You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-6">
                      <h4 className="text-white font-medium mb-3">Facebook Services</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Facebook Advertising</li>
                        <li>• Retargeting with Facebook Pixel</li>
                        <li>• Demographics and Interests Reporting</li>
                        <li>• Custom Audiences</li>
                      </ul>
                      <p className="text-gray-300 text-xs mt-3">
                        You can opt out of Facebook's interest-based ads through your Facebook ad preferences.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Data Security & Retention */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="text-xl font-semibold text-white">Data Security & Retention</h3>
                </div>
                <div className="bg-black/20 p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Security Measures</h4>
                    <p className="text-gray-300 text-sm">
                      Your personal information is contained behind secured networks and is only accessible by a limited
                      number of persons who have special access rights and are required to keep the information
                      confidential. All sensitive information is encrypted via Secure Socket Layer (SSL) technology.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Data Retention</h4>
                    <p className="text-gray-300 text-sm">
                      We retain personal data as long as needed to conduct our legitimate business purposes or to comply
                      with legal obligations, or until you ask us to delete your data. Data that is no longer needed
                      will be permanently deleted.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Sensitive Data</h4>
                    <p className="text-gray-300 text-sm">
                      We request that you do not submit sensitive data such as social security numbers, health data,
                      genetic data, or information related to ethnic origin, religious beliefs, or criminal history
                      through public postings or email correspondence.
                    </p>
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
