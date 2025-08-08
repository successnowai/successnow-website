"use client"

import { useState, useEffect, useRef } from 'react'

interface UseInViewOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  once?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0, root = null, rootMargin = '0px', once = true } = options
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<Element>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.unobserve(element)
          }
        } else {
          if (!once) {
            setIsInView(false)
          }
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, once])

  return { ref, isInView }
}
