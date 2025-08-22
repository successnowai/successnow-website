"use client"

import { usePWA } from "./pwa-provider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { WifiOff } from "lucide-react"

export function OfflineIndicator() {
  const { isOnline } = usePWA()

  if (isOnline) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Alert className="rounded-none border-orange-500 bg-orange-500/10 text-orange-500">
        <WifiOff className="h-4 w-4" />
        <AlertDescription>You're currently offline. Some features may be limited.</AlertDescription>
      </Alert>
    </div>
  )
}
