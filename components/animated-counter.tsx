"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  endValue: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  endValue,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCounter()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  const animateCounter = () => {
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const easedProgress = easeOutQuart(progress)
        const currentValue = Math.floor(startValue + easedProgress * (endValue - startValue))

        setCount(currentValue)
        requestAnimationFrame(updateCounter)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <div ref={countRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

