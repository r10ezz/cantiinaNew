"use client"
import { useEffect, useState } from "react"

export function TypeCycle({
  words,
  interval = 1800,
  className,
}: {
  words: string[]
  interval?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [interval, words.length])

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {words[index]}
      <span className="ml-1 inline-block h-[1em] w-[2px] align-[-0.15em] bg-current animate-pulse" aria-hidden />
    </span>
  )
}
