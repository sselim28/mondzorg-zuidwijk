'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import { site } from '@/lib/config'

const TREATMENTS = [
  'Controle', 'Gebitsreiniging', 'Tandvleesbehandeling',
  'Kroon & Brugwerk', 'Tanden bleken', 'Wortelkanaalbehandeling',
  'Prothese', 'Vulling', 'Extractie', 'Anders / weet ik niet',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 900)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-ivory" aria-label="Contact en afspraken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-label mb-4 justify-center">
              <span className="w-6 h-px bg-brand-500 inline-block align-middle mr-2" />
              Afspraak maken
            </p>
            <h2 className="section-heading mb-4">Neem contact op</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Vul het formulier in — we nemen zo snel mogelijk contact op. Of bereik ons direct via{' '}
              <a href={site.contact.phoneLink} className="text-brand-500 font-semibold hover:text-brand-700 transition-colors">
                {site.contact.phone}
              </a>.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: Map + details ───────────────── */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="card overflow-hidden">
              <div className="w-full h-64 bg-brand-50 relative">
                <iframe
                  title={`Locatie ${site.practice.name} op Google Maps`}
                  src={site.contact.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label={`Interactieve kaart: ${site.contact.fullAddress}`}
                />
              </div>
              <div className="p-5 space-y-4">
                {[
                  {
                    icon: <MapPinIcon />,
                    label: 'Adres',
                    value: site.contact.fullAddress,
                    href: site.contact.mapsUrl,
                    external: true,
                  },
                  {
                    icon: <PhoneIcon />,
                    label: 'Telefoon',
                    value: site.contact.phone,
                    href: site.contact.phoneLink,
                  },
                  {
                    icon: <MailIcon />,
                    label: 'E-mail',
                    value: site.contact.email,
                    href: `mailto:${site.contact.email}`,
                  },
                  {
                    icon: <WAIcon />,
                    label: 'WhatsApp',
                    value: site.contact.whatsapp,
                    href: site.contact.whatsappLink,
                    external: true,
                  },
                ].map(({ icon, label, value, href, external }) => (
                  <a key={label} href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors mt-0.5" aria-hidden="true">
                      {icon}
                    </span>
                    <div>
                      <p className="text-gray-400 text-[11px] uppercase tracking-wider font-semibold">{label}</p>
                      <p className="text-gray-800 font-medium text-sm mt-0.5 group-hover:text-brand-500 transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right: Form ───────────────────────── */}
          <Reveal delay={80} className="lg:col-span-3">
            <div className="card p-7 md:p-9">
              {submitted ? (
                <SuccessView onReset={() => setSubmitted(false)} />
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Afspraakformulier">
                  <h3 className="font-bold text-gray-900 text-xl mb-7">Stuur ons een bericht</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField id="naam" label="Naam" required>
                      <input id="naam" name="naam" type="text" required autoComplete="name"
                        placeholder="Uw volledige naam" className="input-field" />
                    </FormField>

                    <FormField id="telefoon" label="Telefoonnummer" required>
                      <input id="telefoon" name="telefoon" type="tel" required autoComplete="tel"
                        placeholder="06- of 010-nummer" className="input-field" />
                    </FormField>

                    <FormField id="email" label="E-mailadres">
                      <input id="email" name="email" type="email" autoComplete="email"
                        placeholder="optioneel" className="input-field" />
                    </FormField>

                    <FormField id="datum" label="Voorkeursdatum">
                      <input id="datum" name="datum" type="date" className="input-field"
                        min={new Date().toISOString().split('T')[0]} />
                    </FormField>

                    <FormField id="behandeling" label="Soort behandeling" className="sm:col-span-2">
                      <select id="behandeling" name="behandeling" className="input-field">
                        <option value="">Selecteer een behandeling</option>
                        {TREATMENTS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </FormField>

                    <FormField id="bericht" label="Bericht" className="sm:col-span-2">
                      <textarea id="bericht" name="bericht" rows={4}
                        placeholder="Vertel ons waarmee wij u kunnen helpen…"
                        className="input-field resize-none" />
                    </FormField>
                  </div>

                  <p className="text-gray-400 text-xs mt-5 mb-6">
                    Velden met * zijn verplicht. Uw gegevens worden vertrouwelijk behandeld conform
                    onze <a href="#" className="underline hover:text-gray-600 transition-colors">privacyverklaring</a>.
                  </p>

                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-busy={loading}>
                    {loading
                      ? <><SpinnerIcon /> Verzenden…</>
                      : <><SendIcon /> Plan mijn afspraak</>
                    }
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-2.5">Reactie binnen 1 werkdag</p>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

function FormField({ id, label, required, className = '', children }: {
  id: string; label: string; required?: boolean; className?: string; children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <><span className="text-brand-500 ml-0.5" aria-hidden="true">*</span><span className="sr-only"> (verplicht)</span></>}
      </label>
      {children}
    </div>
  )
}

function SuccessView({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center text-center py-12">
      <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-5" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D8A5C" strokeWidth="2" strokeLinecap="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
        </svg>
      </div>
      <h3 className="font-bold text-gray-900 text-xl mb-2">Bericht ontvangen!</h3>
      <p className="text-gray-500 mb-7 max-w-sm leading-relaxed">
        Dank voor uw bericht. We nemen zo snel mogelijk — doorgaans binnen één werkdag — contact met u op.
      </p>
      <button onClick={onReset} className="text-brand-500 hover:text-brand-700 font-semibold text-sm transition-colors">
        Nog een bericht sturen
      </button>
    </div>
  )
}

function MapPinIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2C20 17.5 12 22 12 22z"/><circle cx="12" cy="10" r="3"/></svg> }
function PhoneIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg> }
function MailIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> }
function WAIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> }
function SendIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> }
function SpinnerIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="animate-spin" aria-hidden="true"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> }
