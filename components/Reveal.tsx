'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type Direction = 'up' | 'left' | 'right' | 'none'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const { ref, visible } = useScrollReveal()

  const translate: Record<Direction, string> = {
    up:    'translateY(28px)',
    left:  'translateX(-20px)',
    right: 'translateX(20px)',
    none:  'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : translate[direction],
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
