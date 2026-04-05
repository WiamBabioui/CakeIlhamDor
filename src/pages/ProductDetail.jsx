import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cakes } from '../data/cakes'
import { gateaux } from '../data/gateaux'
import WhatsAppButton from '../components/WhatsAppButton'

export default function ProductDetail({ lang }) {
  const { slug, type } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isRTL = lang === 'ar'

  // Trouver le produit selon le type (cake ou gateau)
  const allProducts = type === 'cake' ? cakes : gateaux
  const product = allProducts.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Produit introuvable</p>
          <button onClick={() => navigate(-1)} className="text-gold-deep underline">
            ← Retour
          </button>
        </div>
      </div>
    )
  }

  const name        = product.name?.[lang]        || product.name?.fr
  const description = product.description?.[lang] || product.description?.fr
  const isCake      = product.category === 'cake'
  const backPath    = isCake ? '/cakes' : '/gateaux'
  const backLabel   = isCake ? t('product.back_cakes') : t('product.back_gateaux')

  const bgClass   = isCake
    ? 'bg-gradient-to-br from-rose-pastel to-rose-light'
    : 'bg-gradient-to-br from-gold-light to-sand-light'
  const accent    = isCake ? 'text-rose-deep' : 'text-gold-deep'
  const accentBg  = isCake ? 'bg-rose-pastel' : 'bg-gold-light'
  const btnColor  = isCake ? 'border-rose-mid text-rose-deep hover:bg-rose-pastel' : 'border-gold-mid text-gold-deep hover:bg-gold-light'

  return (
    <main className={`pt-14 md:pt-16 pb-nav min-h-screen bg-cream ${isRTL ? 'font-ar' : ''}`}>

      {/* Retour */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link
          to={backPath}
          className={`inline-flex items-center gap-2 text-sm text-gray-400 hover:${accent} transition-colors`}
        >
          {backLabel}
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className={`flex flex-col md:flex-row gap-10 ${isRTL ? 'md:flex-row-reverse' : ''}`}>

          {/* ── Image ── */}
          <div className="md:w-1/2">
            <div className={`img-zoom-wrap rounded-3xl overflow-hidden aspect-square ${bgClass} flex items-center justify-center`}>
              {product.image ? (
                <img
                  src={product.image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-9xl select-none">{product.emoji || '🎂'}</span>
              )}
            </div>
          </div>

          {/* ── Infos ── */}
          <div className={`md:w-1/2 flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Badge catégorie */}
            <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${accentBg} ${accent} self-start ${isRTL ? 'self-end' : 'self-start'}`}>
              {isCake
                ? (isRTL ? 'كيك' : 'Cake')
                : (isRTL ? 'حلوى مغربية' : 'Gâteau Marocain')
              }
            </span>

            {/* Nom */}
            <h1 className={`font-display text-4xl md:text-5xl font-light text-gray-800 leading-tight mb-4 ${isRTL ? 'font-ar' : ''}`}>
              {name}
            </h1>

            {/* Prix */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-gray-400">{t('product.price')}</span>
              <span className={`text-2xl font-bold ${accent}`}>{product.prix}</span>
            </div>

            {/* Séparateur */}
            <div className={`w-12 h-0.5 mb-6 ${isCake ? 'bg-rose-mid' : 'bg-gold-mid'} ${isRTL ? 'self-end' : 'self-start'}`} />

            {/* Description longue */}
            <p className={`text-gray-600 leading-relaxed text-base mb-8 ${isRTL ? 'font-ar' : ''}`}>
              {description}
            </p>

            {/* Bouton Commander */}
            <WhatsAppButton
              productName={name}
              prix={product.prix}
              lang={lang}
              className="w-full md:w-auto"
            />

            {/* Note */}
            <p className={`text-xs text-gray-400 mt-3 ${isRTL ? 'font-ar text-right' : 'text-left'}`}>
              {isRTL
                ? 'سيُرسَل اسم المنتج والسعر تلقائياً في رسالة واتساب'
                : 'Le nom du produit et le prix seront envoyés automatiquement sur WhatsApp'
              }
            </p>
          </div>
        </div>
      </div>

      {/* ── Autres produits de la même catégorie ── */}
      <RelatedProducts
        current={product}
        allProducts={allProducts}
        lang={lang}
        isRTL={isRTL}
        isCake={isCake}
      />
    </main>
  )
}

// ── Produits similaires ──────────────────────────────────────
import ProductCard from '../components/ProductCard'

function RelatedProducts({ current, allProducts, lang, isRTL, isCake }) {
  const others = allProducts.filter(p => p.id !== current.id).slice(0, 3)
  if (!others.length) return null

  return (
    <section className={`max-w-5xl mx-auto px-6 py-12 ${isRTL ? 'text-right font-ar' : ''}`}>
      <h2 className="font-display text-2xl font-light text-gray-700 mb-8">
        {isRTL
          ? (isCake ? 'كيك آخر قد يعجبك' : 'حلويات أخرى قد تعجبك')
          : (isCake ? 'D\'autres cakes à découvrir' : 'D\'autres gâteaux à découvrir')
        }
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {others.map((p, i) => (
          <ProductCard key={p.id} product={p} lang={lang} index={i} />
        ))}
      </div>
    </section>
  )
}
