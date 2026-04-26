import { Link } from 'react-router-dom'
import { cakes } from '../data/cakes'

// ── Images hero cakes (remplacez par vos propres photos dans src/assets/cakes/)
const IMG_HERO   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaW83Vq-vEaxIV_DvZbC7CMVxQ1b-um88t1wY4m5Mz7JNcU8wtBYjbTBI0XeAIPdKuBz7hulgQMORuH7RmyCDTIIHWDjMtoAmjc-0DUz56zF0bqngvIFBFrp-SHwFU4J5MX3fVoBRXHwLZNynebfSQfntIjj1ge9mHQ4thQ_2VCGhJthKQN44wWXuqWQr-Ny-N5Gaa88CQ8JPxAOgMaVt6qHrazAMrQGn63a_nE6ZwWu0RgTQvzPiNesvGhp-Xzr6Gy6IMw2kA-V8'
const IMG_CAKE_1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuANFwHwVdBNA96ZhMOszLIhI_4VNotYZQXyEG9yAZtp92aq4RBQSvizYZCIyLHSdofsPZ1bgGBHNkid_ZbKSuqlmus5Grh7k099ci5a3DWn1srjlzmJrSRhTA03GrN9VtoKJdwLq-a0KtH7hIMOupa6Df_spGsB9YhFT_bXkd53tq9B3GGbguoT8hCEdw0_Y32x7_e6S82cqEnB1n4CsVoSMFjeUJQ8juBA2npsiN_1dbfv-GQ_C7ydyb5WoGHgyUccBgFdl9dR8DA'
const IMG_CAKE_2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD_FRJuQfCBbPbox5teG6zmB-wmoXJim0BzM5zqPUPgVwv2VZUTTg-VtIwUsyCkup08k-c6vncH0b7h5nOW1-gneSqYMEfvtloDWZpUu6nNwgnNQZqYEdEZ9c0Mwf3xqBTpAEdEI6NXhPEBanLcf1F08cb-DcYYkqUetwyKw-yTCZLpy4yiYWzrjbU1tQO6uO8gtDvmOZX5xClnSDPmDog0y2uBVzh0b2XhUGMSpUvwWb6AdVdrSQ-mjzfpaZ1gGXbYUDcdfBV6fc'

const WHATSAPP_NUMBER = '212673362925'

export default function Cakes({ lang }) {
  const isRTL = lang === 'ar'

  const handleCommander = (e, name) => {
    e.preventDefault()
    e.stopPropagation()
    const msg = isRTL
      ? `مرحباً، أريد طلب: ${name}`
      : `Bonjour, je voudrais commander : ${name}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const checkItems = isRTL
    ? ['كيك مخملي ناعم للأعياد', 'مخصص حسب طلبك بالكامل', 'ألوان وديكور يناسب مناسبتك']
    : ['Velours soyeux pour anniversaires', 'Entièrement personnalisé', 'Couleurs et décors sur mesure']

  return (
    <main className={`pt-20 pb-nav ${isRTL ? 'font-ar' : 'font-body'}`}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[795px] flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div className={`z-10 ${isRTL ? 'order-2 text-right' : 'order-2 lg:order-1'}`}>
            <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs mb-4 block font-semibold">
              {isRTL ? 'على قدر المناسبة' : 'Sur Mesure'}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] mb-6">
              {isRTL ? 'كعكاتنا' : 'Nos Cakes'}
            </h1>
            <p className={`font-body text-xl md:text-2xl text-on-surface-variant max-w-lg mb-10 leading-relaxed ${isRTL ? 'font-ar' : ''}`}>
              {isRTL
                ? 'كيك تصميم مصنوع يدوياً بشغف. تصاميم فريدة تجمع بين الخفة والجمال البصري.'
                : "Cakes design façonnés à la main avec passion. Des créations uniques alliant légèreté et raffinement visuel."
              }
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a href="#collection"
                className="inline-block text-center text-white font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:-translate-y-1 transition-transform duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)' }}>
                {isRTL ? 'مشاهدة الكعك' : 'Voir la Collection'}
              </a>
              <a href="#design"
                className="bg-surface-container-lowest text-primary border border-outline-variant/20 font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full text-center hover:-translate-y-1 transition-transform duration-300">
                {isRTL ? 'كعك الأعراس' : 'Cakes Mariage'}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isRTL ? 'order-1' : 'order-1 lg:order-2'}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl lg:rotate-2 shadow-2xl">
              <img src={IMG_HERO} alt="Cake Design" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-8 ${isRTL ? '-right-4 md:-right-12' : '-left-8 md:-left-12'} bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[200px] hidden md:block`}>
              <span className="font-headline text-secondary text-4xl block mb-2">100%</span>
              <p className="font-body text-sm text-on-surface-variant">
                {isRTL ? 'يدوي ومكونات طبيعية.' : 'Artisanal & Ingrédients naturels.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BENTO GRID — COLLECTION ═══════════════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-surface-container-low" id="collection">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : ''}>
              <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs mb-4 block">
                {isRTL ? 'مجموعة مميزة' : 'Collection Signature'}
              </span>
              <h2 className={`font-headline text-4xl md:text-5xl text-on-surface ${isRTL ? 'font-ar' : ''}`}>
                {isRTL ? 'كعكاتنا المميزة' : 'Nos Cakes Design'}
              </h2>
            </div>
          </div>

          {/* 2 grandes cartes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {cakes[0] && (
              <Link to={`/cake/${cakes[0].slug}`}
                className="md:col-span-7 bg-surface-container-lowest rounded-3xl overflow-hidden group block">
                <div className="aspect-[16/10] overflow-hidden">
                  {cakes[0].image
                    ? <img src={cakes[0].image} alt={cakes[0].name?.[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    : <div className="w-full h-full bg-pink-50 flex items-center justify-center text-9xl">{cakes[0].emoji}</div>
                  }
                </div>
                <div className={`p-8 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className={`font-headline text-2xl mb-2 text-on-surface ${isRTL ? 'font-ar' : ''}`}>{cakes[0].name?.[lang] || cakes[0].name?.fr}</h3>
                  <p className={`font-body text-on-surface-variant leading-relaxed mb-6 ${isRTL ? 'font-ar' : ''}`}>{cakes[0].shortDesc?.[lang] || cakes[0].shortDesc?.fr}</p>
                  <button onClick={(e) => handleCommander(e, cakes[0].name?.[lang] || cakes[0].name?.fr)}
                    className="flex items-center gap-2 bg-secondary text-white font-label text-sm uppercase tracking-widest px-6 py-3 rounded-full hover:-translate-y-1 transition-all">
                    {isRTL ? 'اطلبوا الآن' : 'Commander'}
                  </button>
                </div>
              </Link>
            )}
            {cakes[1] && (
              <Link to={`/cake/${cakes[1].slug}`}
                className="md:col-span-5 bg-surface-container-lowest rounded-3xl overflow-hidden group block">
                <div className="aspect-[4/5] overflow-hidden">
                  {cakes[1].image
                    ? <img src={cakes[1].image} alt={cakes[1].name?.[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    : <div className="w-full h-full bg-pink-50 flex items-center justify-center text-9xl">{cakes[1].emoji}</div>
                  }
                </div>
                <div className={`p-8 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className={`font-headline text-2xl mb-2 text-on-surface ${isRTL ? 'font-ar' : ''}`}>{cakes[1].name?.[lang] || cakes[1].name?.fr}</h3>
                  <p className={`font-body text-on-surface-variant leading-relaxed mb-6 ${isRTL ? 'font-ar' : ''}`}>{cakes[1].shortDesc?.[lang] || cakes[1].shortDesc?.fr}</p>
                  <button onClick={(e) => handleCommander(e, cakes[1].name?.[lang] || cakes[1].name?.fr)}
                    className="flex items-center gap-2 bg-secondary text-white font-label text-sm uppercase tracking-widest px-6 py-3 rounded-full hover:-translate-y-1 transition-all">
                    {isRTL ? 'اطلبوا الآن' : 'Commander'}
                  </button>
                </div>
              </Link>
            )}
          </div>

          {/* Rangée 3 cartes */}
          {cakes.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {cakes.slice(2, 5).map(c => {
                const name = c.name?.[lang] || c.name?.fr
                const desc = c.shortDesc?.[lang] || c.shortDesc?.fr
                return (
                  <Link key={c.id} to={`/cake/${c.slug}`}
                    className="bg-surface-container-lowest rounded-3xl overflow-hidden group block">
                    <div className="aspect-[4/3] overflow-hidden">
                      {c.image
                        ? <img src={c.image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        : <div className="w-full h-full bg-pink-50 flex items-center justify-center text-7xl">{c.emoji}</div>
                      }
                    </div>
                    <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                      <h3 className={`font-headline text-xl mb-2 text-on-surface ${isRTL ? 'font-ar' : ''}`}>{name}</h3>
                      <p className={`font-body text-sm text-on-surface-variant leading-relaxed mb-5 ${isRTL ? 'font-ar' : ''}`}>{desc}</p>
                      <button onClick={(e) => handleCommander(e, name)}
                        className="flex items-center gap-2 bg-secondary text-white font-label text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:-translate-y-1 transition-all">
                        {isRTL ? 'اطلبوا' : 'Commander'}
                      </button>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ══ SECTION ASYMÉTRIQUE ════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-surface" id="design">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={`relative ${isRTL ? 'order-2' : 'order-1'}`}>
            <div className="relative z-10 w-4/5 aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={IMG_CAKE_1} alt="Cake Design" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-12 ${isRTL ? '-left-4' : '-right-4'} w-3/5 aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-surface z-20 hidden md:block`}>
              <img src={IMG_CAKE_2} alt="Détail cake" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className={`${isRTL ? 'order-1 text-right' : 'order-2'} lg:pb-12`}>
            <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs mb-4 block font-semibold">
              {isRTL ? 'على قدر المناسبة' : 'Sur Mesure'}
            </span>
            <h2 className={`font-headline text-4xl md:text-5xl text-on-surface mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {isRTL ? 'كعك تصميم خاص بك' : 'Design Cakes'}
            </h2>
            <p className={`font-body text-lg text-on-surface-variant leading-relaxed mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {isRTL
                ? 'كعكاتنا دعوة للمتعة. مصنوعة وفق أذواقكم، نستخدم مكونات طبيعية 100% وتصاميم فريدة لكل مناسبة.'
                : "Nos cakes sont une invitation à la gourmandise. Façonnés selon vos envies, ingrédients 100% naturels et designs uniques pour chaque occasion."
              }
            </p>
            <ul className="space-y-4 mb-10">
              {checkItems.map((item, i) => (
                <li key={i} className={`flex items-center gap-4 text-on-surface ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  <span className={`font-body font-medium ${isRTL ? 'font-ar' : ''}`}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact"
              className="inline-block text-white font-label text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
              style={{ background: 'linear-gradient(135deg, #a93058 0%, #fe7299 100%)' }}>
              {isRTL ? 'اطلبوا كعكتكم الآن' : 'Commander votre Cake'}
            </Link>
          </div>
        </div>
      </section>

      {/* ══ VALEURS ════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12" style={{ background: 'rgba(239,224,205,0.3)' }}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className={`font-headline text-3xl md:text-4xl text-on-surface ${isRTL ? 'font-ar' : ''}`}>
            {isRTL ? 'التزام كيك إلهام دور' : "L'Engagement Cake Ilham D'or"}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: 'eco', fr: { t: '100% Naturel', d: "Aucun additif ni colorant artificiel." }, ar: { t: '100% طبيعي', d: 'بدون مواد اصطناعية.' } },
            { icon: 'palette', fr: { t: 'Design Unique', d: "Chaque cake est une pièce unique." }, ar: { t: 'تصميم فريد', d: 'كل كعكة قطعة فريدة.' } },
            { icon: 'temp_preferences_custom', fr: { t: 'Fait Main', d: "Le geste artisanal pour une texture incomparable." }, ar: { t: 'يدوي الصنع', d: 'الحرفة اليدوية لقوام لا مثيل له.' } },
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">{v.icon}</span>
              </div>
              <h3 className={`font-headline text-xl mb-3 ${isRTL ? 'font-ar' : ''}`}>{isRTL ? v.ar.t : v.fr.t}</h3>
              <p className={`font-body text-on-surface-variant ${isRTL ? 'font-ar' : ''}`}>{isRTL ? v.ar.d : v.fr.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}