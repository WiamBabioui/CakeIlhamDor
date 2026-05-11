import { useState } from 'react'
import { Link } from 'react-router-dom'
import { gateauxMarocains, macarons } from '../data/gateaux'
import gateauImg from '../assets/gateau.jpg'

const IMG_HERO       = gateauImg
const IMG_MOROCCAN_1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD47JodRl7LIN8YOah94M1C4CfmSNTcF0QJ8SAGyhd50Pg3wKiTU1QDa-makJCeCzUJ_GfAwmUStc8Y16Agrd8mc9IgUnE3qz2t86ezoToY9cJ7aRB4MctjkM7kGbGab2cU_VIoKLx58EX4NefRI1l-VhHH6jjPfyd-a1INtKdgM9HAoS1DFWNwRLVwe3iXaV9YvfTQYsE7r0W75UuOnKJQcAeX9bkerRb-mizkd3OnpXQzKbvb1baRgme1xLd7AjAaEKRX5zpwU6g'
const IMG_MOROCCAN_2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsdHVjWXQQ_B8uzqc4LbbQ8HuJVxA72J_ctC8MvFGBWioVO__r_0Wrhb31uEkUFw7wpNO1jMEpxbAa_lhyIM9nwqfR_fILvwP5GOxdFBvAVNM9hwKLDZ6sd36pEO_mgFMtxnfSDYq6t9j0RuAu2F1PLhW1VphuUSrq0-7QTXs1tcREnPy5na8s6GxHtAqqzUdTQVQ4sFFDKdUoyTau8lxUsJUD9SnfioGe_WMD9BKXrmA3rNgH23lgJpvoRJi5By4DF6sL6pDA6p8'

const WHATSAPP_NUMBER = '212673362925'

export default function Gateaux({ lang }) {
  const isRTL = lang === 'ar'
  const [activeTab, setActiveTab] = useState('marocain')
  const products = activeTab === 'marocain' ? gateauxMarocains : macarons

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

  const tabStyle = (tab) => ({
    background: activeTab === tab ? 'linear-gradient(135deg,#735c00,#d4af37)' : 'transparent',
    color: activeTab === tab ? '#fff' : '#735c00',
    border: activeTab === tab ? 'none' : '1.5px solid #d4af37',
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em',
    padding: '14px 28px', borderRadius: '9999px',
    cursor: 'pointer', transition: 'all .3s', textTransform: 'uppercase',
  })

  return (
    <main className={`pt-20 pb-nav ${isRTL ? 'font-ar' : 'font-body'}`}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[795px] flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className={`z-10 ${isRTL ? 'order-2 lg:order-2 text-right' : 'order-2 lg:order-1'}`}>
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block font-semibold">
              {isRTL ? 'تراث وأصالة' : 'Héritage & Tradition'}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] mb-6">
              {isRTL ? 'حلوياتنا' : 'Nos\nGâteaux'}
            </h1>
            <p className={`font-body text-xl md:text-2xl text-on-surface-variant max-w-lg mb-10 leading-relaxed ${isRTL ? 'font-ar' : ''}`}>
              {isRTL
                ? 'حلويات مغربية وماكارون راقية، مستوحاة من الوصفات التقليدية ولمسة فنية أصيلة'
                : "Pâtisseries marocaines et macarons raffinés, inspirés de recettes traditionnelles et d'un savoir-faire authentique"
              }
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button
                style={tabStyle('marocain')}
                onClick={() => { setActiveTab('marocain'); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                {isRTL ? 'الحلويات المغربية' : 'Pâtisseries Marocaines'}
              </button>
              <button
                style={tabStyle('macaron')}
                onClick={() => { setActiveTab('macaron'); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                {isRTL ? 'الماكارون' : 'Les Macarons'}
              </button>
            </div>
          </div>

          <div className={`relative ${isRTL ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl lg:rotate-2 shadow-2xl">
              <img src={IMG_HERO} alt="Gâteaux Marocains" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-8 ${isRTL ? '-right-4 md:-right-12' : '-left-8 md:-left-12'} bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[200px] hidden md:block`}>
              <span className="font-headline text-primary text-4xl block mb-2">100%</span>
              <p className="font-body text-sm text-on-surface-variant">
                {isRTL ? 'يدوي ومكونات عالية الجودة.' : 'Artisanal & Ingrédients de première qualité.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GRILLE PHOTOS ═════════════════════════════════════ */}
      <section id="collection"
        className="py-20 px-6 lg:px-12"
        style={{ background: activeTab === 'marocain' ? '#fff2e2' : '#f5f0fa' }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Titre + onglets */}
          <div className="text-center mb-12">
            <h2 className={`font-headline text-4xl text-on-surface mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {activeTab === 'marocain'
                ? (isRTL ? 'الحلويات المغربية' : 'Pâtisseries Marocaines')
                : (isRTL ? 'الماكارون' : 'Les Macarons')
              }
            </h2>
            <div className="inline-flex rounded-full p-1.5 gap-1" style={{ background: '#efe0cd' }}>
              {['marocain', 'macaron'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  background: activeTab === tab ? 'linear-gradient(135deg,#735c00,#d4af37)' : 'transparent',
                  color: activeTab === tab ? '#fff' : '#735c00',
                  border: 'none', padding: '10px 24px', borderRadius: '9999px',
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700,
                  fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'all .25s',
                }}>
                  {tab === 'marocain'
                    ? (isRTL ? 'الحلويات المغربية' : 'Pâtisseries Marocaines')
                    : (isRTL ? 'الماكارون' : 'Les Macarons')
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Grille */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((item) => {
              const name = item.name?.[lang] || item.name?.fr
              const desc = item.shortDesc?.[lang] || item.shortDesc?.fr
              const route = `/gateau/${item.slug}`
              return (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <Link to={route} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img src={item.image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </Link>
                  <div className={`flex flex-col flex-1 px-4 pb-5 pt-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <Link to={route}>
                      <h3 className={`mb-1 hover:opacity-70 ${isRTL ? 'font-ar' : ''}`}
                        style={{ color: '#221a0f', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '15px', fontWeight: 600, lineHeight: '1.35' }}>
                        {name}
                      </h3>
                    </Link>
                    <p className={`flex-1 mb-4 ${isRTL ? 'font-ar' : ''}`}
                      style={{ color: '#4d4635', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '13px', fontWeight: 400, lineHeight: '1.5' }}>
                      {desc}
                    </p>
                    <button
  onClick={(e) => handleCommander(e, name)}
  className="font-label text-xs uppercase tracking-widest px-5 py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
  style={{ background: 'linear-gradient(135deg,#c49a00,#f0cc5a)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700 }}
>
  {isRTL ? 'اطلبوا الآن' : 'Commander'}
</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ SECTION ASYMÉTRIQUE — TRADITION ══════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-surface" id="tradition">
        <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`relative ${isRTL ? 'order-2' : 'order-1'}`}>
            <div className="relative z-10 w-4/5 aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={IMG_MOROCCAN_1} alt="Pâtisseries Marocaines" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-12 ${isRTL ? '-left-4' : '-right-4'} w-3/5 aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-surface z-20 hidden md:block`}>
              <img src={IMG_MOROCCAN_2} alt="Thé à la menthe" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className={`${isRTL ? 'order-1 text-right' : 'order-2'} lg:pb-12`}>
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block font-semibold">
              {isRTL ? 'تراث وأصالة' : 'Héritage & Tradition'}
            </span>
            <h2 className={`font-headline text-4xl md:text-5xl text-on-surface mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {isRTL ? 'الحلويات المغربية' : 'Pâtisseries Marocaines'}
            </h2>
            <p className={`font-body text-lg text-on-surface-variant leading-relaxed mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {isRTL
                ? 'حلوياتنا المغربية دعوة للسفر. مصنوعة وفق وصفات جدتي الأصيلة، نستخدم فقط اللوز عالي الجودة وماء الزهر النقي.'
                : "Nos gâteaux marocains sont une invitation au voyage. Confectionnés selon les recettes ancestrales de ma grand-mère, nous utilisons uniquement des amandes de qualité supérieure, de l'eau de fleur d'oranger pure."
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
            <Link to="/gateaux"
              className="inline-block text-white font-label text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:-translate-y-1 transition-transform"
              style={{ background: 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)' }}>
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
            { icon: 'eco',       fr: { title: '100% Naturel',  desc: "Aucun additif, colorant artificiel ou conservateur dans nos créations." }, ar: { title: '100% طبيعي',   desc: 'لا مضافات ولا ألوان اصطناعية ولا مواد حافظة في منتجاتنا.' } },
            { icon: 'palette',   fr: { title: 'Design Unique', desc: "Chaque gâteau est une pièce unique, personnalisée selon vos désirs." },    ar: { title: 'تصميم فريد',   desc: 'كل حلوى قطعة فريدة ومخصصة حسب رغباتكم.' } },
            { icon: 'temp_preferences_custom', fr: { title: 'Fait Main', desc: "Des détails raffinés et des saveurs qui séduisent les papilles." }, ar: { title: 'يدوي الصنع', desc: 'تفاصيل دقيقة ونكهات تأسر الذوق.' } },
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">{v.icon}</span>
              </div>
              <h3 className={`font-headline text-xl mb-3 ${isRTL ? 'font-ar' : ''}`}>{isRTL ? v.ar.title : v.fr.title}</h3>
              <p className={`font-body text-on-surface-variant ${isRTL ? 'font-ar' : ''}`}>{isRTL ? v.ar.desc : v.fr.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}