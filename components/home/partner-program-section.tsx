import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PartnerProgramSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Join Our Exclusive Partner Program
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Collaborate with SuccessNOW.ai and unlock new revenue streams by offering cutting-edge AI solutions to your
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-green-400" />
                <span>Generous Commissions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Earn significant recurring commissions for every client you refer. Our success is your success.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-green-400" />
                <span>Full Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We provide you with all the marketing materials, training, and support you need to succeed.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="text-green-400" />
                <span>Expand Your Offerings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Enhance your agency's value proposition by adding our powerful AI solutions to your service portfolio.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link href="/demo">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4">
              Become a Partner Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
