"use client"
import { motion } from "framer-motion"
import { Bot } from "lucide-react"
import Link from "next/link"

const FloatingChatRobot = () => {
  return (
    <Link href="/demo" className="fixed bottom-4 right-4 z-50">
      <motion.div className="group cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-full border-2 border-purple-400/80 group-hover:border-purple-300 transition-colors duration-300 shadow-lg">
            <Bot className="w-7 h-7 text-purple-300 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default FloatingChatRobot
