'use client'
import { site } from '@/lib/config'

function getTodayLabel() {
  const dayIndex = new Date().getDay() // 0=Sun
  const map = [6, 0, 1, 2, 3, 4, 5] // Sun→index6, Mon→0 …
  const entry = site.hours[map[dayIndex]]
  if (!entry || entry.closed) return 'Vandaag gesloten'
  return `Vandaag open tot ${entry.close}`
}

export default function ReassuranceBar() {
  const todayLabel = getTodayLabel()

  const SIGNALS = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      text: 'Nieuwe patiënten welkom',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      text: todayLabel,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2C20 17.5 12 22 12 22z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      text: 'Schere 31, Rotterdam-Zuid',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <rect x="1" y="4" width="22" height="16" rx="2"/>
          <path d="M1 10h22"/>
        </svg>
      ),
      text: 'Alle verzekeringen',
    },
  ] as const

  return (
    <div
      className="border-b border-ivory-border bg-white"
      aria-label="Praktijkinformatie"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-0" role="list">
          {SIGNALS.map(({ icon, text }, i) => (
            <li key={text}
              className={`flex items-center gap-2.5 py-3.5 text-gray-600 ${
                i < SIGNALS.length - 1
                  ? 'lg:border-r border-ivory-border lg:pr-6 lg:mr-0'
                  : ''
              } ${i > 0 ? 'lg:pl-6' : ''}`}
            >
              <span className="text-brand-500 flex-shrink-0">{icon}</span>
              <span className="font-medium text-[13.5px] leading-snug">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
