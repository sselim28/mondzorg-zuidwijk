import Image from 'next/image'
import Reveal from './Reveal'

const REASSURANCES = [
  { text: 'We nemen rustig de tijd voor u' },
  { text: 'We leggen elke stap van tevoren uit' },
  { text: 'Behandeling in uw eigen tempo' },
  { text: 'Pijnarme aanpak als standaard' },
  { text: 'Geen oordeel — nooit' },
  { text: 'Eerst kennismaken is altijd mogelijk' },
]

export default function AnxietySection() {
  return (
    <section
      id="angst"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#F0F7F3' }}
      aria-label="Informatie voor patiënten met tandarts-angst"
    >
      {/* Subtle texture */}
      <div aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(45,138,92,0.08) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Photo ──────────────────────────────── */}
          <Reveal direction="right" className="hidden lg:block">
            <div className="relative">
              <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/images/about.jpg"
                  alt="Rustig tandartsconsult bij Mondzorg Zuidwijk — patiënt op zijn gemak"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 50vw, 560px"
                />
              </div>

              {/* Floating quote card */}
              <div
                className="absolute bottom-8 -right-6 bg-white rounded-2xl px-5 py-4 max-w-[230px] border border-gray-100"
                style={{ boxShadow: '0 8px 32px 0 rgb(0 0 0 / .1)' }}
              >
                <div className="text-2xl text-brand-200 font-serif leading-none mb-2 select-none" aria-hidden="true">&ldquo;</div>
                <p className="text-gray-800 font-semibold text-sm leading-snug">
                  U bepaalt het tempo — wij volgen.
                </p>
                <p className="text-gray-400 text-xs mt-1.5">Het team van Mondzorg Zuidwijk</p>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: Content ────────────────────────────── */}
          <div>
            <Reveal>
              <p className="section-label mb-4">
                <span className="w-6 h-px bg-brand-500 inline-block align-middle mr-2" />
                Wij begrijpen het
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="section-heading mb-5">
                Bang voor de tandarts?
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                U bent zeker niet de enige. Veel van onze patiënten vonden tandartsbezoeken
                vroeger spannend of zelfs beangstigend. Wij zijn hier om dat te veranderen.
              </p>
            </Reveal>

            {/* Reassurance checklist */}
            <Reveal delay={140}>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10" role="list">
                {REASSURANCES.map(({ text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-brand-100"
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1B4D3E" strokeWidth="3" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium text-[15px] leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <a href="#contact" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Bespreek uw zorgen met ons
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
