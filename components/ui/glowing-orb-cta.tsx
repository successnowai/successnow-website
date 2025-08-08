"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, Bot } from 'lucide-react'
import { VoiceDemoModal } from './voice-demo-modal'

interface GlowingOrbCtaProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  label?: string
  className?: string
  variant?: 'default' | 'purple'
  showLabel?: boolean
}

export function GlowingOrbCta({ 
  size = 'md', 
  label, 
  className, 
  variant = 'default',
  showLabel = true 
}: GlowingOrbCtaProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sizes = {
    sm: { orb: 60, icon: 24, label: 'text-xs' },
    md: { orb: 80, icon: 32, label: 'text-sm' },
    lg: { orb: 120, icon: 48, label: 'text-base' },
    xl: { orb: 160, icon: 64, label: 'text-lg' },
  }

  const variants = {
    default: {
      gradient: 'from-cyan-400 to-blue-600',
      glow1: 'bg-cyan-500',
      glow2: 'bg-blue-500',
      icon: Mic
    },
    purple: {
      gradient: 'from-purple-500/30 to-pink-500/30',
      glow1: 'from-purple-500/40 to-pink-500/40',
      glow2: 'from-purple-400/30 to-pink-400/30',
      icon: Bot
    }
  }

  const { orb, icon, label: labelSize } = sizes[size]
  const { gradient, glow1, glow2, icon: IconComponent } = variants[variant]

  if (variant === 'purple') {
    return (
      <>
        <div className={`relative flex flex-col items-center gap-4 ${className}`}>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full">
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${glow1} blur-xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ width: orb + 40, height: orb + 40, left: -20, top: -20 }}
              />
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${glow2} blur-2xl`}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                style={{ width: orb + 80, height: orb + 80, left: -40, top: -40 }}
              />
            </div>

            {/* Main orb */}
            <div 
              className={`relative rounded-full bg-gradient-to-br ${gradient} backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300`}
              style={{ width: orb, height: orb }}
            >
              {/* Inner glassmorphic layers */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-300/5 to-pink-300/5 backdrop-blur-sm" />
              
              {/* Icon */}
              <IconComponent size={icon} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              
              {/* Pulsing center dot */}
              <motion.div
                className="absolute w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0.3, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.button>
          
          {label && showLabel && (
            <p className={`font-semibold text-purple-300 ${labelSize}`}>{label}</p>
          )}
        </div>
        <VoiceDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    )
  }

  // Default variant (original design)
  return (
    <>
      <div className={`relative flex flex-col items-center gap-4 ${className}`}>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="relative rounded-full flex items-center justify-center text-white"
          style={{ width: orb, height: orb }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Base Orb */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full`} />
          
          {/* Inner Glow */}
          <div className="absolute inset-1 bg-black/50 rounded-full backdrop-blur-sm" />

          {/* Pulsing Glows */}
          <motion.div
            className={`absolute inset-0 ${glow1} rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className={`absolute inset-0 ${glow2} rounded-full`}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <IconComponent size={icon} />
          </motion.div>
        </motion.button>
        {label && showLabel && (
          <p className={`font-semibold text-gray-300 ${labelSize}`}>{label}</p>
        )}
      </div>
      <VoiceDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
