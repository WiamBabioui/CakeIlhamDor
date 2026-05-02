import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cakesDesign, tartesGlacees } from '../data/cakes'

// Même photo dorée que la page Gâteaux
const IMG_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaW83Vq-vEaxIV_DvZbC7CMVxQ1b-um88t1wY4m5Mz7JNcU8wtBYjbTBI0XeAIPdKuBz7hulgQMORuH7RmyCDTIIHWDjMtoAmjc-0DUz56zF0bqngvIFBFrp-SHwFU4J5MX3fVoBRXHwLZNynebfSQfntIjj1ge9mHQ4thQ_2VCGhJthKQN44wWXuqWQr-Ny-N5Gaa88CQ8JPxAOgMaVt6qHrazAMrQGn63a_nE6ZwWu0RgTQvzPiNesvGhp-Xzr6Gy6IMw2kA-V8'

const WHATSAPP_NUMBER = '212673362925'

export default function Cakes({ lang }) {
  const isRTL = lang === 'ar'
  const [activeTab, setActiveTab] = useState('design')
  const products = activeTab === 'design' ? cakesDesign : tartesGlacees

  const handleCommander = (e, name) => {
    e.preventDefault(); e.stopPropagation()
    const msg = isRTL
      ? `مرحباً، أريد طلب: ${name}`
      : `Bonjour, je voudrais commander : ${name}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <main className={`pt-20 pb-nav ${isRTL ? 'font-ar' : 'font-body'}`}>

      {/* ══ HERO — même style que Gâteaux ═══════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texte gauche */}
          <div className={`z-10 ${isRTL ? 'order-2 text-right' : 'order-2 lg:order-1'}`}>
            <span
              className="uppercase tracking-[0.2em] text-xs mb-4 block font-semibold"
              style={{ color: '#735c00', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {isRTL ? 'على حسب المناسبة' : 'Sur Mesure'}
            </span>

            <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-[1.1] mb-6">
              {isRTL ? 'كعكاتنا' : 'Nos Cakes'}
            </h1>

            <p
              className={`text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed ${isRTL ? 'font-ar' : ''}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {isRTL
                ? 'كعك تصميم مصنوع يدوياً وكعك بارد — إبداعات فريدة لكل مناسبة.'
                : "Cakes design façonnés à la main et tartes glacées — des créations uniques pour chaque occasion."
              }
            </p>

            {/* Boutons — même style exact que Gâteaux */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              {/* Bouton 1 — doré plein (actif) ou contour */}
              <button
                onClick={() => {
                  setActiveTab('design')
                  document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-label font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1"
                style={{
                  background: activeTab === 'design'
                    ? 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)'
                    : 'transparent',
                  color: activeTab === 'design' ? '#ffffff' : '#735c00',
                  border: activeTab === 'design' ? 'none' : '1.5px solid #735c00',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                {isRTL ? 'كعك تصميم' : 'Cakes Designés'}
              </button>

              {/* Bouton 2 — contour (inactif) ou doré (actif) */}
              <button
                onClick={() => {
                  setActiveTab('tarte')
                  document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-label text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: activeTab === 'tarte'
                    ? 'linear-gradient(135deg, #735c00 0%, #d4af37 100%)'
                    : 'transparent',
                  color: activeTab === 'tarte' ? '#ffffff' : '#735c00',
                  border: activeTab === 'tarte' ? 'none' : '1.5px solid #735c00',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                {isRTL ? 'كعك بارد' : 'Cakes Froids'}
              </button>
            </div>
          </div>

          {/* Image — même photo dorée */}
          <div className={`relative ${isRTL ? 'order-1' : 'order-1 lg:order-2'}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl lg:rotate-2 shadow-2xl">
              <img src={IMG_HERO} alt="Cake Design" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute -bottom-8 ${isRTL ? '-right-4 md:-right-12' : '-left-8 md:-left-12'} bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[200px] hidden md:block`}>
              <span
                className="text-4xl block mb-2"
                style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, color: '#735c00' }}
              >
                100%
              </span>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', color: '#4d4635' }}>
                {isRTL ? 'يدوي ومكونات طبيعية.' : 'Artisanal & Ingrédients naturels.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GRILLE PHOTOS ═════════════════════════════════════ */}
      <section
        id="collection"
        className="py-20 px-6 lg:px-12"
        style={{ background: activeTab === 'design' ? '#fff2e2' : '#eef7f7' }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Titre + onglets */}
          <div className="text-center mb-12">
            <h2 className={`font-headline text-4xl text-on-surface mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {activeTab === 'design'
                ? (isRTL ? 'كعك التصميم' : 'Cakes Designés')
                : (isRTL ? 'التارت المثلجة' : 'Cakes Froids')
              }
            </h2>
            <div className="inline-flex rounded-full p-1.5 gap-1" style={{ background: '#efe0cd' }}>
              {['design', 'tarte'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: activeTab === tab ? 'linear-gradient(135deg,#735c00,#d4af37)' : 'transparent',
                    color: activeTab === tab ? '#fff' : '#735c00',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all .25s',
                  }}
                >
                  {tab === 'design'
                    ? (isRTL ? 'كعك تصميم' : 'Cakes Designés')
                    : (isRTL ? 'كعك بارد' : 'Cakes Froids')
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
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <Link to={`/cake/${item.slug}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className={`flex flex-col flex-1 px-4 pb-5 pt-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <Link to={`/cake/${item.slug}`}>
                      <h3
                        className={`mb-1 hover:opacity-70 ${isRTL ? 'font-ar' : ''}`}
                        style={{ color: '#221a0f', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '15px', fontWeight: 600, lineHeight: '1.35' }}
                      >
                        {name}
                      </h3>
                    </Link>
                    <p
                      className={`flex-1 mb-4 ${isRTL ? 'font-ar' : ''}`}
                      style={{ color: '#4d4635', fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '13px', fontWeight: 400, lineHeight: '1.5' }}
                    >
                      {desc}
                    </p>
                    <button
                      onClick={(e) => handleCommander(e, name)}
                      className="font-label text-xs uppercase tracking-widest px-5 py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                      style={{ background: 'linear-gradient(135deg,#c9a227,#e8c96a)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700 }}
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
    </main>
  )
}