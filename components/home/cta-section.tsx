import { InstantDemoCTA } from "@/components/ui/instant-demo-cta"

const CtaSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-gray-700 mb-8">Request an instant demo and see how our product can help you.</p>
        <InstantDemoCTA />
      </div>
    </section>
  )
}

export default CtaSection
