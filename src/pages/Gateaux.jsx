import { Link } from 'react-router-dom'
import { gateaux } from '../data/gateaux'

// Images de référence (remplacez par les vôtres dans src/assets/gateaux/)
const IMG_HERO    = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaW83Vq-vEaxIV_DvZbC7CMVxQ1b-um88t1wY4m5Mz7JNcU8wtBYjbTBI0XeAIPdKuBz7hulgQMORuH7RmyCDTIIHWDjMtoAmjc-0DUz56zF0bqngvIFBFrp-SHwFU4J5MX3fVoBRXHwLZNynebfSQfntIjj1ge9mHQ4thQ_2VCGhJthKQN44wWXuqWQr-Ny-N5Gaa88CQ8JPxAOgMaVt6qHrazAMrQGn63a_nE6ZwWu0RgTQvzPiNesvGhp-Xzr6Gy6IMw2kA-V8'
const IMG_MOROCCAN_1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD47JodRl7LIN8YOah94M1C4CfmSNTcF0QJ8SAGyhd50Pg3wKiTU1QDa-makJCeCzUJ_GfAwmUStc8Y16Agrd8mc9IgUnE3qz2t86ezoToY9cJ7aRB4MctjkM7kGbGab2cU_VIoKLx58EX4NefRI1l-VhHH6jjPfyd-a1INtKdgM9HAoS1DFWNwRLVwe3iXaV9YvfTQYsE7r0W75UuOnKJQcAeX9bkerRb-mizkd3OnpXQzKbvb1baRgme1xLd7AjAaEKRX5zpwU6g'
const IMG_MOROCCAN_2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsdHVjWXQQ_B8uzqc4LbbQ8HuJVxA72J_ctC8MvFGBWioVO__r_0Wrhb31uEkUFw7wpNO1jMEpxbAa_lhyIM9nwqfR_fILvwP5GOxdFBvAVNM9hwKLDZ6sd36pEO_mgFMtxnfSDYq6t9j0RuAu2F1PLhW1VphuUSrq0-7QTXs1tcREnPy5na8s6GxHtAqqzUdTQVQ4sFFDKdUoyTau8lxUsJUD9SnfioGe_WMD9BKXrmA3rNgH23lgJpvoRJi5By4DF6sL6pDA6p8'

const WHATSAPP_NUMBER = '212600000000'

export default function Gateaux({ lang }) {
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
    ? ['كعب الغزال رفيع جداً', 'بريوات مقرمشة بالعسل', 'غريبة بالجوز والليمون']
    : ['Cornes de Gazelle ultra-fines', 'Briouates croquantes au miel', 'Ghriba aux noix et citron']

  return (
    <main className={`pt-20 pb-nav ${isRTL ? 'font-ar' : 'font-body'}`}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[795px] flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div className={`z-10 ${isRTL ? 'order-2 lg:order-2 text-right' : 'order-2 lg:order-1'}`}>
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block font-semibold">
              {isRTL ? 'تراث وأصالة' : 'Héritage & Tradition'}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] mb-6">
              {isRTL ? 'حلوياتنا' : 'Nos\nGâteaux'}
            </h1>
            <p className={`font-body text-xl md:text-2xl text-on-surface-variant max-w-lg mb-10 leading-relaxed ${isRTL ? 'font-ar' : ''}`}>
              {isRTL
                ? 'حلويات مغربية مصنوعة يدوياً بوصفات الجدة. فن المعجنات الأصيلة.'
                : "Gâteaux marocains faits maison selon les recettes de ma grand-mère. L'art de la pâtisserie ancestrale."
              }
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="#collection"
                className="inline-block text-center text-white font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:-translate-y-1 transition-transform duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)' }}
              >
                {isRTL ? 'مشاهدة الحلويات' : 'Voir la Collection'}
              </a>
              <a
                href="#tradition"
                className="bg-surface-container-lowest text-primary border border-outline-variant/20 font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full text-center hover:-translate-y-1 transition-transform duration-300"
              >
                {isRTL ? 'التقليد المغربي' : 'La Tradition Marocaine'}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isRTL ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl lg:rotate-2 shadow-2xl">
              <img
                src={IMG_HERO}
                alt="Gâteaux Marocains"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge flottant */}
            <div className={`absolute -bottom-8 ${isRTL ? '-right-4 md:-right-12' : '-left-8 md:-left-12'} bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[200px] hidden md:block`}>
              <span className="font-headline text-primary text-4xl block mb-2">100%</span>
              <p className="font-body text-sm text-on-surface-variant">
                {isRTL ? 'يدوي ومكونات عالية الجودة.' : 'Artisanal & Ingrédients de première qualité.'}
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
              <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block">
                {isRTL ? 'مجموعة مميزة' : 'Collection Signature'}
              </span>
              <h2 className={`font-headline text-4xl md:text-5xl text-on-surface ${isRTL ? 'font-ar' : ''}`}>
                {isRTL ? 'حلوياتنا المغربية' : 'Nos Gâteaux Marocains'}
              </h2>
            </div>
            <Link
              to="/gateaux"
              className={`group flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest border-b border-primary/20 pb-1 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {isRTL ? 'استكشفي المجموعة' : 'Explorer la gamme'}
              <span className={`material-symbols-outlined transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                {isRTL ? 'arrow_back' : 'arrow_forward'}
              </span>
            </Link>
          </div>

          {/* 2 cartes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Grande carte */}
            {gateaux[0] && (
              <Link
                to={`/gateau/${gateaux[0].slug}`}
                className="md:col-span-7 bg-surface-container-lowest rounded-3xl overflow-hidden group block"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {gateaux[0].image ? (
                    <img src={gateaux[0].image} alt={gateaux[0].name?.[lang] || gateaux[0].name?.fr}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full bg-amber-50 flex items-center justify-center text-9xl">
                      {gateaux[0].emoji}
                    </div>
                  )}
                </div>
                <div className={`p-8 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className={`font-headline text-2xl mb-2 text-on-surface ${isRTL ? 'font-ar' : ''}`}>
                    {gateaux[0].name?.[lang] || gateaux[0].name?.fr}
                  </h3>
                  <p className={`font-body text-on-surface-variant leading-relaxed mb-6 ${isRTL ? 'font-ar' : ''}`}>
                    {gateaux[0].shortDesc?.[lang] || gateaux[0].shortDesc?.fr}
                  </p>
                  <button
                    onClick={(e) => handleCommander(e, gateaux[0].name?.[lang] || gateaux[0].name?.fr)}
                    className="flex items-center gap-2 text-white font-label text-sm uppercase tracking-widest px-6 py-3 rounded-full hover:-translate-y-1 transition-all"
                    style={{ background: 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)' }}
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    {isRTL ? 'اطلبي الآن' : 'Commander'}
                  </button>
                </div>
              </Link>
            )}

            {/* Petite carte haute */}
            {gateaux[1] && (
              <Link
                to={`/gateau/${gateaux[1].slug}`}
                className="md:col-span-5 bg-surface-container-lowest rounded-3xl overflow-hidden group block"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  {gateaux[1].image ? (
                    <img src={gateaux[1].image} alt={gateaux[1].name?.[lang] || gateaux[1].name?.fr}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full bg-amber-50 flex items-center justify-center text-9xl">
                      {gateaux[1].emoji}
                    </div>
                  )}
                </div>
                <div className={`p-8 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className={`font-headline text-2xl mb-2 text-on-surface ${isRTL ? 'font-ar' : ''}`}>
                    {gateaux[1].name?.[lang] || gateaux[1].name?.fr}
                  </h3>
                  <p className={`font-body text-on-surface-variant leading-relaxed mb-6 ${isRTL ? 'font-ar' : ''}`}>
                    {gateaux[1].shortDesc?.[lang] || gateaux[1].shortDesc?.fr}
                  </p>
                  <button
                    onClick={(e) => handleCommander(e, gateaux[1].name?.[lang] || gateaux[1].name?.fr)}
                    className="flex items-center gap-2 text-white font-label text-sm uppercase tracking-widest px-6 py-3 rounded-full hover:-translate-y-1 transition-all"
                    style={{ background: 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)' }}
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    {isRTL ? 'اطلبي الآن' : 'Commander'}
                  </button>
                </div>
              </Link>
            )}
          </div>

          {/* Rangée de 3 cartes supplémentaires */}
          {gateaux.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {gateaux.slice(2, 5).map(g => {
                const name = g.name?.[lang] || g.name?.fr
                const desc = g.shortDesc?.[lang] || g.shortDesc?.fr
                return (
                  <Link
                    key={g.id}
                    to={`/gateau/${g.slug}`}
                    className="bg-surface-container-lowest rounded-3xl overflow-hidden group block"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      {g.image ? (
                        <img src={g.image} alt={name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      ) : (
                        <div className="w-full h-full bg-amber-50 flex items-center justify-center text-7xl">
                          {g.emoji}
                        </div>
                      )}
                    </div>
                    <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                      <h3 className={`font-headline text-xl mb-2 text-on-surface ${isRTL ? 'font-ar' : ''}`}>{name}</h3>
                      <p className={`font-body text-sm text-on-surface-variant leading-relaxed mb-5 ${isRTL ? 'font-ar' : ''}`}>{desc}</p>
                      <button
                        onClick={(e) => handleCommander(e, name)}
                        className="flex items-center gap-2 text-white font-label text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:-translate-y-1 transition-all"
                        style={{ background: 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chat</span>
                        {isRTL ? 'اطلبي' : 'Commander'}
                      </button>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ══ SECTION ASYMÉTRIQUE — TRADITION ══════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-surface" id="tradition">
        <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          {/* Images empilées */}
          <div className={`relative ${isRTL ? 'order-2' : 'order-1'}`}>
            <div className="relative z-10 w-4/5 aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={IMG_MOROCCAN_1} alt="Pâtisseries Marocaines" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-12 ${isRTL ? '-left-4' : '-right-4'} w-3/5 aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-surface z-20 hidden md:block`}>
              <img src={IMG_MOROCCAN_2} alt="Thé à la menthe" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Texte + checklist */}
          <div className={`${isRTL ? 'order-1 text-right' : 'order-2'} lg:pb-12`}>
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block font-semibold">
              {isRTL ? 'تراث وأصالة' : 'Héritage & Tradition'}
            </span>
            <h2 className={`font-headline text-4xl md:text-5xl text-on-surface mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {isRTL ? 'الحلويات المغربية' : 'Pâtisseries Marocaines'}
            </h2>
            <p className={`font-body text-lg text-on-surface-variant leading-relaxed mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {isRTL
                ? 'حلوياتنا المغربية دعوة للسفر. مصنوعة وفق وصفات جدتي الأصيلة، نستخدم فقط اللوز عالي الجودة وماء الزهر النقي وعسل الجبال.'
                : "Nos gâteaux marocains sont une invitation au voyage. Confectionnés selon les recettes ancestrales de ma grand-mère, nous utilisons uniquement des amandes de qualité supérieure, de l'eau de fleur d'oranger pure et du miel de montagne."
              }
            </p>
            <ul className="space-y-4 mb-10">
              {checkItems.map((item, i) => (
                <li key={i} className={`flex items-center gap-4 text-on-surface ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span className={`font-body font-medium ${isRTL ? 'font-ar' : ''}`}>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/gateaux"
              className="inline-block text-white font-label text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
              style={{ background: 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)' }}
            >
              {isRTL ? 'اكتشفي المجموعة' : 'Découvrir la Sélection'}
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
            {
              icon: 'eco',
              fr: { title: '100% Naturel', desc: "Aucun additif, colorant artificiel ou conservateur dans nos créations." },
              ar: { title: '100% طبيعي', desc: 'لا مضافات ولا ألوان اصطناعية ولا مواد حافظة في منتجاتنا.' },
            },
            {
              icon: 'palette',
              fr: { title: 'Design Unique', desc: "Chaque gâteau est une pièce unique, personnalisée selon vos désirs." },
              ar: { title: 'تصميم فريد', desc: 'كل حلوى قطعة فريدة ومخصصة حسب رغباتكم.' },
            },
            {
              icon: 'temp_preferences_custom',
              fr: { title: 'Fait Main', desc: "Le respect du geste artisanal pour une texture et un goût incomparables." },
              ar: { title: 'يدوي الصنع', desc: 'احترام الحرفة اليدوية لقوام وطعم لا مثيل لهما.' },
            },
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">{v.icon}</span>
              </div>
              <h3 className={`font-headline text-xl mb-3 ${isRTL ? 'font-ar' : ''}`}>
                {isRTL ? v.ar.title : v.fr.title}
              </h3>
              <p className={`font-body text-on-surface-variant ${isRTL ? 'font-ar' : ''}`}>
                {isRTL ? v.ar.desc : v.fr.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
