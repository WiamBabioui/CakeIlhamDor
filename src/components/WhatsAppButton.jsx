// ─────────────────────────────────────────────────────────────
//  WhatsAppButton
//  Remplacez VOTRE_NUMERO par votre vrai numéro WhatsApp
//  Format international sans + ni espaces : ex 212612345678
// ─────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '+212 673-362925' // ← CHANGEZ ICI

export default function WhatsAppButton({ productName, prix, lang, className = '' }) {
  const isRTL = lang === 'ar'

  const message = isRTL
    ? `مرحباً، أريد طلب: ${productName} — ${prix}`
    : `Bonjour, je voudrais commander : ${productName} — ${prix}`

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-green-500 text-white font-semibold py-3.5 px-7 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-300/30 ${className}`}
    >
      {/* WhatsApp SVG icon */}
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.437 5.168L2 22l4.979-1.406A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.953 7.953 0 01-4.028-1.088l-.29-.172-2.955.834.837-2.873-.19-.297A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
      </svg>
      <span className={isRTL ? 'font-ar' : ''}>
        {isRTL ? 'اطلب عبر واتساب' : 'Commander sur WhatsApp'}
      </span>
    </a>
  )
}

// ─── Bouton flottant WhatsApp (affiché sur toutes les pages) ───
export function FloatingWhatsApp({ lang }) {
  const isRTL = lang === 'ar'
  const message = isRTL
    ? 'مرحباً، أريد الاستفسار عن طلب'
    : 'Bonjour, je voudrais passer une commande'
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 w-14 h-14 bg-whatsapp hover:bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-400/30 transition-all hover:scale-110"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.437 5.168L2 22l4.979-1.406A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.953 7.953 0 01-4.028-1.088l-.29-.172-2.955.834.837-2.873-.19-.297A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
      </svg>
    </a>
  )
}
