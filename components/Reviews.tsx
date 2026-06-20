import Reveal from './Reveal'
import { site } from '@/lib/config'

const AVATAR_COLORS = ['#2D8A5C', '#C8954A', '#1B4D3E']

export default function Reviews() {
  const { rating, reviews } = site

  return (
    <section id="beoordelingen" className="py-20 md:py-28 bg-ivory" aria-label="Patiëntbeoordelingen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <Reveal>
            <div>
              <p className="section-label mb-4">
                <span className="w-6 h-px bg-brand-500 inline-block align-middle mr-2" />
                Wat patiënten zeggen
              </p>
              <h2 className="section-heading mb-0">
                Vertrouwd door duizenden<br className="hidden sm:block" />
                Rotterdammers
              </h2>
            </div>
          </Reveal>

          {/* Big rating display */}
          <Reveal direction="left" delay={80}>
            <a
              href={rating.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-5 bg-white rounded-2xl px-7 py-5 hover:shadow-card-hover transition-shadow flex-shrink-0"
              style={{ boxShadow: '0 1px 3px 0 rgb(0 0 0 / .06), 0 4px 12px 0 rgb(0 0 0 / .04)' }}
              aria-label={`${rating.score} van de 5 sterren — ${rating.count} beoordelingen op ${rating.platform}`}
            >
              <div className="text-center">
                <p className="font-black text-5xl text-gray-900 leading-none">{rating.score.toFixed(1).replace('.', ',')}</p>
                <p className="text-gray-400 text-xs mt-1.5 font-medium">gemiddeld</p>
              </div>
              <div className="w-px h-14 bg-gray-100" aria-hidden="true" />
              <div>
                <div className="flex items-center gap-0.5 mb-2" aria-hidden="true">
                  {[1,2,3,4].map(i => <StarIcon key={i} filled />)}
                  <StarIcon half />
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  <span className="font-bold text-gray-900">{rating.count}</span> beoordelingen op {rating.platform}
                </p>
              </div>
            </a>
          </Reveal>
        </div>

        {/* Review cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" role="list" aria-label="Patiëntrecensies">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 80}>
              <li className="card p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5" aria-label={`${review.rating} van de 5 sterren`}>
                    {Array.from({ length: review.rating }).map((_, j) => <StarIcon key={j} filled />)}
                  </div>
                  <GoogleLogo />
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 text-[15px] leading-relaxed flex-1 mb-5 relative">
                  <span className="text-4xl text-brand-100 font-serif absolute -top-2 -left-1 leading-none select-none" aria-hidden="true">&ldquo;</span>
                  <span className="relative pl-5">{review.text}</span>
                </blockquote>

                {/* Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                    style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                    aria-hidden="true"
                  >
                    {review.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm truncate">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.date}</p>
                  </div>
                  {/* Treatment tag */}
                  <span className="flex-shrink-0 text-[11px] font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-2.5 py-1">
                    {review.treatment}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* CTA */}
        <Reveal delay={80}>
          <div className="text-center">
            <a
              href={rating.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-700 font-semibold transition-colors"
              aria-label={`Lees alle ${rating.count} beoordelingen op Google (opent nieuw venster)`}
            >
              Lees alle {rating.count} beoordelingen op Google
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

function StarIcon({ filled, half }: { filled?: boolean; half?: boolean }) {
  if (half) return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <defs><linearGradient id="rh"><stop offset="50%" stopColor="#C8954A"/><stop offset="50%" stopColor="#E5E7EB"/></linearGradient></defs>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#rh)"/>
    </svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? '#C8954A' : '#E5E7EB'} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}
