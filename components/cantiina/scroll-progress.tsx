"use client"
import { useEffect, useRef } from "react"

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 100) / 100})`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-muted">
      <div
        ref={barRef}
        className="h-full origin-left bg-primary transition-transform duration-150"
        style={{ transform: "scaleX(0)" }}
        aria-hidden
      />
    </div>
  )
}
