// src/data/gateaux.js
// Photos dans :
//   src/assets/gateaux/marocain/
//   src/assets/gateaux/macarons/

// ── Pâtisseries Marocaines ────────────────────────────────────
import amond        from '../assets/gateaux/marocain/amond.jpeg'
import concasse     from '../assets/gateaux/marocain/concasse.jpeg'
import fakas        from '../assets/gateaux/marocain/fakas.jpeg'
import financier    from '../assets/gateaux/marocain/financier.jpeg'
import fleur        from '../assets/gateaux/marocain/fleur.jpeg'
import fruit        from '../assets/gateaux/marocain/fruit.jpeg'
import gourmandises from '../assets/gateaux/marocain/gourmandises.jpeg'
import kaeba        from '../assets/gateaux/marocain/kaeba.jpeg'
import maalka       from '../assets/gateaux/marocain/maalka.jpeg'
import nouga        from '../assets/gateaux/marocain/nouga.jpeg'
import plateau      from '../assets/gateaux/marocain/plateau.jpeg'

// ── Macarons ──────────────────────────────────────────────────
import macBlueberry  from '../assets/gateaux/macarons/Blueberry.jpg'
import macChocolat   from '../assets/gateaux/macarons/chocolat.jpg'
import macCitron     from '../assets/gateaux/macarons/citron.jpg'
import macCoucou     from '../assets/gateaux/macarons/coucou.jpg'
import macFraise     from '../assets/gateaux/macarons/fraise.jpg'
import macFramboise  from '../assets/gateaux/macarons/framboise.jpg'
import macPistache   from '../assets/gateaux/macarons/pistache.jpg'
import macVanille    from '../assets/gateaux/macarons/vanille.jpg'

// ─────────────────────────────────────────────────────────────
export const gateauxMarocains = [
  { id: 'maalka',       slug: 'maalka',       image: maalka,       category: 'gateau', name: { fr: 'Maâlka',                     ar: 'معلكة' },                  shortDesc: { fr: 'Ghriyba fondante aux cacahuète',               ar: 'غريبة معلكة بالكاوكاو' }},
  { id: 'concasse',     slug: 'concasse',     image: concasse,     category: 'gateau', name: { fr: 'Nougat aux amandes concassées',                    ar: 'نوغا باللوز كونكاسيه' },               shortDesc: { fr: 'Amandes concassées et miel doré',               ar: 'لوز وعسل ذهبي' } },
  { id: 'fakas',        slug: 'fakas',        image: fakas,        category: 'gateau', name: { fr: 'Fakkas',                      ar: 'فقاس' },                   shortDesc: { fr: 'Fakkas croquants aux noix',         ar: 'فقاص مقرمش بالجوز' }},
  { id: 'financier',    slug: 'financier',    image: financier,    category: 'gateau', name: { fr: 'Financier préstige',                   ar: 'فينانسيي بريستيج' },               shortDesc: { fr: 'Aux amandes concassées et éffilées',         ar: 'باللوز كوكسيه و ايفيلي' }},
  { id: 'fleur',        slug: 'fleur',        image: fleur,        category: 'gateau', name: { fr: 'Gâteau Fleur Aux Amandes ',                ar: 'حلوى الوردة باللوز' },            shortDesc: { fr: 'Délicat, parfumé à la fleur d\'oranger',     ar:' بعطر ماء الزهر' } },
  { id: 'fruit',        slug: 'fruit',        image: fruit,        category: 'gateau', name: { fr: 'Gâteau aux Fruits',           ar: 'حلوى الفواكه' },           shortDesc: { fr: 'Fruits confits et amandes',                  ar: 'فواكه مسكرة ولوز' } },
  { id: 'gourmandises', slug: 'gourmandises', image: gourmandises, category: 'gateau', name: { fr: 'Plateau Gourmandises',        ar: 'حلويات متنوعة' },         shortDesc: { fr: 'Assortiment de douceurs marocaines',        ar: 'تشكيلة من الحلويات المغربية' }},
  { id: 'kaeba',        slug: 'kaeba',        image: kaeba,        category: 'gateau', name: { fr: 'Kaâb el Ghzal',              ar: 'كعب الغزال' },             shortDesc: { fr: 'Corne de gazelle, amande & fleur d\'oranger', ar: 'لوز وماء الزهر'           }    },
  { id: 'amond',        slug: 'amond',        image: amond,        category: 'gateau', name: { fr: 'Gâteau aux Amandes',          ar: 'حلوى اللوز' },            shortDesc: { fr: 'Aux amandes grillées',              ar: ' باللوز المحمص' }           },
  { id: 'nouga',        slug: 'nouga',        image: nouga,        category: 'gateau', name: { fr: 'Nougat Préstige',            ar: 'نوغا بريستيج' },             shortDesc: { fr: 'Fondant miel, chocolat et fruits secs',               ar: 'ذائب بالعسل الشكلاطة والمكسرات' }},
  { id: 'plateau',      slug: 'plateau',      image: plateau,      category: 'gateau', name: { fr: 'Plateau Marocain',           ar: 'حلويات مغربية' },            shortDesc: { fr: 'Sélection de pâtisseries marocaines',       ar: 'تشكيلة من الحلويات المغربية' } },
]

export const macarons = [
  { id: 'mac-blueberry', slug: 'mac-blueberry', image: macBlueberry, category: 'macaron', name: { fr: 'Macaron Myrtille',   ar: 'ماكارون التوت الأزرق' }, shortDesc: { fr: 'Myrtilles fraîches et ganache veloutée',   ar: 'توت أزرق طازج وغاناش مخملي' }   },
  { id: 'mac-coucou',    slug: 'mac-coucou',    image: macCoucou,    category: 'macaron', name: { fr: 'Macaron Coucou',     ar: 'ماكارون كوكو' },           shortDesc: { fr: 'Noix de coco et ganache légère',            ar: 'جوز هند وغاناش خفيف' }           },
  { id: 'mac-citron',    slug: 'mac-citron',    image: macCitron,    category: 'macaron', name: { fr: 'Macaron Citron',     ar: 'ماكارون الليمون' },        shortDesc: { fr: 'Crème de citron rafraîchissante',              ar: 'كريمة الليمون المنعش' } },
  { id: 'mac-chocolat',  slug: 'mac-chocolat',  image: macChocolat,  category: 'macaron', name: { fr: 'Macaron Chocolat',   ar: 'ماكارون الشوكولاتة' },    shortDesc: { fr: 'Ganache intense au chocolat noir',          ar: 'غاناش كثيف بالشوكولاتة الداكنة' }, },
  { id: 'mac-fraise',    slug: 'mac-fraise',    image: macFraise,    category: 'macaron', name: { fr: 'Macaron Fraise',     ar: 'ماكارون الفراولة' },       shortDesc: { fr: 'Fraises fraîches et crème légère',          ar: 'فراولة طازجة وكريمة خفيفة' }    },
  { id: 'mac-pistache',  slug: 'mac-pistache',  image: macPistache,  category: 'macaron', name: { fr: 'Macaron Pistache',   ar: 'ماكارون الفستق' },         shortDesc: { fr: 'Pistache et crème onctueuse',     ar: 'فستق  وكريمة ناعمة' }   },
  { id: 'mac-framboise', slug: 'mac-framboise', image: macFramboise, category: 'macaron', name: { fr: 'Macaron Framboise',  ar: 'ماكارون التوت' },          shortDesc: { fr: 'Framboise rouge et ganache rose',        ar: 'توت احمر وغاناش وردي' }         },
  { id: 'mac-vanille',   slug: 'mac-vanille',   image: macVanille,   category: 'macaron', name: { fr: 'Macaron Vanille',    ar: 'ماكارون الفانيليا' },      shortDesc: { fr: 'Vanille, ganache légère',    ar: 'فانيليا ، غاناش خفيف' } },
]

// Legacy export
export const gateaux = [...gateauxMarocains]