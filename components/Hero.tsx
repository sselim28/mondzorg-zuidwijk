import Image from 'next/image'
import Reveal from './Reveal'
import { site } from '@/lib/config'

export default function Hero() {
  const { practice, contact, rating } = site

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ivory pt-[68px] md:pt-[76px]"
      aria-label={`Welkom bij ${practice.name}`}
    >
      {/* Subtle background radial */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #1B4D3E 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-10 xl:gap-14 items-center py-14 md:py-20 lg:py-0 lg:min-h-[calc(100vh-76px)]">

          {/* ── LEFT: Content ──────────────────────────────────── */}
          <div className="order-2 lg:order-1 max-w-xl">

            {/* Location label */}
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-brand-600 font-semibold text-sm tracking-wide">{practice.region}</span>
              </div>
            </Reveal>

            {/* H1 */}
            <Reveal delay={60}>
              <h1 className="font-extrabold text-gray-900 leading-[1.08] mb-5 text-balance"
                style={{ fontSize: 'clamp(2.3rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
                Rustige tandzorg<br />
                voor het hele gezin<br />
                <span className="text-brand-600">in Rotterdam-Zuid.</span>
              </h1>
            </Reveal>

            {/* Subheadline */}
            <Reveal delay={110}>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Persoonlijke mondzorg van preventieve controle tot tandheelkundige behandelingen.
                Een team dat echt de tijd voor u neemt.
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={160}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="#contact" className="btn-primary text-center">
                  <CalSVG />
                  Maak direct een afspraak
                </a>
                <a href={contact.phoneLink} className="btn-outline text-center">
                  <PhoneSVG />
                  Bel {contact.phone}
                </a>
              </div>
            </Reveal>

            {/* Google review badge */}
            <Reveal delay={210}>
              <a
                href={rating.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 hover:shadow-card transition-shadow"
                style={{ boxShadow: '0 1px 3px 0 rgb(0 0 0 / .06), 0 4px 12px 0 rgb(0 0 0 / .04)' }}
                aria-label={`${rating.score} sterren op basis van ${rating.count} beoordelingen — bekijk op Google`}
              >
                <GoogleLogo />
                <span className="font-bold text-gray-900 text-base">{rating.score.toFixed(1).replace('.', ',')}</span>
                <span className="flex" aria-hidden="true">
                  {[1,2,3,4].map(i => <StarFull key={i} />)}
                  <StarHalf />
                </span>
                <span className="text-gray-400 text-sm">
                  · <strong className="text-gray-700 font-semibold">{rating.count}</strong> Google reviews
                </span>
              </a>
            </Reveal>
          </div>

          {/* ── RIGHT: Photo ──────────────────────────────── */}
          <Reveal direction="left" delay={80} className="order-1 lg:order-2">
            <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[calc(100vh-120px)] lg:max-h-[720px]">
              <Image
                src="/images/about.jpg"
                alt="Mondzorg Zuidwijk — moderne tandartsenpraktijk in Rotterdam-Zuid"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function StarFull({ size = 15 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="#C8954A" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
}
function StarHalf() {
  return <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <defs><linearGradient id="h50"><stop offset="50%" stopColor="#C8954A"/><stop offset="50%" stopColor="#d1d5db"/></linearGradient></defs>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#h50)"/>
  </svg>
}
function CalSVG() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
}
function PhoneSVG() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
}
