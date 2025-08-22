"use client"

import { usePWA } from "./pwa-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, X } from "lucide-react"
import { useState } from "react"

export function UpdatePrompt() {
  const { updateAvailable, updateApp } = usePWA()
  const [dismissed, setDismissed] = useState(false)

  if (!updateAvailable || dismissed) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <Card className="border-2 border-green-500/20 bg-gradient-to-r from-green-900/90 to-emerald-900/90 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="h-5 w-5 text-green-400" />
                <h3 className="font-semibold text-white">Update Available</h3>
              </div>
              <p className="text-sm text-gray-200 mb-3">
                A new version of SuccessNOW.ai is ready with improvements and bug fixes.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={updateApp}
                  size="sm"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  Update Now
                </Button>
                <Button
                  onClick={() => setDismissed(true)}
                  size="sm"
                  variant="ghost"
                  className="text-gray-300 hover:text-white"
                >
                  Later
                </Button>
              </div>
            </div>
            <Button
              onClick={() => setDismissed(true)}
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
