"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0)

    // Also try to scroll the document element to top for better browser compatibility
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }, [pathname])

  return null
}
