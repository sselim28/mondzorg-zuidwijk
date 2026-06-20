'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const PRIMARY_SERVICES = [
  {
    title: 'Controle',
    benefit: 'Tijdig problemen voorkomen',
    description: 'Beoordeling van uw mondgezondheid met een persoonlijk behandelplan. We nemen rustig de tijd voor uitleg.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    primary: true,
  },
  {
    title: 'Gebitsreiniging',
    benefit: 'Frisse adem en gezond tandvlees',
    description: 'Professioneel verwijderen van tandplaque, tandsteen en aanslag — gecombineerd met persoonlijk poetsinstructie.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2c-2.8 0-5 2.2-5 5 0 1.7.5 3.2 1.4 4.7L10 18h4l1.6-6.3C16.5 10.2 17 8.7 17 7c0-2.8-2.2-5-5-5z"/><path d="M10 12h4M9 15h6"/></svg>,
    primary: false,
  },
  {
    title: 'Tandvleesbehandeling',
    benefit: 'Behoud uw eigen tanden',
    description: 'Diepreiniging bij parodontitis om uw tandvlees te behandelen en verdere achteruitgang te stoppen.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22V12M4.5 9.5L12 2l7.5 7.5M4.5 9.5h15"/></svg>,
    primary: false,
  },
  {
    title: 'Kroon & Brugwerk',
    benefit: 'Een sterk en mooi gebit',
    description: 'Versterking van beschadigde of ontbrekende tanden met hoogwaardige keramische kronen en bruggen.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>,
    primary: false,
  },
  {
    title: 'Wortelkanaalbehandeling',
    benefit: 'Red uw tand in plaats van trekken',
    description: 'Verwijdering van ontstoken weefsel, waarna het kanaal wordt gereinigd, gespoeld en bacterievrij gevuld.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2c-2.8 0-5 2.2-5 5 0 1.7.6 3.3 1.6 5L10 19h4l1.4-7C16.4 10.3 17 8.7 17 7c0-2.8-2.2-5-5-5z"/><path d="M12 7v8"/></svg>,
    primary: false,
  },
  {
    title: 'Spoed & Extracties',
    benefit: 'Snel en pijnarm geholpen',
    description: 'Spoedafspraken voor acute klachten. Wanneer een tand niet meer te redden is, verwijderen we deze zo zorgvuldig en pijnarm mogelijk.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M10 14l-2 8h8l-2-8"/></svg>,
    primary: false,
  },
]

const MORE_SERVICES = [
  {
    title: 'Tanden bleken',
    benefit: 'Een stralend witte glimlach',
    description: 'Veilig en effectief bleken — voor een frissere, wittere glimlach zonder schade aan tanden of tandvlees.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  },
  {
    title: 'Prothese',
    benefit: 'Eten, lachen en praten met vertrouwen',
    description: 'Gehele of gedeeltelijke vervanging van tanden en kiezen met een comfortabele uitneembare voorziening.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 12s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5z"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    title: 'Vullingen',
    benefit: 'Herstel van beschadigde tanden',
    description: 'Zorgvuldig herstel van een tand of kies aangetast door cariës, om verdere aantasting te voorkomen.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h3"/></svg>,
  },
]

export default function Services() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="behandelingen" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="section-label mb-4">
              <span className="w-6 h-px bg-brand-500 inline-block align-middle mr-2" />
              Onze diensten
            </p>
            <h2 className="section-heading mb-4">Alle mondzorg onder één dak</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Van preventieve mondhygiëne tot complexe tandheelkundige behandelingen —
              ons gediplomeerde team staat voor u klaar.
            </p>
          </div>
        </Reveal>

        {/* Primary grid — 6 cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6" role="list"
          aria-label="Overzicht behandelingen">
          {PRIMARY_SERVICES.map(({ title, benefit, description, icon, primary }, i) => (
            <Reveal key={title} delay={Math.floor(i / 3) * 60 + (i % 3) * 40}>
              <li className={`group flex flex-col h-full rounded-2xl border transition-all duration-200 p-6 hover:-translate-y-0.5 hover:shadow-card-hover ${
                primary
                  ? 'bg-brand-700 border-brand-700 text-white'
                  : 'bg-white border-gray-100/80 shadow-card'
              }`}>
                {/* Icon */}
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-colors ${
                  primary
                    ? 'bg-white/15 text-white'
                    : 'bg-brand-50 text-brand-600 group-hover:bg-brand-100 group-hover:text-brand-700'
                }`} aria-hidden="true">
                  <span className="w-[20px] h-[20px]">{icon}</span>
                </span>
                {/* Title */}
                <h3 className={`font-bold text-[16px] mb-1 ${primary ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                {/* Benefit */}
                <p className={`font-semibold text-[12px] uppercase tracking-wide mb-3 ${primary ? 'text-white/70' : 'text-brand-500'}`}>{benefit}</p>
                {/* Description */}
                <p className={`text-[14px] leading-relaxed flex-1 ${primary ? 'text-white/80' : 'text-gray-500'}`}>{description}</p>
                {/* Link */}
                <a href="#contact"
                  className={`mt-5 inline-flex items-center gap-1.5 font-semibold text-sm transition-all group-hover:gap-2.5 ${
                    primary ? 'text-white/90 hover:text-white' : 'text-brand-600 hover:text-brand-700'
                  }`}
                  aria-label={`Afspraak maken voor ${title}`}
                >
                  Afspraak maken
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Meer behandelingen toggle */}
        {showMore && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8" role="list"
            aria-label="Overige behandelingen">
            {MORE_SERVICES.map(({ title, benefit, description, icon }, i) => (
              <Reveal key={title} delay={i * 40}>
                <li className="card group hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 p-6 h-full flex flex-col">
                  <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 flex-shrink-0 group-hover:bg-brand-100 transition-colors" aria-hidden="true">
                    <span className="w-[20px] h-[20px]">{icon}</span>
                  </span>
                  <h3 className="font-bold text-gray-900 text-[16px] mb-1">{title}</h3>
                  <p className="text-brand-500 font-semibold text-[12px] uppercase tracking-wide mb-3">{benefit}</p>
                  <p className="text-gray-500 text-[14px] leading-relaxed flex-1">{description}</p>
                  <a href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-semibold text-sm transition-all group-hover:gap-2.5"
                    aria-label={`Afspraak maken voor ${title}`}
                  >
                    Afspraak maken
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        )}

        {/* Toggle link */}
        <div className="text-center">
          <button
            onClick={() => setShowMore(prev => !prev)}
            className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-700 font-semibold text-sm transition-colors"
            aria-expanded={showMore}
          >
            {showMore ? (
              <>
                Minder behandelingen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </>
            ) : (
              <>
                Meer behandelingen — tanden bleken, prothese, vullingen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  )
}
