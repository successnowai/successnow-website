"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DemoPopup } from "@/components/ui/demo-popup"
import { Bot } from "lucide-react"

export function AnimatedBot() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false)

  return (
    <>
      <div className="mb-8 flex justify-center">
        <motion.button
          onClick={() => setIsDemoPopupOpen(true)}
          className="relative w-32 h-32 md:w-40 md:h-40 appearance-none bg-transparent border-none p-0 cursor-pointer group focus:outline-none"
          aria-label="Activate AI Assistant and open demo"
          whileHover="hover"
          whileTap="tap"
          initial="initial"
          animate="initial"
        >
          {/* Main floating animation */}
          <motion.div
            className="w-full h-full"
            variants={{
              initial: { y: -8 },
              hover: { y: -12 },
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {/* Outer Shell */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-700 bg-gradient-to-b from-cyan-900 to-blue-900 shadow-lg"
              variants={{
                initial: { scale: 1, rotate: 0 },
                hover: { scale: 1.05, rotate: 5 },
                tap: { scale: 0.95 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Inner Glowing Core */}
            <motion.div
              className="absolute inset-[20%] rounded-full bg-[#00BFFF] shadow-[0_0_20px_#00BFFF,0_0_30px_#00BFFF]"
              variants={{
                initial: { scale: 1, opacity: 0.7 },
                hover: { scale: 1.1, opacity: 1 },
              }}
            >
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-br from-white/30 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>

            {/* Robot Icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { scale: 1, opacity: 0.8 },
                hover: { scale: 1.1, opacity: 1 },
              }}
            >
              <Bot className="w-1/2 h-1/2 text-white/90" />
            </motion.div>

            {/* Animated Circuitry Arcs */}
            {[0, 90, 180, 270].map((rotation) => (
              <motion.div
                key={rotation}
                className="absolute inset-0"
                variants={{ initial: { rotate: rotation }, hover: { rotate: rotation + 45 } }}
              >
                <motion.div
                  className="absolute w-full h-full rounded-full border-2 border-transparent border-t-[#00BFFF]/80"
                  style={{ clipPath: "polygon(50% 0, 100% 0, 100% 50%, 50% 50%)" }}
                  animate={{ rotate: [0, -90, -90, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: rotation / 90,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Aura/Glow */}
          <motion.div
            className="absolute -inset-4 -z-10"
            variants={{
              initial: { scale: 1, opacity: 0.5 },
              hover: { scale: 1.2, opacity: 0.8 },
            }}
          >
            <div className="w-full h-full rounded-full bg-[#00BFFF]/30 blur-3xl" />
          </motion.div>
        </motion.button>
      </div>
      <DemoPopup isOpen={isDemoPopupOpen} onClose={() => setIsDemoPopupOpen(false)} />
    </>
  )
}
