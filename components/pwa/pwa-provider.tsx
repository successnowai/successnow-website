"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface PWAContextType {
  isInstalled: boolean
  isOnline: boolean
  canInstall: boolean
  installApp: () => Promise<void>
  updateAvailable: boolean
  updateApp: () => void
}

const PWAContext = createContext<PWAContextType | undefined>(undefined)

export function PWAProvider({ children }: { children: React.ReactNode }) {
  const [isInstalled, setIsInstalled] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [canInstall, setCanInstall] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Check if app is installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw") // Updated service worker registration to use API route with correct MIME type
        .then((registration) => {
          console.log("[PWA] Service Worker registered:", registration)

          // Check for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  setUpdateAvailable(true)
                }
              })
            }
          })
        })
        .catch((error) => {
          console.error("[PWA] Service Worker registration failed:", error)
        })
    }

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setCanInstall(true)
    }

    // Listen for app installed
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setCanInstall(false)
      setDeferredPrompt(null)
    }

    // Listen for online/offline status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Set initial online status
    setIsOnline(navigator.onLine)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const installApp = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setCanInstall(false)
    }

    setDeferredPrompt(null)
  }

  const updateApp = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration?.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" })
          window.location.reload()
        }
      })
    }
  }

  return (
    <PWAContext.Provider
      value={{
        isInstalled,
        isOnline,
        canInstall,
        installApp,
        updateAvailable,
        updateApp,
      }}
    >
      {children}
    </PWAContext.Provider>
  )
}

export function usePWA() {
  const context = useContext(PWAContext)
  if (context === undefined) {
    throw new Error("usePWA must be used within a PWAProvider")
  }
  return context
}
