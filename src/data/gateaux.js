// ─────────────────────────────────────────────────────────────
//  GÂTEAUX MAROCAINS — Ajoutez vos produits ici
//
//  Pour chaque gâteau :
//    1. Mettez la photo dans :  src/assets/gateaux/
//    2. Remplissez les champs ci-dessous
// ─────────────────────────────────────────────────────────────

export const gateaux = [
  {
    id: 'chebakia',
    slug: 'chebakia',
    // 📸 Mettez votre photo dans src/assets/gateaux/
    image: null, // ex: '/src/assets/gateaux/chebakia.jpg'
    emoji: '🍯',
    name: {
      fr: 'Chebakia au Miel',
      ar: 'شباكية بالعسل',
    },
    shortDesc: {
      fr: 'Croustillante, parfumée à la fleur d\'oranger',
      ar: 'مقرمشة بعطر ماء الزهر',
    },
    description: {
      fr: 'La chebakia traditionnelle façonnée entièrement à la main, frite dans une huile pure, puis trempée dans du miel d\'acacia chaud et saupoudrée de sésame doré. Parfumée à l\'eau de fleur d\'oranger et à la cannelle. Préparée selon la recette familiale transmise de génération en génération.',
      ar: 'الشباكية التقليدية المصنوعة كلياً يدوياً، مقلية بزيت نقي ثم مغمورة في عسل الأقاقيا الساخن ومرشوشة بالسمسم الذهبي. معطرة بماء الزهر والقرفة. محضّرة وفق الوصفة العائلية المتوارثة جيلاً بعد جيل.',
    },
    prix: '120 DH / 12 pièces',
    category: 'gateau',
  },
  {
    id: 'kaab-ghzal',
    slug: 'kaab-ghzal',
    image: null,
    emoji: '🌙',
    name: {
      fr: 'Kaab el Ghzal',
      ar: 'كعب الغزال',
    },
    shortDesc: {
      fr: 'Amande & fleur d\'oranger, la classique',
      ar: 'اللوز وماء الزهر، الكلاسيكية الخالدة',
    },
    description: {
      fr: 'La corne de gazelle, symbole de la pâtisserie marocaine raffinée. Une pâte fine et dorée enveloppe une farce généreuse d\'amandes moulues, parfumée à l\'eau de fleur d\'oranger, au mastic et à la cannelle. Chaque pièce est modelée à la main pour obtenir la forme caractéristique en croissant.',
      ar: 'كعب الغزال، رمز الحلوى المغربية الراقية. عجينة رفيعة وذهبية تلف حشوة سخية من اللوز المطحون المعطّر بماء الزهر والمستكة والقرفة. كل قطعة تُشكّل يدوياً للحصول على الشكل الهلالي المميز.',
    },
    prix: '150 DH / 12 pièces',
    category: 'gateau',
  },
  {
    id: 'briouate-amande',
    slug: 'briouate-amande',
    image: null,
    emoji: '✨',
    name: {
      fr: 'Briouate à l\'Amande',
      ar: 'بريوات اللوز',
    },
    shortDesc: {
      fr: 'Feuilleté doré, farce d\'amande et miel',
      ar: 'ورقي ذهبي بحشوة اللوز والعسل',
    },
    description: {
      fr: 'Des briouates croustillantes en pâte filo, fourrées d\'une pâte d\'amandes parfumée au miel et à la cannelle, puis frites à la perfection. Leur feuilleté doré et leur farce généreuse en font une douceur irrésistible pour les grandes occasions.',
      ar: 'بريوات مقرمشة من عجينة الفيلو، محشوة بمعجون اللوز المعطّر بالعسل والقرفة، ثم مقلية إلى الكمال. قشرتها الذهبية المقرمشة وحشوتها السخية تجعلها حلوى لا تقاوم للمناسبات الكبرى.',
    },
    prix: '100 DH / 12 pièces',
    category: 'gateau',
  },
  {
    id: 'sellou',
    slug: 'sellou',
    image: null,
    emoji: '🌾',
    name: {
      fr: 'Sellou (Sfouf)',
      ar: 'سلو (صفوف)',
    },
    shortDesc: {
      fr: 'Énergisant, amande & sésame grillés',
      ar: 'مقوٍّ بالأمند والسمسم المحمّص',
    },
    description: {
      fr: 'Le sellou, aussi appelé sfouf, est une spécialité marocaine énergisante composée de farine grillée, de sésame, d\'amandes et de miel. Parfumé à l\'anis et à la cannelle, il est traditionnellement préparé pour le Ramadan et les nouvelles mamans. Notre recette artisanale respecte scrupuleusement la tradition.',
      ar: 'السلو، المعروف أيضاً بالصفوف، تخصص مغربي مقوٍّ مكون من الدقيق المحمّص والسمسم واللوز والعسل. معطّر بالينسون والقرفة، يُحضَّر تقليدياً لشهر رمضان والأمهات الجدد.',
    },
    prix: '80 DH / 250g',
    category: 'gateau',
  },
  {
    id: 'makrout',
    slug: 'makrout',
    image: null,
    emoji: '🍂',
    name: {
      fr: 'Makrout aux Dattes',
      ar: 'مقروط بالتمر',
    },
    shortDesc: {
      fr: 'Semoule & pâte de dattes, frit au miel',
      ar: 'سميد بمعجون التمر، مقلي بالعسل',
    },
    description: {
      fr: 'Le makrout, un incontournable de la pâtisserie orientale. Des losanges de semoule fine farcis d\'une pâte de dattes Medjool parfumée à la cannelle et à l\'eau de fleur d\'oranger, frits puis enrobés de miel chaud. Un délice fondant qui fond littéralement en bouche.',
      ar: 'المقروط، لا غنى عنه في الحلوى الشرقية. معينات من السميد الناعم محشوة بمعجون تمر المجهول المعطّر بالقرفة وماء الزهر، مقلية ثم مغلّفة بالعسل الساخن. شهادة ذائبة في الفم حرفياً.',
    },
    prix: '90 DH / 12 pièces',
    category: 'gateau',
  },
  {
    id: 'ghribia',
    slug: 'ghribia',
    image: null,
    emoji: '⭐',
    name: {
      fr: 'Ghriba aux Noix',
      ar: 'غريبة بالجوز',
    },
    shortDesc: {
      fr: 'Sablé fondant, croquant de noix',
      ar: 'سابلي ذائب بقرمشة الجوز',
    },
    description: {
      fr: 'Les ghriba sont de délicieux sablés marocains qui fondent en bouche. Notre version aux noix est parfumée à la cannelle et à la vanille, avec un cœur légèrement humide entouré d\'une coque craquelée dorée. À savourer avec un thé à la menthe.',
      ar: 'الغريبة حلوى مغربية لذيذة تذوب في الفم. نسختنا بالجوز معطّرة بالقرفة والفانيليا، بمركز رطب قليلاً محاط بقشرة متشققة ذهبية. يُستمتع بها مع الشاي بالنعناع.',
    },
    prix: '70 DH / 12 pièces',
    category: 'gateau',
  },
]
