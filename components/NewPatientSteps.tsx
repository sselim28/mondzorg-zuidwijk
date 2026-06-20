import Reveal from './Reveal'

const STEPS = [
  {
    number: '1',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .98h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: 'Neem contact op',
    description: 'Bel ons, stuur een e-mail of vul het online formulier in. We reageren altijd binnen één werkdag.',
  },
  {
    number: '2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
    title: 'Eerste afspraak',
    description: 'Rustige kennismaking met uw tandarts of mondhygiënist. We beoordelen uw mondgezondheid en luisteren naar uw wensen.',
  },
  {
    number: '3',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <path d="M9 13h6M9 17h4"/>
      </svg>
    ),
    title: 'Persoonlijk behandelplan',
    description: 'We bespreken uw situatie, stellen samen een plan op en plannen eventuele vervolgbehandelingen — in uw eigen tempo.',
  },
]

export default function NewPatientSteps() {
  return (
    <section id="nieuwe-patient" className="py-20 md:py-28 bg-ivory" aria-label="Stappenplan voor nieuwe patiënten">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-label mb-4 justify-center">
              <span className="w-6 h-px bg-brand-500 inline-block align-middle mr-2" />
              Nieuwe patiënt
            </p>
            <h2 className="section-heading mb-4">Zo werkt het</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              In drie rustige stappen naar een gezonde mond. Geen haast, geen drempel.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[36px] left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #D3E8DC 20%, #D3E8DC 80%, transparent)' }}
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" role="list">
            {STEPS.map(({ number, icon, title, description }, i) => (
              <Reveal key={title} delay={i * 90}>
                <li className="relative flex flex-col items-center text-center">

                  {/* Step circle — lighter design */}
                  <div className="relative mb-6">
                    <div className="w-[72px] h-[72px] rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center text-brand-600">
                      {icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-600 text-white text-[11px] font-bold flex items-center justify-center leading-none">
                      {number}
                    </span>
                  </div>

                  {/* Step content */}
                  <h3 className="font-bold text-gray-900 text-[17px] mb-2.5">{title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs">{description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <Reveal delay={180}>
          <div className="text-center mt-12">
            <a href="#contact" className="btn-primary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              Maak een afspraak als nieuwe patiënt
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
