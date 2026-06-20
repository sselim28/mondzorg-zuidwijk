/**
 * Realistic-looking photo placeholder used while awaiting real photography.
 * Replace the outer <div> with <Image> from next/image once photos are ready.
 */
import type React from 'react'

type Variant = 'person' | 'team' | 'room' | 'patient' | 'plain'

interface PhotoPlaceholderProps {
  label: string
  className?: string
  style?: React.CSSProperties
  variant?: Variant
}

export default function PhotoPlaceholder({
  label,
  className = '',
  style,
  variant = 'person',
}: PhotoPlaceholderProps) {
  return (
    <div style={style}
      className={`photo-block ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Person / portrait silhouette */}
      {variant === 'person' && (
        <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMax meet">
          <circle cx="120" cy="108" r="54" fill="white" fillOpacity="0.18" />
          <rect   x="100" y="157" width="40" height="48" rx="20" fill="white" fillOpacity="0.14" />
          <ellipse cx="120" cy="310" rx="95" ry="90" fill="white" fillOpacity="0.1" />
        </svg>
      )}
      {/* Two-person (dentist + patient) */}
      {variant === 'patient' && (
        <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Reclined patient */}
          <ellipse cx="95" cy="140" rx="80" ry="28" fill="white" fillOpacity="0.1" />
          <circle  cx="35"  cy="118" r="26"           fill="white" fillOpacity="0.16" />
          {/* Standing dentist */}
          <circle  cx="220" cy="75"  r="30"           fill="white" fillOpacity="0.16" />
          <ellipse cx="220" cy="175" rx="28" ry="50"  fill="white" fillOpacity="0.1" />
        </svg>
      )}
      {/* Three-person team */}
      {variant === 'team' && (
        <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <circle  cx="75"  cy="85"  r="38" fill="white" fillOpacity="0.14" />
          <ellipse cx="75"  cy="195" rx="55" ry="60" fill="white" fillOpacity="0.08" />
          <circle  cx="160" cy="78"  r="40" fill="white" fillOpacity="0.18" />
          <ellipse cx="160" cy="192" rx="58" ry="62" fill="white" fillOpacity="0.1" />
          <circle  cx="245" cy="88"  r="36" fill="white" fillOpacity="0.14" />
          <ellipse cx="245" cy="198" rx="53" ry="58" fill="white" fillOpacity="0.08" />
        </svg>
      )}
      {/* Treatment room */}
      {variant === 'room' && (
        <svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect   x="20"  y="110" width="280" height="24" rx="12" fill="white" fillOpacity="0.12" />
          <rect   x="50"  y="72"  width="70"  height="42" rx="8"  fill="white" fillOpacity="0.1"  />
          <circle cx="160" cy="40" r="34"                          fill="white" fillOpacity="0.12" />
          <line   x1="160" y1="5" x2="160" y2="40" stroke="white" strokeOpacity="0.1" strokeWidth="5" />
          <rect   x="220" y="50"  width="50"  height="88" rx="8"  fill="white" fillOpacity="0.08" />
        </svg>
      )}

      {/* Bottom label gradient */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-brand-900/60 to-transparent pointer-events-none z-10" />
      <p className="absolute bottom-3 left-4 text-white/40 text-[11px] font-medium tracking-wide z-10">
        [{label}]
      </p>
    </div>
  )
}
