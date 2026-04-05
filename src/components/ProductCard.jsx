import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '212600000000'

export default function ProductCard({ product, lang, index = 0 }) {
  const isRTL  = lang === 'ar'
  const isCake = product.category === 'cake'
  const name   = product.name?.[lang] || product.name?.fr
  const route  = `/${product.category}/${product.slug}`

  const handleCommander = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const msg = isRTL
      ? `مرحباً، أريد طلب: ${name}`
      : `Bonjour, je voudrais commander : ${name}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <Link to={route} className="block relative overflow-hidden cursor-pointer">
        <span className="absolute top-3 left-3 z-10 bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
          {isRTL ? 'جديد' : 'Nouveau'}
        </span>
        <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
          {product.image ? (
            <img src={product.image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${isCake ? 'bg-pink-50' : 'bg-amber-50'}`}>
              <span className="text-7xl select-none">{product.emoji || '🎂'}</span>
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-col flex-1 p-4">
        <p className="text-center text-gray-400 text-xs tracking-widest uppercase mb-2 font-medium">
          Ilham D'Or
        </p>
        <Link to={route}>
          <h3 className={`text-gray-800 font-bold text-sm leading-snug mb-4 hover:text-pink-500 transition-colors ${isRTL ? 'text-right font-ar' : 'text-left'}`}>
            {name}
          </h3>
        </Link>
        <div className="flex-1" />
        <button
          onClick={handleCommander}
          className="w-full flex items-center justify-center gap-2 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className={isRTL ? 'font-ar' : ''}>
            {isRTL ? 'اطلبي الآن' : 'Commander'}
          </span>
        </button>
      </div>
    </div>
  )
}
