import { Link } from 'react-router-dom'
import { cakes } from '../data/cakes'

const WHATSAPP_NUMBER = '212600000000'

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

  return (
    <main
      className={`pt-14 md:pt-16 pb-nav min-h-screen ${isRTL ? 'font-ar' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #e6f9f9 25%, #fce8f2 55%, #e6f9f9 80%, #ffffff 100%)',
      }}
    >
      {/* ── Header ── */}
      <div className="text-center py-16 px-6">
        <h1 style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: '52px', color: '#221a0f', marginBottom: '12px' }}>
          {isRTL ? 'كعكاتنا' : 'Nos Cakes'}
        </h1>
        <div style={{ width: '56px', height: '2px', background: '#f472b6', margin: '0 auto 14px' }} />
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#4d4635', fontSize: '14px' }}>
          {isRTL ? 'اكتشفوا مجموعتنا من الكعك اليدوي' : 'Découvrez notre collection de cakes artisanaux'}
        </p>
      </div>

      {/* ── Grille ── */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cakes.map((cake) => {
            const name = cake.name?.[lang]      || cake.name?.fr
            const desc = cake.shortDesc?.[lang] || cake.shortDesc?.fr

            return (
              <div
                key={cake.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Photo → page détail */}
                <Link to={`/cake/${cake.slug}`} className="block">
                  <div
                    className="flex items-center justify-center bg-white"
                    style={{ aspectRatio: '1/1', padding: '20px 24px 8px' }}
                  >
                    {cake.image ? (
                      <img src={cake.image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    ) : (
                      <span style={{ fontSize: '72px', lineHeight: 1 }}>{cake.emoji || '🎂'}</span>
                    )}
                  </div>
                </Link>

                {/* Contenu */}
                <div
                  className="flex flex-col flex-1"
                  style={{ padding: '6px 14px 16px', textAlign: isRTL ? 'right' : 'left' }}
                >
                  {/* Nom — turquoise, taille et graisse identiques à la photo de référence */}
                  <Link to={`/cake/${cake.slug}`}>
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '1.3',
                        color: '#0a9396',
                        marginBottom: '6px',
                        display: 'block',
                      }}
                    >
                      {name}
                    </h3>
                  </Link>

                  {/* Description — noir, même taille que référence */}
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '1.5',
                      color: '#111111',
                      marginBottom: '14px',
                      flex: 1,
                    }}
                  >
                    {desc}
                  </p>

                  {/* Bouton Commander */}
                  <button
                    onClick={(e) => handleCommander(e, name)}
                    style={{
                      width: '100%',
                      padding: '11px 0',
                      borderRadius: '12px',
                      background: '#f0599c',
                      color: '#ffffff',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '15px',
                      letterSpacing: '0.01em',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {isRTL ? 'اطلب الآن' : 'Commander'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
