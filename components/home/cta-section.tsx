import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#00274D] to-[#001A33] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of successful businesses already using SuccessNOW AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-[#00274D] font-bold px-8 py-4 text-lg">
            🚀 Get Started - $3,488
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#00274D] font-semibold px-8 py-4 text-lg bg-transparent"
          >
            📞 Book Free Call
          </Button>
        </div>
      </div>
    </section>
  )
}
