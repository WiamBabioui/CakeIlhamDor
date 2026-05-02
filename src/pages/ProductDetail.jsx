import { useParams, Link, useNavigate } from 'react-router-dom'
import { cakes } from '../data/cakes'
import { gateaux as gateauxMarocains } from '../data/gateaux'
import WhatsAppButton from '../components/WhatsAppButton'

const WHATSAPP_NUMBER = '212673362925'

export default function ProductDetail({ lang, type }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const isRTL = lang === 'ar'

  // Chercher dans tous les tableaux selon le type
  let product = null
  if (type === 'cake') {
    product = cakes.find(p => p.slug === slug)
  } else {
    product = gateauxMarocains.find(p => p.slug === slug)
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#fff8f3' }}>
        <div className="text-center">
          <p style={{ color: '#9ca3af', marginBottom: '16px' }}>
            {isRTL ? 'المنتج غير موجود' : 'Produit introuvable'}
          </p>
          <button
            onClick={() => navigate(-1)}
            style={{ color: '#735c00', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '15px' }}
          >
            {isRTL ? '→ العودة' : '← Retour'}
          </button>
        </div>
      </div>
    )
  }

  const name        = product.name?.[lang]        || product.name?.fr
  const description = product.description?.[lang] || product.description?.fr
  const shortDesc   = product.shortDesc?.[lang]   || product.shortDesc?.fr
  const isCake      = type === 'cake'
  const backPath    = isCake ? '/cakes' : '/gateaux'
  const backLabel   = isCake
    ? (isRTL ? '→ العودة للكعك' : '← Retour aux cakes')
    : (isRTL ? '→ العودة للحلويات' : '← Retour aux gâteaux')

  const handleCommander = () => {
    const msg = isRTL
      ? `مرحباً، أريد طلب: ${name}`
      : `Bonjour, je voudrais commander : ${name}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const bgColor = isCake ? '#fff2e2' : '#fdf6ed'
  const accentColor = isCake ? '#a93058' : '#735c00'
  const btnGradient = isCake
    ? 'linear-gradient(135deg, #c49a00, #f0cc5a)'
    : 'linear-gradient(135deg, #735c00, #d4af37)'

  return (
    <main
      className={`pt-16 md:pt-20 pb-nav min-h-screen ${isRTL ? 'font-ar' : 'font-body'}`}
      style={{ background: bgColor }}
    >
      {/* Bouton retour */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link
          to={backPath}
          style={{
            color: accentColor, fontSize: '14px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px',
            opacity: 0.8,
          }}
        >
          {backLabel}
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className={`flex flex-col md:flex-row gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>

          {/* ── Photo ── */}
          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
              {product.image ? (
                <img
                  src={product.image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: isCake ? '#fde8ed' : '#fdf3d0', fontSize: '8rem' }}
                >
                  {product.emoji || '🎂'}
                </div>
              )}
            </div>
          </div>

          {/* ── Infos ── */}
          <div className={`md:w-1/2 flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>

            {/* Badge catégorie */}
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
              style={{
                alignSelf: isRTL ? 'flex-end' : 'flex-start',
                background: isCake ? '#fde8ed' : '#fdf3d0',
                color: accentColor,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {isCake
                ? (isRTL ? 'كعكة' : 'Cake Design')
                : (isRTL ? 'حلوى مغربية' : 'Gâteau Marocain')}
            </span>

            {/* Nom */}
            <h1
              className={`leading-tight mb-4 ${isRTL ? 'font-ar' : ''}`}
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: '#221a0f',
              }}
            >
              {name}
            </h1>

            {/* Séparateur */}
            <div
              className="mb-6"
              style={{ width: '48px', height: '2px', background: accentColor, alignSelf: isRTL ? 'flex-end' : 'flex-start' }}
            />

            {/* Description */}
            <p
              className={`leading-relaxed mb-8 ${isRTL ? 'font-ar' : ''}`}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '15px',
                color: '#4d4635',
                lineHeight: '1.8',
              }}
            >
              {description || shortDesc}
            </p>

            {/* Bouton Commander */}
            <button
              onClick={handleCommander}
              className="flex items-center justify-center gap-3 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95"
              style={{
                background: btnGradient,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '14px',
                alignSelf: isRTL ? 'flex-end' : 'flex-start',
              }}
            >
              {/* WhatsApp icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.437 5.168L2 22l4.979-1.406A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.953 7.953 0 01-4.028-1.088l-.29-.172-2.955.834.837-2.873-.19-.297A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
              </svg>
              {isRTL ? 'اطلبوا عبر واتساب' : 'Commander sur WhatsApp'}
            </button>

            <p
              className={`mt-3 text-xs ${isRTL ? 'text-right font-ar' : 'text-left'}`}
              style={{ color: '#9ca3af', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {isRTL
                ? 'سيُرسَل اسم المنتج تلقائياً في رسالة واتساب'
                : 'Le nom du produit sera envoyé automatiquement sur WhatsApp'}
            </p>
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      <RelatedProducts product={product} lang={lang} isRTL={isRTL} isCake={isCake} accentColor={accentColor} />
    </main>
  )
}

function RelatedProducts({ product, lang, isRTL, isCake, accentColor }) {
  const allProducts = isCake ? cakes : gateauxMarocains
  const others = allProducts.filter(p => p.id !== product.id).slice(0, 4)
  if (!others.length) return null

  const WHATSAPP_NUMBER = '212673362925'

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2
        className={`mb-8 ${isRTL ? 'text-right font-ar' : 'text-left'}`}
        style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: '1.5rem', color: '#221a0f' }}
      >
        {isRTL
          ? (isCake ? 'كعك أخرى قد تعجبكم' : 'حلويات أخرى قد تعجبكم')
          : (isCake ? "D'autres cakes à découvrir" : "D'autres gâteaux à découvrir")
        }
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {others.map(p => {
          const name = p.name?.[lang] || p.name?.fr
          const route = isCake ? `/cake/${p.slug}` : `/gateau/${p.slug}`
          return (
            <Link key={p.id} to={route}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all block">
              <div className="aspect-square overflow-hidden">
                {p.image
                  ? <img src={p.image} alt={name} className="w-full h-full object-cover" />
                  : <div className="w-full h-full flex items-center justify-center text-4xl" style={{ background: '#fdf3d0' }}>{p.emoji}</div>
                }
              </div>
              <div className={`p-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '13px', fontWeight: 600, color: '#221a0f' }}>{name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}