import Image from 'next/image'
import Reveal from './Reveal'
import { site } from '@/lib/config'

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white" aria-label="Ons team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-14">
          <Reveal>
            <div className="max-w-xl">
              <p className="section-label mb-4">
                <span className="w-6 h-px bg-brand-500 inline-block align-middle mr-2" />
                Wie wij zijn
              </p>
              <h2 className="section-heading mb-4">Maak kennis met ons team</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                U komt niet naar een anoniem loket — u ziet altijd hetzelfde vertrouwde gezicht.
                Ons BIG-geregistreerde team neemt de tijd voor uw verhaal.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={80}>
            <div className="flex-shrink-0 bg-brand-50 border border-brand-100 rounded-2xl px-6 py-5">
              <p className="text-brand-700 font-bold text-2xl mb-0.5">Sinds 2019</p>
              <p className="text-brand-500 font-medium text-sm">Actief in Rotterdam-Zuid</p>
            </div>
          </Reveal>
        </div>

        {/* Team cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list"
          aria-label="Teamleden van Mondzorg Zuidwijk">
          {site.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 65}>
              <li className="card overflow-hidden flex flex-col h-full">

                {/* Portrait photo — landscape crop on mobile saves vertical space */}
                <div className="w-full relative overflow-hidden aspect-[3/2] sm:aspect-[4/5]">
                  <Image
                    src={member.photo}
                    alt={`Portretfoto van ${member.name}`}
                    fill
                    className="object-cover object-[center_15%] sm:object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Role pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-semibold text-white/90 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                      {member.role}
                    </span>
                  </div>

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-brand-900/50 to-transparent z-10" />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-[17px] leading-tight">{member.name}</h3>
                  <p className="text-brand-600 font-semibold text-sm mt-0.5 mb-3">{member.role}</p>

                  <p className="text-gray-500 text-[13.5px] leading-relaxed flex-1">{member.bio}</p>

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <p className="text-gray-400 text-[12px] leading-snug">
                      <span className="font-medium text-gray-500">{member.education.split(',')[0]}</span>
                      {member.education.includes(',') && (
                        <span className="block text-gray-400">{member.education.split(',').slice(1).join(',').trim()}, {member.graduationYear}</span>
                      )}
                    </p>

                    {member.extra && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold rounded-full px-2.5 py-0.5"
                        style={{ background: '#EEF5F1', color: '#207049' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                        {member.extra}
                      </span>
                    )}

                    {member.bigNumber && (
                      <p className="flex items-center gap-1.5 text-[11.5px] text-gray-500">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <span className="font-medium">BIG</span>
                        <span className="font-mono text-gray-400">{member.bigNumber}</span>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  )
}
