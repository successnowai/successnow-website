export const PWA_CONSTANTS = {
  CACHE_NAME: "successnow-ai-v1",
  INSTALL_PROMPT_DELAY: 30000, // 30 seconds
  UPDATE_CHECK_INTERVAL: 60000, // 1 minute
} as const

export function isPWAInstalled(): boolean {
  if (typeof window === "undefined") return false

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true ||
    document.referrer.includes("android-app://")
  )
}

export function canInstallPWA(): boolean {
  if (typeof window === "undefined") return false

  return "serviceWorker" in navigator && "BeforeInstallPromptEvent" in window && !isPWAInstalled()
}

export function isOnline(): boolean {
  if (typeof navigator === "undefined") return true
  return navigator.onLine
}

export function getInstallPromptDelay(): number {
  const visited = localStorage.getItem("pwa-visited")
  if (!visited) {
    localStorage.setItem("pwa-visited", Date.now().toString())
    return PWA_CONSTANTS.INSTALL_PROMPT_DELAY
  }

  const timeSinceVisit = Date.now() - Number.parseInt(visited)
  return timeSinceVisit > 24 * 60 * 60 * 1000 ? 0 : PWA_CONSTANTS.INSTALL_PROMPT_DELAY
}

export function trackPWAInstall(): void {
  if (typeof window !== "undefined" && "gtag" in window) {
    ;(window as any).gtag("event", "pwa_install", {
      event_category: "PWA",
      event_label: "App Installed",
    })
  }
}

export function trackPWAUsage(): void {
  if (typeof window !== "undefined" && "gtag" in window) {
    ;(window as any).gtag("event", "pwa_usage", {
      event_category: "PWA",
      event_label: isPWAInstalled() ? "Standalone Mode" : "Browser Mode",
    })
  }
}
