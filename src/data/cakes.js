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
import mariageSimple      from '../assets/cakes/cakeDesign/mariageSimple.jpeg'
import pieceMontee3       from '../assets/cakes/cakeDesign/pieceMontee3.jpeg'

import tarteChocolat      from '../assets/cakes/tarteGlacee/chocolatNoire.jpeg'
import tarteFraise        from '../assets/cakes/tarteGlacee/fraise.jpeg'
import tarteFramboise     from '../assets/cakes/tarteGlacee/fromboise.jpeg'
import tarteVanille       from '../assets/cakes/tarteGlacee/vanille.jpeg'
import tarteViole         from '../assets/cakes/tarteGlacee/viole.jpeg'

export const cakesDesign = [
  { id: 'anniv',             slug: 'anniv',             image: anniv,             category: 'cakeDesign', name: { fr: 'Gâteau Anniversaire',       ar: 'كعكة عيد الميلاد' },        shortDesc: { fr: 'Élégant et festif pour célébrer',              ar: 'أنيق ومبهج للاحتفال' } },
  { id: 'annivFille',        slug: 'annivFille',        image: annivFille,        category: 'cakeDesign', name: { fr: 'Anniversaire Fille',         ar: 'عيد ميلاد بنت' },           shortDesc: { fr: 'Rose et pailleté pour les petites princesses', ar: 'وردي ومزخرف للأميرات' } },
  { id: 'annivFraise',       slug: 'annivFraise',       image: annivFraise,       category: 'cakeDesign', name: { fr: 'Anniversaire Fraise',        ar: 'عيد ميلاد بالفراولة' },     shortDesc: { fr: 'Fraises fraîches et crème légère',             ar: 'فراولة طازجة وكريمة خفيفة' } },
  { id: 'annivJaune',        slug: 'annivJaune',        image: annivJaune,        category: 'cakeDesign', name: { fr: 'Anniversaire Jaune',         ar: 'عيد ميلاد أصفر' },          shortDesc: { fr: 'Douceur dorée et ensoleillée',                  ar: 'حلاوة ذهبية ومشمسة' } },
  { id: 'annivRouge',        slug: 'annivRouge',        image: annivRouge,        category: 'cakeDesign', name: { fr: 'Anniversaire Rouge',         ar: 'عيد ميلاد أحمر' },          shortDesc: { fr: 'Rouge velours et passion',                      ar: 'مخمل أحمر وعاطفة' } },
  { id: 'annivSimple',       slug: 'annivSimple',       image: annivSimple,       category: 'cakeDesign', name: { fr: 'Anniversaire Simple',        ar: 'عيد ميلاد بسيط' },          shortDesc: { fr: 'Élégance dans la simplicité',                   ar: 'أناقة في البساطة' } },
  { id: 'cakeFranboise',     slug: 'cakeFranboise',     image: cakeFranboise,     category: 'cakeDesign', name: { fr: 'Cake Framboise',             ar: 'كعكة التوت' },               shortDesc: { fr: 'Framboise acidulée et ganache onctueuse',       ar: 'توت حامض وغاناش ناعم' } },
  { id: 'circoncision',      slug: 'circoncision',      image: circoncision,      category: 'cakeDesign', name: { fr: 'Gâteau Circoncision',        ar: 'كعكة الختان' },              shortDesc: { fr: 'Création spéciale pour cette belle occasion',   ar: 'إبداع خاص لهذه المناسبة' } },
  { id: 'coupeDuMonde',      slug: 'coupeDuMonde',      image: coupeDuMonde,      category: 'cakeDesign', name: { fr: 'Coupe du Monde',             ar: 'كأس العالم' },               shortDesc: { fr: 'Pour les passionnés de football',               ar: 'لعشاق كرة القدم' } },
  { id: 'doublePieceMontee', slug: 'doublePieceMontee', image: doublePieceMontee, category: 'cakeDesign', name: { fr: 'Double Pièce Montée',        ar: 'قطعة مزدوجة' },              shortDesc: { fr: 'Prestige pour vos grands jours',                ar: 'فخامة لأيامك الكبيرة' } },
  { id: 'girly',             slug: 'girly',             image: girly,             category: 'cakeDesign', name: { fr: 'Cake Girly',                 ar: 'كعكة بنات' },                shortDesc: { fr: 'Plein de paillettes et de féminité',            ar: 'مليء بالبريق والأنوثة' } },
  { id: 'graduation',        slug: 'graduation',        image: graduation,        category: 'cakeDesign', name: { fr: 'Graduation',                 ar: 'التخرج' },                   shortDesc: { fr: 'Félicitez votre diplômé avec style',            ar: 'هنئوا خريجكم بأسلوب راقٍ' } },
  { id: 'graduation1',       slug: 'graduation1',       image: graduation1,       category: 'cakeDesign', name: { fr: 'Graduation Élégance',        ar: 'تخرج أنيق' },                shortDesc: { fr: 'Une réussite mérite une belle célébration',    ar: 'النجاح يستحق احتفالاً جميلاً' } },
  { id: 'graduation2',       slug: 'graduation2',       image: graduation2,       category: 'cakeDesign', name: { fr: 'Graduation Prestige',        ar: 'تخرج فاخر' },                shortDesc: { fr: 'Design sophistiqué pour un grand moment',       ar: 'تصميم راقٍ للحظة عظيمة' } },
  { id: 'graduation3',       slug: 'graduation3',       image: graduation3,       category: 'cakeDesign', name: { fr: 'Graduation Floral',          ar: 'تخرج زهري' },                shortDesc: { fr: 'Fleurs délicates pour une cérémonie',           ar: 'زهور رقيقة لحفل لا يُنسى' } },
  { id: 'henne',             slug: 'henne',             image: henne,             category: 'cakeDesign', name: { fr: 'Gâteau Henné',               ar: 'كعكة الحناء' },              shortDesc: { fr: 'Motifs orientaux pour votre nuit de henné',    ar: 'نقوش شرقية لليلة حنائكم' } },
  { id: 'mariage1',          slug: 'mariage1',          image: mariage1,          category: 'cakeDesign', name: { fr: 'Pièce Montée Mariage',       ar: 'كعكة زفاف' },                shortDesc: { fr: 'Le symbole de votre union',                     ar: 'رمز اتحادكم' } },
  { id: 'mariage2',          slug: 'mariage2',          image: mariage2,          category: 'cakeDesign', name: { fr: 'Mariage Romantique',         ar: 'زفاف رومانسي' },             shortDesc: { fr: 'Romantisme et élégance réunis',                 ar: 'رومانسية وأناقة في آنٍ واحد' } },
  { id: 'mariage3',          slug: 'mariage3',          image: mariage3,          category: 'cakeDesign', name: { fr: 'Mariage Floral',             ar: 'زفاف زهري' },                shortDesc: { fr: 'Fleurs en sucre pour votre grand jour',         ar: 'زهور السكر ليومك الكبير' } },
  { id: 'mariage4',          slug: 'mariage4',          image: mariage4,          category: 'cakeDesign', name: { fr: 'Mariage Doré',               ar: 'زفاف ذهبي' },                shortDesc: { fr: "Feuilles d'or pour un mariage prestige",       ar: 'أوراق الذهب لزفاف فاخر' } },
  { id: 'mariage5',          slug: 'mariage5',          image: mariage5,          category: 'cakeDesign', name: { fr: 'Mariage Blanc',              ar: 'زفاف أبيض' },                shortDesc: { fr: 'Pureté et élégance intemporelle',               ar: 'نقاء وأناقة خالدة' } },
  { id: 'mariage6',          slug: 'mariage6',          image: mariage6,          category: 'cakeDesign', name: { fr: 'Mariage Moderne',            ar: 'زفاف عصري' },                shortDesc: { fr: 'Design contemporain pour un couple tendance',   ar: 'تصميم عصري لثنائي متميز' } },
  { id: 'mariage7',          slug: 'mariage7',          image: mariage7,          category: 'cakeDesign', name: { fr: 'Mariage Bohème',             ar: 'زفاف بوهيمي' },              shortDesc: { fr: 'Esprit libre et naturel pour votre union',     ar: 'روح حرة وطبيعية لزفافكم' } },
  { id: 'mariage8',          slug: 'mariage8',          image: mariage8,          category: 'cakeDesign', name: { fr: 'Mariage Royal',              ar: 'زفاف ملكي' },                shortDesc: { fr: 'Majesté et grandeur pour votre jour J',        ar: 'عظمة وجلالة ليوم زفافكم' } },
  { id: 'mariage9',          slug: 'mariage9',          image: mariage9,          category: 'cakeDesign', name: { fr: 'Mariage Raffiné',            ar: 'زفاف راقٍ' },                shortDesc: { fr: 'Raffinement absolu pour un moment unique',     ar: 'رقي مطلق للحظة فريدة' } },
  { id: 'mariage10',         slug: 'mariage10',         image: mariage10,         category: 'cakeDesign', name: { fr: 'Mariage Luxe',               ar: 'زفاف فاخر' },                shortDesc: { fr: 'Le summum du luxe pâtissier',                   ar: 'قمة الفخامة في الحلويات' } },
  { id: 'mariageSimple',     slug: 'mariageSimple',     image: mariageSimple,     category: 'cakeDesign', name: { fr: 'Mariage Simple & Chic',      ar: 'زفاف بسيط وأنيق' },          shortDesc: { fr: 'La beauté dans la sobriété',                    ar: 'الجمال في التقشف' } },
  { id: 'pieceMontee3',      slug: 'pieceMontee3',      image: pieceMontee3,      category: 'cakeDesign', name: { fr: 'Pièce Montée 3 Étages',      ar: 'كعكة ثلاثة طوابق' },         shortDesc: { fr: 'Trois étages de pur bonheur',                   ar: 'ثلاثة طوابق من السعادة الخالصة' } },
]

export const tartesGlacees = [
  { id: 'tarte-chocolat',  slug: 'tarte-chocolat',  image: tarteChocolat,  category: 'tarteGlacee', name: { fr: 'Tarte Glacée Chocolat',  ar: 'تارت الشوكولاتة المثلجة' }, shortDesc: { fr: 'Intense et fondante, chocolat grand cru',      ar: 'كثيفة وذائبة، شوكولاتة فاخرة' } },
  { id: 'tarte-fraise',    slug: 'tarte-fraise',    image: tarteFraise,    category: 'tarteGlacee', name: { fr: 'Tarte Glacée Fraise',    ar: 'تارت الفراولة المثلجة' },   shortDesc: { fr: 'Fraises fraîches sur crème glacée vanille',    ar: 'فراولة طازجة فوق آيس كريم فانيليا' } },
  { id: 'tarte-framboise', slug: 'tarte-framboise', image: tarteFramboise, category: 'tarteGlacee', name: { fr: 'Tarte Glacée Framboise', ar: 'تارت التوت المثلج' },       shortDesc: { fr: 'Framboise acidulée et sorbet délicat',         ar: 'توت حامض وسوربيه رقيق' } },
  { id: 'tarte-vanille',   slug: 'tarte-vanille',   image: tarteVanille,   category: 'tarteGlacee', name: { fr: 'Tarte Glacée Vanille',   ar: 'تارت الفانيليا المثلجة' },  shortDesc: { fr: 'Vanille de Madagascar et caramel beurre salé', ar: 'فانيليا مدغشقرية وكراميل مملح' } },
  { id: 'tarte-viole',     slug: 'tarte-viole',     image: tarteViole,     category: 'tarteGlacee', name: { fr: 'Tarte Glacée Violette',  ar: 'تارت البنفسجية المثلجة' },  shortDesc: { fr: 'Fleur de violette et sorbet délicat',          ar: 'زهرة البنفسج وسوربيه رقيق' } },
]

export const cakes = [...cakesDesign, ...tartesGlacees]