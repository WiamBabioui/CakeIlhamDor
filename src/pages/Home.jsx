import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { cakes } from '../data/cakes'
import { gateaux } from '../data/gateaux'

// ── CONTACT CONFIG — remplacez par vos vraies infos ──────────
const CONTACT = {
  whatsapp:  'https://wa.me/212600000000',
  phone:     'tel:+212600000000',
  phoneNum:  '+212 6 00 00 00 00',
  facebook:  'https://facebook.com/votre-page',
  instagram: 'https://instagram.com/votre-page',
}

// ── Images hero/bento (remplacez par vos propres images) ─────
const IMG_HERO    = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsYijWUXbXPA2k6EBxLXwQMBRXyW9PwOt0eqbVH76r9BgSyBbvu_h9QD-Yyx7UbAEwgZIn8a2Z7F2OFGeoZlJH9cdPE9O6ZVzMQOhbdXp8TmZaY8DEjQkdkDAdBKDZ72N8bAsbef1Gbea9q796sIQcJBbJDNsqLo4tLoxvOi1WtMb9Mw93sjgS07uXPZPOY3L8qlN1N8a6a3jSn4fl0cKXqxV3u1fCDOVIlU6q6TCsZFwstCY5vESiBpk6LqLbzw0jAG0yNwl0V0'
const IMG_BENTO_CAKE   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaq6qOjhLAXWhxehC05oF21nYaCC1r7Phbjb7yKldpyZPQoj9nR2VZHjrSWK-m4cqm4uuMRcTTRKq0cGW0WlGHaTz5HXUrspl2oNfAXz6tvyIN6bK314k5d8bXpjp6IWkVsXaRD0MhhAPsWDnqE-EQzLNiIeZqJykWdMsflt7byGKHa27ryD4hC2ViT6D7wfUXL5upyh3btFtvBwWJh2P46yOnMCmFw-BldHECeTTyIehKhr4Yn1KDgJbw2rqq0Ti3mkcH7omXTUg'
const IMG_BENTO_GATEAU = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTmDwUEsNe4RPhpJajo7J8jKaXIQArASadHaffaLiGgwnu01mg7L7qEzrsUI2bUUJD7h27daKl2QLaH1pmlo5RuqOuXZDruT-r0_-pldeJ2S-nC8_mrFY7skNHZevtaxQn__lJdWWXxQwcqwRldIZx2pwIjRSp97cwq4bhcrSevP_ZH6NNyrgyhmtrUfSXjSPZFjdLft2SDzOFFD0RUlxWz1MsSQ2T8izPbwU7EJNtUjOVU-ySu6jZ0ApGV5hVWzk2aP5Z0OyrAe0'

export default function Home({ lang }) {
  const isRTL    = lang === 'ar'
  const sliderRef = useRef(null)

  // Combine cakes + gateaux pour le slider "Nos Signatures"
  const signatures = [
    ...cakes.slice(0, 2),
    ...gateaux.slice(0, 2),
    ...cakes.slice(2, 4),
  ]

  const scroll = (dir) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <main className={`pb-nav ${isRTL ? 'font-ar' : 'font-body'}`}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative h-[795px] flex items-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMG_HERO}
            alt="Elegant cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f3]/90 via-[#fff8f3]/40 to-transparent" />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-primary mb-4 block font-semibold text-sm">
              {isRTL ? 'فن الحلويات' : "L'Art de la Pâtisserie"}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface mb-6 leading-tight">
              {isRTL ? 'كيك إلهام دور' : "Cake Ilham D'or"}
            </h1>
            <p className="text-xl md:text-2xl font-body text-on-surface-variant mb-12 max-w-lg leading-relaxed">
              {isRTL
                ? 'كيك تصميم وحلويات مغربية منزلية. مزيج من الأناقة الفرنسية والتراث الأصيل.'
                : "Cakes design et gâteaux marocains faits maison. Une fusion d'élégance française et de tradition ancestrale."
              }
            </p>
            <div className={`flex flex-col sm:flex-row gap-6 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                to="/cakes"
                className="gold-gradient text-white px-10 py-5 rounded-full font-label font-bold tracking-wider shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                {isRTL ? 'مشاهدة الكيك' : 'VOIR LES CAKES'}
              </Link>
              <Link
                to="/gateaux"
                className="bg-surface-container-lowest border-2 border-outline-variant/30 text-on-surface px-10 py-5 rounded-full font-label font-bold tracking-wider hover:bg-surface-container-low transition-all duration-300 text-center"
              >
                {isRTL ? 'الحلويات المغربية' : 'GÂTEAUX MAROCAINS'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BENTO GRID ════════════════════════════════════════ */}
      <section className="py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${isRTL ? 'md:grid-flow-dense' : ''}`}>

            {/* Cakes — grande carte gauche */}
            <div className={`md:col-span-7 group relative overflow-hidden rounded-[2rem] bg-surface-container-lowest p-12 min-h-[500px] flex flex-col justify-end`}>
              <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden opacity-90 group-hover:scale-105 transition-transform duration-700">
                <img src={IMG_BENTO_CAKE} alt="Design Cakes" className="w-full h-full object-cover" />
              </div>
              <div className={`relative z-10 bg-white/40 backdrop-blur-sm p-8 rounded-3xl max-w-sm ${isRTL ? 'text-right' : ''}`}>
                <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">
                  {isRTL ? 'مخصص' : 'Sur Mesure'}
                </span>
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">
                  {isRTL ? 'كيك تصميم' : 'Design Cakes'}
                </h2>
                <p className="text-on-surface-variant mb-6">
                  {isRTL
                    ? 'إبداعات فريدة لأجمل لحظاتك، تجمع بين الخفة والجمال البصري.'
                    : "Des créations uniques pour vos moments d'exception, alliant légèreté et raffinement visuel."
                  }
                </p>
                <Link
                  to="/cakes"
                  className={`text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
                >
                  {isRTL ? 'اكتشفي المجموعة' : 'Découvrir la collection'}
                  <span className="material-symbols-outlined">
                    {isRTL ? 'arrow_back' : 'arrow_forward'}
                  </span>
                </Link>
              </div>
            </div>

            {/* Gâteaux marocains — petite carte droite */}
            <div className="md:col-span-5 group relative overflow-hidden rounded-[2rem] bg-surface-container-highest p-12 min-h-[500px] flex flex-col justify-between border border-primary-container/20">
              <div className={`relative z-10 ${isRTL ? 'text-right' : ''}`}>
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">
                  {isRTL ? 'تراث' : 'Héritage'}
                </span>
                <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">
                  {isRTL ? 'حلويات مغربية' : 'Gâteaux Marocains'}
                </h2>
                <p className="text-on-surface-variant mb-8">
                  {isRTL
                    ? 'أصالة نكهات الأطلس: كعب الغزال والعسل وماء الزهر.'
                    : "L'authenticité des saveurs de l'Atlas : cornes de gazelle, miel et fleur d'oranger."
                  }
                </p>
              </div>
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mt-auto">
                <img
                  src={IMG_BENTO_GATEAU}
                  alt="Gâteaux Marocains"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <Link
                to="/gateaux"
                className={`mt-8 text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
              >
                {isRTL ? 'الحرف التقليدية' : "L'artisanat traditionnel"}
                <span className="material-symbols-outlined">
                  {isRTL ? 'arrow_back' : 'arrow_forward'}
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ NOS SIGNATURES (slider) ═══════════════════════════ */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-16 flex justify-between items-end">
          <div>
            <h3 className="text-5xl font-headline font-bold text-on-surface">
              {isRTL ? 'توقيعاتنا' : 'Nos Signatures'}
            </h3>
            <p className={`text-on-surface-variant mt-4 text-lg ${isRTL ? 'font-ar' : ''}`}>
              {isRTL ? 'مختارة بعناية لأذواقكم.' : 'Sélectionnés avec soin pour vos papilles.'}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll(-1)}
              className="p-4 rounded-full border border-outline-variant hover:bg-white transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-4 rounded-full border border-outline-variant hover:bg-white transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-8 px-8 overflow-x-auto no-scrollbar pb-8"
        >
          {signatures.map((p, i) => {
            const name = p.name?.[lang] || p.name?.fr
            const desc = p.shortDesc?.[lang] || p.shortDesc?.fr
            const route = `/${p.category}/${p.slug}`
            return (
              <Link
                key={p.id}
                to={route}
                className="flex-none w-80 bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-300 block"
              >
                <div className="h-80 overflow-hidden img-zoom-wrap">
                  {p.image ? (
                    <img src={p.image} alt={name} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center text-8xl ${p.category === 'cake' ? 'bg-pink-50' : 'bg-amber-50'}`}>
                      {p.emoji}
                    </div>
                  )}
                </div>
                <div className={`p-8 ${isRTL ? 'text-right' : ''}`}>
                  <h4 className={`text-xl font-headline font-bold text-on-surface ${isRTL ? 'font-ar' : ''}`}>
                    {name}
                  </h4>
                  <p className={`text-sm text-on-surface-variant mt-2 ${isRTL ? 'font-ar' : ''}`}>
                    {desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-surface relative overflow-hidden">
        {/* Deco blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-surface-container-low rounded-full opacity-60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-surface-container rounded-full opacity-40 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h3 className={`text-4xl font-headline font-bold text-on-surface mb-6 ${isRTL ? 'font-ar' : ''}`}>
            {isRTL ? 'هل لديك رغبة خاصة؟' : 'Une envie particulière ?'}
          </h3>
          <p className={`text-on-surface-variant mb-12 text-lg ${isRTL ? 'font-ar' : ''}`}>
            {isRTL
              ? 'تواصلي معنا لفعالياتكم الخاصة، حفلات الزفاف والمناسبات.'
              : 'Contactez-nous pour vos événements privés, mariages et réceptions.'
            }
          </p>

          {/* 4 contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">

            {/* WhatsApp */}
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 bg-white rounded-2xl p-5 hover:shadow-lg hover:shadow-green-100 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.437 5.168L2 22l4.979-1.406A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.953 7.953 0 01-4.028-1.088l-.29-.172-2.955.834.837-2.873-.19-.297A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
                </svg>
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className={`font-semibold text-on-surface ${isRTL ? 'font-ar' : ''}`}>
                  {isRTL ? 'واتساب' : 'WhatsApp'}
                </p>
                <p className={`text-sm text-on-surface-variant ${isRTL ? 'font-ar' : ''}`}>
                  {isRTL ? 'اطلبي بسهولة' : 'Commandez facilement'}
                </p>
              </div>
            </a>

            {/* Téléphone */}
            <a href={CONTACT.phone}
               className="flex items-center gap-4 bg-white rounded-2xl p-5 hover:shadow-lg hover:shadow-pink-100 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"/>
                </svg>
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className={`font-semibold text-on-surface ${isRTL ? 'font-ar' : ''}`}>
                  {isRTL ? 'هاتف' : 'Téléphone'}
                </p>
                <p className="text-sm text-on-surface-variant" dir="ltr">{CONTACT.phoneNum}</p>
              </div>
            </a>

            {/* Facebook */}
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 bg-white rounded-2xl p-5 hover:shadow-lg hover:shadow-blue-100 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877f2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className={`font-semibold text-on-surface ${isRTL ? 'font-ar' : ''}`}>Facebook</p>
                <p className={`text-sm text-on-surface-variant ${isRTL ? 'font-ar' : ''}`}>
                  {isRTL ? 'تابعي صفحتنا' : 'Suivez notre page'}
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 bg-white rounded-2xl p-5 hover:shadow-lg hover:shadow-pink-100 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433"/>
                      <stop offset="50%" stopColor="#dc2743"/>
                      <stop offset="100%" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#ig)"/>
                </svg>
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className={`font-semibold text-on-surface ${isRTL ? 'font-ar' : ''}`}>Instagram</p>
                <p className={`text-sm text-on-surface-variant ${isRTL ? 'font-ar' : ''}`}>
                  {isRTL ? 'إبداعاتنا بالصور' : 'Nos créations en photos'}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
      <footer className="bg-surface-container-low w-full rounded-t-[2rem]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-7xl mx-auto">
          <div className={isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}>
            <span className="font-headline text-lg font-semibold text-primary">Cake Ilham D'or</span>
            <p className="font-body text-sm tracking-wide text-stone-500 mt-2">
              © 2024 Cake Ilham D'or. Artisanal Excellence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { to: '/',        fr: 'Accueil',   ar: 'الرئيسية' },
              { to: '/cakes',   fr: 'Cakes',     ar: 'الكيك' },
              { to: '/gateaux', fr: 'Gâteaux',   ar: 'الحلويات' },
              { to: '/contact', fr: 'Contact',   ar: 'تواصل' },
            ].map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${i === 0 ? 'text-primary font-bold' : 'text-stone-500'} ${isRTL ? 'font-ar' : ''}`}
              >
                {isRTL ? l.ar : l.fr}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}