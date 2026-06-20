import Image from 'next/image'
import { site } from '@/lib/config'

const PRAKTIJK_LINKS = [
  { href: '#behandelingen',  label: 'Behandelingen' },
  { href: '#team',           label: 'Ons team' },
  { href: '#angst',          label: 'Tandarts-angst' },
  { href: '#nieuwe-patient', label: 'Nieuwe patiënt' },
  { href: '#openingstijden', label: 'Openingstijden' },
]

const LEGAL_LINKS = [
  { href: 'https://mondzorgzuidwijk.nl/privacyverklaring/', label: 'Privacyverklaring' },
  { href: 'https://mondzorgzuidwijk.nl/klachtenprocedure/', label: 'Klachtenprocedure' },
  { href: 'https://mondzorgzuidwijk.nl/huisregels/', label: 'Huisregels' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pt-14 pb-8 text-white" style={{ background: '#0C2119' }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Column 1: Praktijk */}
          <div>
            <a href="#" className="inline-flex mb-5" aria-label={`${site.practice.name} – terug naar boven`}>
              <Image
                src="/images/logo.png"
                alt={site.practice.name}
                width={150}
                height={88}
                className="h-11 w-auto max-w-[160px] brightness-0 invert"
              />
            </a>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Moderne mondzorg met persoonlijke aandacht voor jong en oud in Rotterdam-Zuid — sinds {site.practice.established}.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                { href: site.social.facebook, label: 'Facebook', d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { href: site.social.instagram, label: 'Instagram' },
                { href: site.contact.whatsappLink, label: 'WhatsApp' },
              ].map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                  aria-label={`${label} (opent nieuw venster)`}>
                  <SocialIcon name={label} />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
              <p className="text-[11px] uppercase tracking-widest font-bold text-white/25 mb-3">Juridisch</p>
              {LEGAL_LINKS.map(({ href, label }) => (
                <a key={href} href={href}
                  className="block text-white/45 hover:text-white/70 text-sm transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-widest font-bold text-white/25 mb-6">Navigatie</p>
            <ul className="space-y-3.5" role="list">
              {PRAKTIJK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-white/55 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-widest font-bold text-white/25 mb-5">Contact</p>
              <div className="space-y-3">
                <a href={site.contact.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group">
                  <PinIcon />
                  <span className="text-white/55 group-hover:text-white/80 text-sm transition-colors leading-snug">{site.contact.fullAddress}</span>
                </a>
                <a href={site.contact.phoneLink} className="flex items-center gap-2.5 group">
                  <PhoneIcon />
                  <span className="text-white/80 group-hover:text-white font-semibold text-sm transition-colors">{site.contact.phone}</span>
                </a>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2.5 group">
                  <MailIcon />
                  <span className="text-white/55 group-hover:text-white/80 text-sm transition-colors break-all">{site.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Spoed */}
          <div>
            <p className="text-[11px] uppercase tracking-widest font-bold text-white/25 mb-6">Spoed</p>
            <div className="rounded-2xl p-5" style={{ background: 'rgba(200,149,74,0.12)', border: '1px solid rgba(200,149,74,0.25)' }}>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Buiten onze openingstijden — &apos;s avonds, in het weekend en op feestdagen — kunt u terecht bij <strong className="text-white/90">{site.emergency.provider}</strong>.
              </p>
              <p className="text-[11px] uppercase tracking-wider font-bold mb-1.5" style={{ color: 'rgba(200,149,74,0.7)' }}>Spoednummer 24/7</p>
              <a href={site.emergency.phoneLink}
                className="font-black text-2xl leading-none hover:opacity-80 transition-opacity block mb-1"
                style={{ color: '#C8954A' }}
                aria-label={`Spoednummer: ${site.emergency.phone}`}>
                {site.emergency.phone}
              </a>
              <p className="text-white/35 text-xs mb-4">{site.emergency.location}</p>
              <a
                href={site.emergency.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
                style={{ color: '#C8954A' }}
              >
                Website {site.emergency.provider}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

            <div className="mt-6 rounded-xl p-4 bg-brand-700/30 text-sm text-white/60 leading-relaxed">
              <strong className="text-white/80">Uitgevallen tand?</strong> Bewaar in melk of speeksel, raak de wortel niet aan en zoek <strong className="text-white/80">binnen 30 min</strong> hulp.
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            <p>© {year} {site.practice.name}. Alle rechten voorbehouden.</p>
            <p>{site.contact.fullAddress} · <a href={site.contact.phoneLink} className="hover:text-white/50 transition-colors">{site.contact.phone}</a></p>
          </div>
        </div>

      </div>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'Facebook') return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
  if (name === 'Instagram') return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
    </svg>
  )
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2C20 17.5 12 22 12 22z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" className="flex-shrink-0" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
