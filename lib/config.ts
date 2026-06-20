/**
 * Practice configuration — the single source of truth for all content.
 * To deploy for a different dental practice, update this file only.
 * All components read from here.
 */

export const site = {
  practice: {
    name: 'Mondzorg Zuidwijk',
    city: 'Rotterdam',
    neighborhood: 'Zuidwijk',
    region: 'Rotterdam-Zuid',
    established: 2019,
  },

  contact: {
    address: 'Schere 31',
    postalCode: '3085 DT',
    city: 'Rotterdam',
    fullAddress: 'Schere 31, 3085 DT Rotterdam',
    phone: '010-7470122',
    phoneLink: 'tel:0107470122',
    email: 'balie@mondzorgzuidwijk.nl',
    whatsapp: '06-38657149',
    whatsappLink: 'https://wa.me/31638657149',
    mapsUrl: 'https://www.google.com/maps/place/Mondzorg+Zuidwijk/@51.8755154,4.4926622,15z/',
    mapsEmbed: 'https://maps.google.com/maps?q=Schere+31,+Rotterdam&z=15&output=embed',
  },

  social: {
    facebook: 'https://www.facebook.com/Mondzorgzuidwijk/',
    instagram: 'https://www.instagram.com/mondzorgzuidwijk/',
  },

  rating: {
    score: 4.8,
    count: 323,
    platform: 'Google',
    reviewsUrl: 'https://www.google.com/maps/place/Mondzorg+Zuidwijk/@51.8755154,4.4926622,15z/',
  },

  hours: [
    { day: 'Maandag',   open: '08:00', close: '17:00', closed: false },
    { day: 'Dinsdag',   open: '08:00', close: '17:00', closed: false },
    { day: 'Woensdag',  open: '08:00', close: '17:00', closed: false },
    { day: 'Donderdag', open: '08:00', close: '17:00', closed: false },
    { day: 'Vrijdag',   open: '08:00', close: '13:00', closed: false },
    { day: 'Zaterdag',  open: null,    close: null,    closed: true  },
    { day: 'Zondag',    open: null,    close: null,    closed: true  },
  ],

  emergency: {
    provider: 'Dental 365',
    phone: '0900 1515',
    phoneLink: 'tel:09001515',
    location: 'Erasmus MC · Rotterdam',
    website: 'https://www.dental365.nl/spoed-tandarts/rotterdam/',
  },

  team: [
    {
      name: 'Margreet Berends',
      role: 'Mondhygiënist',
      photo: '/images/margreet.jpg',
      education: 'Mondzorgkunde, Hogeschool Utrecht',
      graduationYear: 2006,
      bio: 'Met meer dan 15 jaar ervaring staat Margreet bekend om haar geduldige, warme aanpak. Elke patiënt voelt zich bij haar direct op zijn gemak.',
      bigNumber: null as string | null,
      extra: null as string | null,
    },
    {
      name: 'Babette de Ruiter',
      role: 'Mondhygiënist (zzp)',
      photo: '/images/babette.png',
      education: 'Mondzorgkunde, Hogeschool Utrecht',
      graduationYear: 2021,
      bio: 'Babette brengt frisse energie en uitgebreide kennis van moderne preventietechnieken. Ze houdt van duidelijke uitleg en een relaxte aanpak.',
      bigNumber: null,
      extra: null,
    },
    {
      name: 'Marjolein de Ruiter',
      role: 'Tandarts (zzp)',
      photo: '/images/marjolein.jpg',
      education: 'Tandheelkunde, Radboud Universiteit Nijmegen',
      graduationYear: 2019,
      bio: 'Marjolein hecht grote waarde aan pijnarme behandelingen en heldere communicatie. Ze neemt altijd rustig de tijd voor uw vragen.',
      bigNumber: '99926102002',
      extra: null,
    },
    {
      name: 'Ingrid de Ruiter',
      role: 'Tandarts (zzp)',
      photo: '/images/ingrid.jpg',
      education: 'Tandheelkunde, ACTA Amsterdam',
      graduationYear: 2022,
      bio: 'Ingrid is in opleiding tot parodontoloog en behandelt ook complexe tandvleeskwesties met precisie en aandacht.',
      bigNumber: '79932020602',
      extra: 'In opleiding tot parodontoloog',
    },
  ],

  // Placeholder review snippets — replace with verified Google reviews before launch.
  reviews: [
    {
      name: 'Sandra V.',
      initial: 'S',
      date: 'februari 2025',
      rating: 5,
      treatment: 'Gebitsreiniging',
      text: 'Margreet neemt altijd uitgebreid de tijd en legt alles rustig uit. Na jaren bang te zijn geweest voor de tandarts ga ik hier eindelijk met een goed gevoel naartoe.',
    },
    {
      name: 'Ahmed B.',
      initial: 'A',
      date: 'december 2024',
      rating: 5,
      treatment: 'Eerste controle',
      text: 'Voor het eerst in jaren zonder stress naar de tandarts geweest. Het team is geduldig, vriendelijk en er is nooit haast. Echt een verademing.',
    },
    {
      name: 'Lisa de W.',
      initial: 'L',
      date: 'maart 2025',
      rating: 5,
      treatment: 'Gezin',
      text: 'Alle vier de gezinsleden zijn hier inmiddels patiënt. De kinderen vinden het er zelfs leuk. Snel geholpen bij spoed en altijd een warme ontvangst.',
    },
  ],

  meta: {
    title: 'Mondzorg Zuidwijk | Tandarts in Rotterdam-Zuid',
    description: 'Moderne mondzorg voor het hele gezin in Rotterdam Zuidwijk. Nieuwe patiënten welkom. ★ 4,8 op Google · 323 beoordelingen. Bel 010-7470122.',
    keywords: 'tandarts Rotterdam, mondhygiënist Zuidwijk, gebitsreiniging Rotterdam, tandarts Rotterdam-Zuid',
  },
} as const

export type SiteConfig  = typeof site
export type TeamMember  = (typeof site.team)[number]
export type HoursEntry  = (typeof site.hours)[number]
export type Review      = (typeof site.reviews)[number]
