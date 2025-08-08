"use client"
import { DemoPopup } from "@/components/ui/demo-popup"
import { GlowingOrbCta } from "@/components/ui/glowing-orb-cta"
import { motion } from "framer-motion"

export default function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Revolutionize Your Business?</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
            Stop juggling multiple tools. Start dominating your market. See how our AI-powered platform can transform
            your operations and drive unprecedented growth.
          </p>
          <div className="flex justify-center">
            <DemoPopup trigger={<GlowingOrbCta />} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
