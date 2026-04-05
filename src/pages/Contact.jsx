import { useTranslation } from 'react-i18next'

// ── CONTACT CONFIG ─────────────────────────────────────────────
// Remplacez par vos vraies informations
const CONTACT = {
  whatsapp:  'https://wa.me/212600000000',
  phone:     '+212 6 00 00 00 00',
  phoneTel:  'tel:+212600000000',
  facebook:  'https://facebook.com/votre-page',
  instagram: 'https://instagram.com/votre-page',
}

export default function Contact({ lang }) {
  const { t } = useTranslation()
  const isRTL = lang === 'ar'

  const cards = [
    {
      key: 'whatsapp',
      href: CONTACT.whatsapp,
      iconBg: 'bg-green-50',
      hoverShadow: 'hover:shadow-green-100',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.437 5.168L2 22l4.979-1.406A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.953 7.953 0 01-4.028-1.088l-.29-.172-2.955.834.837-2.873-.19-.297A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
        </svg>
      ),
      title: t('contact.whatsapp'),
      sub: t('contact.whatsapp_sub'),
    },
    {
      key: 'phone',
      href: CONTACT.phoneTel,
      iconBg: 'bg-rose-pastel',
      hoverShadow: 'hover:shadow-rose-100',
      icon: (
        <svg className="w-7 h-7 text-rose-deep" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"/>
        </svg>
      ),
      title: t('contact.phone'),
      sub: CONTACT.phone,
    },
    {
      key: 'facebook',
      href: CONTACT.facebook,
      target: '_blank',
      iconBg: 'bg-blue-50',
      hoverShadow: 'hover:shadow-blue-100',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#1877f2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      title: t('contact.facebook'),
      sub: t('contact.facebook_sub'),
    },
    {
      key: 'instagram',
      href: CONTACT.instagram,
      target: '_blank',
      iconBg: 'bg-rose-pastel',
      hoverShadow: 'hover:shadow-pink-100',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="ig-contact" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433"/>
              <stop offset="50%" stopColor="#dc2743"/>
              <stop offset="100%" stopColor="#bc1888"/>
            </linearGradient>
          </defs>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#ig-contact)"/>
        </svg>
      ),
      title: t('contact.instagram'),
      sub: t('contact.instagram_sub'),
    },
  ]

  return (
    <main className={`pt-14 md:pt-16 pb-nav min-h-screen bg-cream ${isRTL ? 'font-ar' : ''}`}>
      {/* Deco blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-light rounded-full opacity-25 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-rose-pastel rounded-full opacity-25 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-gold-deep mb-3 block animate-fadeInUp">
            ✦ {isRTL ? 'تواصلوا معنا' : 'Contactez-nous'}
          </span>
          <h1 className={`font-display text-5xl font-light text-gray-800 mb-4 animate-fadeInUp delay-100 ${isRTL ? 'font-ar' : ''}`}>
            {t('contact.title')}
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold-deep to-gold-mid mx-auto mb-4 animate-fadeInUp delay-200" />
          <p className={`text-gray-500 animate-fadeInUp delay-300 ${isRTL ? 'font-ar' : ''}`}>
            {t('contact.sub')}
          </p>
        </div>

        {/* Cards de contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <a
              key={card.key}
              href={card.href}
              target={card.target}
              rel={card.target ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-4 bg-white rounded-2xl p-5 hover:shadow-lg ${card.hoverShadow} transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-${(i + 1) * 100}`}
            >
              <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                {card.icon}
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className={`font-semibold text-gray-800 ${isRTL ? 'font-ar' : ''}`}>{card.title}</p>
                <p className={`text-sm text-gray-400 mt-0.5 ${isRTL ? 'font-ar' : ''}`}>{card.sub}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Message de bas de page */}
        <p className={`text-center text-sm text-gray-400 mt-12 ${isRTL ? 'font-ar' : ''}`}>
          {isRTL
            ? 'يسعدنا تلقي طلباتكم وتصميم حلويات تناسب مناسباتكم الخاصة'
            : 'Nous créons des douceurs sur mesure pour toutes vos occasions spéciales'
          }
        </p>
      </div>
    </main>
  )
}
