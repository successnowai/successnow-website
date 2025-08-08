"use client"

import { useEffect } from "react"
import { X } from 'lucide-react'

interface VoiceDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function VoiceDemoModal({ isOpen, onClose }: VoiceDemoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <h2 className="text-2xl font-bold text-white">AI Voice Demo</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-6 text-center">
            Experience our AI assistant in action. Click the microphone to start talking!
          </p>
          
          {/* Voice AI Iframe */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
              src="https://iframes.ai/o/1753831620452x607403809624031200?color=ed10cc&icon=bot"
              allow="microphone"
              style={{ width: '100%', height: '300px', border: 'none', borderRadius: '12px' }}
              id="assistantFrame"
            />
          </div>
        </div>
      </div>
      
      {/* Microphone Permission Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const frame = document.getElementById('assistantFrame');
            if (frame) {
              frame.addEventListener('load', () => {
                navigator.permissions.query({ name: 'microphone' })
                  .then(result => {
                    if (result.state === 'granted') {
                      console.log('Microphone access already granted');
                    } else if (result.state === 'prompt') {
                      console.log('User will be prompted for microphone access');
                    }
                  });
              });
            }
          `
        }}
      />
    </div>
  )
}
