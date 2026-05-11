// src/data/cakes.js

import anniv              from '../assets/cakes/cakeDesign/anniv.jpeg'
import annivFille         from '../assets/cakes/cakeDesign/annivFille.jpeg'
import annivFraise        from '../assets/cakes/cakeDesign/annivFraise.jpeg'
import annivJaune         from '../assets/cakes/cakeDesign/annivJaune.jpeg'
import annivRouge         from '../assets/cakes/cakeDesign/annivRouge.jpeg'
import annivSimple        from '../assets/cakes/cakeDesign/annivSimple.jpeg'
import cakeFranboise      from '../assets/cakes/cakeDesign/cakeFranboise.jpeg'
import circoncision       from '../assets/cakes/cakeDesign/circoncision.jpeg'
import coupeDuMonde       from '../assets/cakes/cakeDesign/coupeDuMonde.jpeg'
import doublePieceMontee  from '../assets/cakes/cakeDesign/doublePieceMontee.jpeg'
import girly              from '../assets/cakes/cakeDesign/girly.jpeg'
import graduation         from '../assets/cakes/cakeDesign/graduation.jpeg'
import graduation1        from '../assets/cakes/cakeDesign/graduation1.jpeg'
import graduation2        from '../assets/cakes/cakeDesign/graduation2.jpeg'
import graduation3        from '../assets/cakes/cakeDesign/graduation3.jpeg'
import henne              from '../assets/cakes/cakeDesign/henne.jpeg'
import mariage1           from '../assets/cakes/cakeDesign/mariage1.jpeg'
import mariage2           from '../assets/cakes/cakeDesign/mariage2.jpeg'
import mariage3           from '../assets/cakes/cakeDesign/mariage3.jpeg'
import mariage4           from '../assets/cakes/cakeDesign/mariage4.jpeg'
import mariage5           from '../assets/cakes/cakeDesign/mariage5.jpeg'
import mariage6           from '../assets/cakes/cakeDesign/mariage6.jpeg'
import mariage7           from '../assets/cakes/cakeDesign/mariage7.jpeg'
import mariage8           from '../assets/cakes/cakeDesign/mariage8.jpeg'
import mariage9           from '../assets/cakes/cakeDesign/mariage9.jpeg'
import mariage10          from '../assets/cakes/cakeDesign/mariage10.jpeg'

import pieceMontee3       from '../assets/cakes/cakeDesign/pieceMontee3.jpeg'

import tarteChocolat      from '../assets/cakes/tarteGlacee/chocolatNoire.jpeg'
import tarteFraise        from '../assets/cakes/tarteGlacee/fraise.jpeg'
import tarteFramboise     from '../assets/cakes/tarteGlacee/fromboise.jpeg'
import tarteVanille       from '../assets/cakes/tarteGlacee/vanille.jpeg'
import tarteViole         from '../assets/cakes/tarteGlacee/viole.jpeg'
import tartefraise2        from '../assets/cakes/tarteGlacee/fraise2.jpeg'
import opera     from '../assets/cakes/tarteGlacee/opera.jpeg'
import tiramissoCaffe       from '../assets/cakes/tarteGlacee/tiramissoCaffe.jpeg'

export const cakesDesign = [
  { id: 'anniv',             slug: 'anniv',             image: anniv,             category: 'cakeDesign', name: { fr: 'Tarte au crème diplomate',       ar: 'تارت بالكريم الدبلوماطي' },        shortDesc: { fr: 'Élégant et festif pour célébrer',              ar: 'أنيق ومبهج للاحتفال' } },
  { id: 'annivFille',        slug: 'annivFille',        image: annivFille,        category: 'cakeDesign', name: { fr: 'Cake d`anniversaire Fille Mini Mouse',         ar: 'كيك العيد ميلاد بنات ' },           shortDesc: { fr: 'Rose et pailleté pour les petites princesses', ar: 'وردي ومزخرف للأميرات' } },
  { id: 'annivFraise',       slug: 'annivFraise',       image: annivFraise,       category: 'cakeDesign', name: { fr: 'Cake italian en fraise',        ar: 'كيك  ايطالي بالفراولة' },     shortDesc: { fr: 'Fraises fraîches et crème légère',             ar: 'فراولة طازجة وكريمة خفيفة' } },
  { id: 'annivJaune',        slug: 'annivJaune',        image: annivJaune,        category: 'cakeDesign', name: { fr: 'Vintage Cake Jaune',         ar: 'كيك فينتاج اصفر ' },          shortDesc: { fr: 'Douceur dorée et ensoleillée',                  ar: 'تحلية ذهبية ناعمة' } },
  { id: 'annivRouge',        slug: 'annivRouge',        image: annivRouge,        category: 'cakeDesign', name: { fr: 'Burgundy Cake d`anniversaire',         ar: ' كيك بورغاندي لعيد الميلاد  ' },          shortDesc: { fr: 'Élégance et raffinement à la fois',                      ar: 'رقي و اناقة في ان واحد' } },
  { id: 'annivSimple',       slug: 'annivSimple',       image: annivSimple,       category: 'cakeDesign', name: { fr: 'Vintage Cake d`anniversaire',        ar: 'كيك فينتاج لعيد الميلاد' },          shortDesc: { fr: 'Élégance dans la simplicité',                   ar: 'أناقة في البساطة' } },
  { id: 'cakeFranboise',     slug: 'cakeFranboise',     image: cakeFranboise,     category: 'cakeDesign', name: { fr: 'Cake italian avec les fruits rouges',             ar: 'كيك  ايطالي بالفواكه الحمراء ' },               shortDesc: { fr: 'Framboise acidulée et ganache onctueuse',       ar: 'توت وغاناش ناعم' } },
  { id: 'circoncision',      slug: 'circoncision',      image: circoncision,      category: 'cakeDesign', name: { fr: 'Gâteau Circoncision',        ar: 'كعكة الختان' },              shortDesc: { fr: 'Création spéciale pour cette belle occasion',   ar: 'إبداع خاص لهذه المناسبة' } },
  { id: 'coupeDuMonde',      slug: 'coupeDuMonde',      image: coupeDuMonde,      category: 'cakeDesign', name: { fr: 'Gâteau pour les passionnés de football',             ar: 'كعكة لعشاق كرة القدم' },               shortDesc: { fr: 'Design sportif distinctif',               ar: 'تصميم رياضي مميز' } },
  { id: 'doublePieceMontee', slug: 'doublePieceMontee', image: doublePieceMontee, category: 'cakeDesign', name: { fr: 'Double Pièce Montée',       ar: 'قطعة مزدوجة' },              shortDesc: { fr: 'Prestige pour vos grands jours',                ar: 'فخامة لأيامك الكبيرة' } },
  { id: 'girly',             slug: 'girly',             image: girly,             category: 'cakeDesign', name: { fr: 'Roses Cake',                 ar: 'كيك بنات' },                shortDesc: { fr: 'Plein de paillettes et de féminité',            ar: 'مليء بالبريق والأنوثة' } },
  { id: 'graduation',        slug: 'graduation',        image: graduation,        category: 'cakeDesign', name: { fr: 'Graduation Cake',                 ar: 'كيك التخرج' },                   shortDesc: { fr: 'Félicitez votre diplômé avec élégance',            ar: 'هنئوا خريجكم بأسلوب راقٍ' } },
  { id: 'graduation1',       slug: 'graduation1',       image: graduation1,       category: 'cakeDesign', name: { fr: 'Cake de Graduation Élégant',        ar: 'كيك تخرج أنيق' },                shortDesc: { fr: 'Une réussite mérite une belle célébration',    ar: 'النجاح يستحق احتفالاً جميلاً' } },
  { id: 'graduation2',       slug: 'graduation2',       image: graduation2,       category: 'cakeDesign', name: { fr: 'Cake selon votre spécialité',        ar: 'كيك تخرج حسب تخصصكم ' },                shortDesc: { fr: 'Un design raffiné pour un grand moment',       ar: 'تصميم راقٍ للحظة عظيمة' } },
  { id: 'graduation3',       slug: 'graduation3',       image: graduation3,       category: 'cakeDesign', name: { fr: 'cake de Graduation Simple',          ar: 'كيك تخرج بسيط' },                shortDesc: { fr: 'Pour une cérémonie inoubliable ',           ar: ' لحفل لا يُنسى' } },
  { id: 'henne',             slug: 'henne',             image: henne,             category: 'cakeDesign', name: { fr: 'Gâteau Henné',               ar: 'كيك ليوم الحناء' },              shortDesc: { fr: 'Il ajoute une touche de joie aux plus beaux moments',    ar: 'يضيف لمسة فرح لأجمل اللحظات' } },
  { id: 'mariage1',          slug: 'mariage1',          image: mariage1,          category: 'cakeDesign', name: { fr: 'Pièce Montée Mariage',       ar: 'كيك فينتاج للزفاف' },                shortDesc: { fr: 'Élégance dans la simplicité',                     ar: 'لزفاف رومانسي و بسيط' } },
  { id: 'mariage2',          slug: 'mariage2',          image: mariage2,          category: 'cakeDesign', name: { fr: 'Vintage Cake Mariage ',         ar:'كيك فينتاج  لعقد القران ' },             shortDesc: { fr: 'Romantique et élégant ',                 ar:' لزفاف رومانسي و بسيط' } },
  { id: 'mariage3',          slug: 'mariage3',          image: mariage3,          category: 'cakeDesign', name: { fr: 'Cake Mariage Blanc',             ar:'كعك زفاف أبيض' },                shortDesc: { fr: 'Pureté et élégance intemporelle',         ar: 'نقاء وأناقة خالدة' } },
  { id: 'mariage4',          slug: 'mariage4',          image: mariage4,          category: 'cakeDesign', name: { fr: 'Pièce montée à 2 étages',               ar: 'كعكة مكونة من طابقين' },                shortDesc: { fr: "Deux étages de douceur et d’élégance",       ar: 'طابقان من النعومة والأناقة' } },
  { id: 'mariage5',          slug: 'mariage5',          image: mariage5,          category: 'cakeDesign', name: { fr: 'Wedding Cake Élégant',              ar: 'كعكة زفاف أنيقة' },                shortDesc: { fr: 'Une touche d’élégance pour célébrer l’amour',               ar: 'لمسة من الأناقة للاحتفال بالحب' } },
  { id: 'mariage6',          slug: 'mariage6',          image: mariage6,          category: 'cakeDesign', name: { fr: 'Gâteau de mariage moderne',            ar: 'كعكة زفاف عصرية' },                shortDesc: { fr: 'Élégance et goût raffiné dans chaque détail',   ar: 'أناقة وذوق رفيع في كل تفصيلة' } },
  { id: 'mariage7',          slug: 'mariage7',          image: mariage7,          category: 'cakeDesign', name: { fr: 'Wedding cake délicat',             ar: 'كيك زفاف ناعم' },              shortDesc: { fr: 'Le charme de la simplicité',     ar: 'جمال البساطة في أبهى صورة' } },
  { id: 'mariage8',          slug: 'mariage8',          image: mariage8,          category: 'cakeDesign', name: { fr: 'Cake romantique',              ar: 'كيك زفاف رومانسي' },                shortDesc: { fr: 'Créée pour rendre votre journée encore plus magique',        ar: 'لمسة سحرية ليوم لا يُنسى' } },
  { id: 'mariage9',          slug: 'mariage9',          image: mariage9,          category: 'cakeDesign', name: { fr: 'Cake Mariage Raffiné',            ar: 'كعك لزفاف راقٍ' },                shortDesc: { fr: 'Raffinement absolu pour un moment unique',     ar: 'رقي مطلق للحظة فريدة' } },
  { id: 'mariage10',         slug: 'mariage10',         image: mariage10,         category: 'cakeDesign', name: { fr: 'Cake Mariage Luxe',               ar: 'كعك لزفاف فاخر' },                shortDesc: { fr: 'Le summum du luxe pâtissier',                   ar: 'قمة الفخامة في الحلويات' } },
  
  { id: 'pieceMontee3',      slug: 'pieceMontee3',      image: pieceMontee3,      category: 'cakeDesign', name: { fr: 'Pièce Montée 3 Étages',      ar: 'كعكة ثلاثة طوابق' },         shortDesc: { fr: 'Un vrai plaisir à chaque étage',                   ar:'متعة حقيقية في كل طابق' } },
]

export const tartesGlacees = [
  { id: 'tarte-chocolat',  slug: 'tarte-chocolat',  image: tarteChocolat,  category: 'tarteGlacee', name: { fr: 'Tarte Glacée au Chocolat',  ar: 'تارت الشوكولاتة الباردة' }, shortDesc: { fr: 'Chocolat de luxe, dense et fondant',      ar: ' شوكولاتة فاخرة، كثيفة وذائبة ' } },
  { id: 'tarte-fraise',    slug: 'tarte-fraise',    image: tarteFraise,    category: 'tarteGlacee', name: { fr: 'Tarte Glacée au Fraise',    ar: 'تارت الفراولة الباردة' },   shortDesc: { fr: 'Fraises fraîches et vanille',    ar: 'فراولة طازجة و فانيليا' } },
  { id: 'tarte-framboise', slug: 'tarte-framboise', image: tarteFramboise, category: 'tarteGlacee', name: { fr: 'Tarte Glacée au Framboise', ar: 'تارت التوت الاحمر الباردة' },       shortDesc: { fr: 'Framboise acidulée et sorbet délicat',         ar: 'توت وسوربيه رقيق' } },
  { id: 'tarte-vanille',   slug: 'tarte-vanille',   image: tarteVanille,   category: 'tarteGlacee', name: { fr: 'Tarte Glacée au Vanille',   ar: 'تارت الفانيليا الباردة' },  shortDesc: { fr: 'Vanille et caramel ', ar: 'فانيليا وكراميل' } },
  { id: 'tarte-viole',     slug: 'tarte-viole',     image: tarteViole,     category: 'tarteGlacee', name: { fr: 'Tarte Glacée au Myrtille ',  ar: 'تارت التوت الارزرق الباردة' },  shortDesc: { fr: 'Fleurs violet et sorbet délicat',          ar: 'زهور بنفسجية وسوربيه رقيق' } },
  { id: 'opera',   slug: 'opera',   image: opera,   category: 'tarteGlacee', name: { fr: 'Opera Française',   ar: 'احلى اوبيرا فرنسية' },  shortDesc: { fr: 'Chocolat et caramel ', ar: ' شكلاطة وكراميل' } },
  { id: 'tartefraise2', slug: 'tartefraise2', image: tartefraise2, category: 'tarteGlacee', name: { fr: 'Tarte Glacée au Fraise', ar:'تارت الفراولة ' },       shortDesc: { fr: 'Fraises fraîches',         ar: 'فراولة طازجة' } },
  { id: 'tiramissoCaffe',     slug: 'tiramissoCaffe',     image: tiramissoCaffe,     category: 'tarteGlacee', name: { fr: 'Tiramisso Caffée ',  ar: 'تيراميسو ' },  shortDesc: { fr: 'pour les amateurs de café',          ar: 'لعشاق القهوة' } },
]

export const cakes = [...cakesDesign, ...tartesGlacees]