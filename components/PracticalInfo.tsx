import Reveal from './Reveal'
import { site } from '@/lib/config'

export default function PracticalInfo() {
  const today = new Date().getDay() // 0=Sun, 1=Mon ... 6=Sat

  return (
    <section id="openingstijden" className="py-20 md:py-28 bg-white" aria-label="Praktische informatie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="max-w-xl mb-14">
            <p className="section-label mb-4">
              <span className="w-6 h-px bg-brand-500 inline-block align-middle mr-2" />
              Praktische informatie
            </p>
            <h2 className="section-heading">Openingstijden &amp; bereikbaarheid</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Opening hours */}
          <Reveal>
            <div className="card p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <h3 className="font-bold text-gray-900 text-lg">Openingstijden</h3>
              </div>

              <table className="w-full" aria-label="Openingstijden per dag">
                <tbody>
                  {site.hours.map(({ day, open, close, closed }, i) => {
                    const isToday = today === (i + 1 > 6 ? 0 : i + 1)
                    return (
                      <tr key={day}
                        className={`border-b border-gray-50 last:border-0 ${isToday ? 'bg-brand-50 rounded-lg' : ''}`}
                        aria-current={isToday ? 'true' : undefined}>
                        <td className={`py-2.5 pr-4 text-sm font-medium ${isToday ? 'text-brand-700 pl-2' : 'text-gray-700'}`}>
                          {day}
                          {isToday && (
                            <span className="ml-2 text-[10px] font-bold bg-brand-500 text-white rounded-full px-2 py-0.5">Vandaag</span>
                          )}
                        </td>
                        <td className={`py-2.5 text-sm text-right font-medium ${closed ? 'text-gray-300' : isToday ? 'text-brand-600 pr-2' : 'text-gray-600'}`}>
                          {closed ? 'Gesloten' : `${open} – ${close}`}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={70}>
            <div className="card p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2C20 17.5 12 22 12 22z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <h3 className="font-bold text-gray-900 text-lg">Contact &amp; locatie</h3>
              </div>

              <dl className="space-y-4 text-sm">
                {[
                  {
                    label: 'Adres',
                    value: site.contact.fullAddress,
                    href: site.contact.mapsUrl,
                  },
                  {
                    label: 'Telefoon',
                    value: site.contact.phone,
                    href: site.contact.phoneLink,
                    strong: true,
                  },
                  {
                    label: 'E-mail',
                    value: site.contact.email,
                    href: `mailto:${site.contact.email}`,
                  },
                  {
                    label: 'WhatsApp',
                    value: site.contact.whatsapp,
                    href: site.contact.whatsappLink,
                    external: true,
                  },
                ].map(({ label, value, href, strong, external }) => (
                  <div key={label}>
                    <dt className="text-gray-400 text-[11px] uppercase tracking-wider font-semibold mb-1">{label}</dt>
                    <dd>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className={`transition-colors ${strong ? 'text-brand-700 font-bold text-base hover:text-brand-500' : 'text-gray-700 font-medium hover:text-brand-500'}`}
                      >
                        {value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <a
                  href={site.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-700 font-semibold text-sm transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  Routebeschrijving op Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          {/* Emergency */}
          <Reveal delay={140} className="md:col-span-2 lg:col-span-1">
            <div
              className="card p-6 h-full border-l-4"
              style={{ borderLeftColor: '#C8954A' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#FBF6EC', color: '#C8954A' }} aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </span>
                <h3 className="font-bold text-gray-900 text-lg">Spoedgevallen</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Buiten onze openingstijden — &apos;s avonds, in het weekend en op feestdagen —
                kunt u terecht bij <strong>{site.emergency.provider}</strong> aan het Erasmus MC.
              </p>

              <div className="rounded-xl px-4 py-3.5 mb-5" style={{ background: '#FBF6EC' }}>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: '#AB7C38' }}>Spoednummer 24/7</p>
                <a href={site.emergency.phoneLink} className="font-black text-2xl hover:opacity-80 transition-opacity" style={{ color: '#C8954A' }}
                  aria-label={`Spoednummer: ${site.emergency.phone}`}>
                  {site.emergency.phone}
                </a>
                <p className="text-gray-500 text-xs mt-0.5">{site.emergency.location}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 leading-relaxed mb-4">
                <strong className="text-gray-800">Uitgevallen tand?</strong> Bewaar in melk of
                speeksel, raak de wortel niet aan en probeer <strong>binnen 30 minuten</strong> hulp te zoeken.
              </div>

              <a
                href={site.emergency.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-sm transition-colors hover:opacity-80"
                style={{ color: '#C8954A' }}
              >
                Website {site.emergency.provider}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
