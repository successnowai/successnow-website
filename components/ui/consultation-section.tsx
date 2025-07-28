"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ConsultationSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-purple-900 to-blue-900">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 min-h-[400px]">
                {/* Left side - Content */}
                <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Discuss Your Case?</h2>
                    <p className="text-lg text-white/90 leading-relaxed">
                      Contact us today for a confidential consultation. Our team is here to listen and provide the
                      guidance you need. Fill out the form, and we'll get back to you promptly.
                    </p>
                  </motion.div>
                </div>

                {/* Right side - Form */}
                <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Consultation</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select a Service / Type of Law
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="">Choose a service...</option>
                          <option value="ai-automation">AI Automation</option>
                          <option value="lead-generation">Lead Generation</option>
                          <option value="affiliate-program">Affiliate Program</option>
                          <option value="custom-solution">Custom Solution</option>
                        </select>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300">
                        Schedule Consultation →
                      </Button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
