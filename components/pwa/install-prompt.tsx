"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setShowInstallPrompt(false)
    }

    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Hide for 24 hours
    localStorage.setItem("installPromptDismissed", Date.now().toString())
  }

  // Don't show if already installed or recently dismissed
  if (isInstalled || !showInstallPrompt) return null

  const dismissedTime = localStorage.getItem("installPromptDismissed")
  if (dismissedTime && Date.now() - Number.parseInt(dismissedTime) < 24 * 60 * 60 * 1000) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <Card className="border-2 border-cyan-500/20 bg-gradient-to-r from-purple-900/90 to-cyan-900/90 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Download className="h-5 w-5 text-cyan-400" />
                <h3 className="font-semibold text-white">Install SuccessNOW.ai</h3>
              </div>
              <p className="text-sm text-gray-200 mb-3">
                Get instant access to AI agents, faster loading, and offline features.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={handleInstallClick}
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                >
                  Install App
                </Button>
                <Button onClick={handleDismiss} size="sm" variant="ghost" className="text-gray-300 hover:text-white">
                  Later
                </Button>
              </div>
            </div>
            <Button onClick={handleDismiss} size="sm" variant="ghost" className="text-gray-400 hover:text-white p-1">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
