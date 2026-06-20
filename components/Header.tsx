'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { site } from '@/lib/config'

const NAV = [
  { href: '#behandelingen',  label: 'Behandelingen' },
  { href: '#team',           label: 'Ons team' },
  { href: '#openingstijden', label: 'Openingstijden' },
  { href: '#contact',        label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-card-lg' : 'border-b border-ivory-border'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] md:h-[76px]">

          {/* ── Logo ──────────────────────────── */}
          <a href="#" className="flex-shrink-0" aria-label={`${site.practice.name} — terug naar boven`}>
            <Image
              src="/images/logo.png"
              alt={site.practice.name}
              width={150}
              height={88}
              className="h-12 md:h-14 w-auto max-w-[180px]"
              priority
            />
          </a>

          {/* ── Desktop nav ───────────────────── */}
          <nav className="hidden xl:flex items-center gap-7" aria-label="Hoofdnavigatie">
            {NAV.map(({ href, label }) => (
              <a key={href} href={href}
                className="text-[15px] text-gray-600 hover:text-brand-700 font-medium transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* ── Right actions ─────────────────── */}
          <div className="flex items-center gap-3">
            <a
              href={site.contact.phoneLink}
              className="hidden sm:flex items-center gap-2 text-brand-700 hover:text-brand-500 font-semibold text-sm transition-colors"
              aria-label={`Bel ons: ${site.contact.phone}`}
            >
              <PhoneSVG />
              {site.contact.phone}
            </a>

            <a href="#contact" className="btn-primary !py-2.5 !px-5 !text-sm !rounded-lg">
              Afspraak maken
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label={open ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                {open
                  ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
                  : <><path d="M3 7h18"/><path d="M3 12h18"/><path d="M3 17h18"/></>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────── */}
        <div
          id="mobile-nav"
          className={`xl:hidden border-t border-ivory-border overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!open}
        >
          <nav className="py-3 space-y-0.5" aria-label="Mobiele navigatie">
            {NAV.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}
                className="flex items-center px-3 py-3 text-gray-700 hover:text-brand-700 hover:bg-brand-50 rounded-xl font-medium transition-colors">
                {label}
              </a>
            ))}
            <a href={site.contact.phoneLink}
              className="flex items-center gap-2.5 px-3 py-3 text-brand-700 font-semibold"
              aria-label={`Bel ons: ${site.contact.phone}`}
            >
              <PhoneSVG />
              {site.contact.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function PhoneSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  )
}
