import { site } from '@/lib/config'

export default function MobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 bg-white border-t border-gray-200"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="navigation"
      aria-label="Snelle acties"
    >
      {/* Bellen */}
      <a
        href={site.contact.phoneLink}
        className="flex flex-col items-center justify-center py-3.5 gap-1 text-brand-700 hover:bg-brand-50 transition-colors active:bg-brand-100"
        aria-label={`Bel ons: ${site.contact.phone}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        <span className="text-[12px] font-semibold tracking-wide">Bel</span>
      </a>

      {/* Afspraak */}
      <a
        href="#contact"
        className="flex flex-col items-center justify-center py-3.5 gap-1 text-gray-900 hover:opacity-90 active:opacity-80 transition-opacity"
        style={{ background: '#C8954A' }}
        aria-label="Maak een afspraak"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
        <span className="text-[12px] font-semibold tracking-wide">Afspraak</span>
      </a>
    </div>
  )
}
