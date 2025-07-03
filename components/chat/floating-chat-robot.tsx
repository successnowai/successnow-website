"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BsRobot } from "react-icons/bs"
import { VoiceDemoModal } from "@/components/ui/voice-demo-modal"

const FloatingChatRobot = () => {
  const [isVoiceDemoOpen, setIsVoiceDemoOpen] = useState(false)

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVoiceDemoOpen(true)}
      >
        <BsRobot size={24} />
      </motion.button>

      <VoiceDemoModal isOpen={isVoiceDemoOpen} onClose={() => setIsVoiceDemoOpen(false)} />
    </>
  )
}

export default FloatingChatRobot
