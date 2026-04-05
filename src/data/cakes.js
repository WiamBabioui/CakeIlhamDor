// ─────────────────────────────────────────────────────────────
//  CAKES — Ajoutez vos produits ici
//
//  Pour chaque cake :
//    1. Mettez la photo dans :  src/assets/cakes/
//    2. Remplissez les champs ci-dessous
// ─────────────────────────────────────────────────────────────

export const cakes = [
  {
    id: 'cake-fraise',
    slug: 'cake-fraise',
    // 📸 Mettez votre photo dans src/assets/cakes/
    // puis remplacez le chemin ci-dessous
    image: null, // ex: '/src/assets/cakes/cake-fraise.jpg'
    emoji: '🍓', // affiché si pas de photo
    name: {
      fr: 'Cake Fraise & Crème',
      ar: 'كيك الفراولة والكريمة',
    },
    shortDesc: {
      fr: 'Moelleux aux fraises fraîches et crème légère',
      ar: 'كيك طري بالفراولة الطازجة والكريمة الخفيفة',
    },
    description: {
      fr: 'Un cake généreux réalisé avec des fraises fraîches de saison, une crème légère parfumée à la vanille et une génoise moelleuse. Idéal pour les anniversaires et les occasions spéciales. Décoré à la main avec des roses en crème et des fraises fraîches.',
      ar: 'كيك سخي مصنوع من فراولة طازجة موسمية وكريمة خفيفة بنكهة الفانيليا وإسفنجة طرية. مثالي للأعياد والمناسبات الخاصة. مزيّن يدوياً بورود الكريمة والفراولة الطازجة.',
    },
    prix: '250 DH',
    category: 'cake',
  },
  {
    id: 'cake-chocolat',
    slug: 'cake-chocolat',
    image: null,
    emoji: '🍫',
    name: {
      fr: 'Cake Chocolat Noir',
      ar: 'كيك الشوكولاتة الداكنة',
    },
    shortDesc: {
      fr: 'Intense et fondant, ganache onctueuse',
      ar: 'كثيف وذائب بغاناش ناعم',
    },
    description: {
      fr: 'Un cake au chocolat noir intense avec une ganache onctueuse et des copeaux de chocolat belge. Sa texture fondante en bouche en fait un incontournable pour les amateurs de chocolat. Disponible en plusieurs tailles.',
      ar: 'كيك بالشوكولاتة الداكنة الكثيفة مع غاناش ناعم وتقطيعات من الشوكولاتة البلجيكية. قوامه الذائب في الفم يجعله لا غنى عنه لعشاق الشوكولاتة.',
    },
    prix: '270 DH',
    category: 'cake',
  },
  {
    id: 'cake-vanille-rose',
    slug: 'cake-vanille-rose',
    image: null,
    emoji: '🌸',
    name: {
      fr: 'Velours Rose & Vanille',
      ar: 'مخمل وردي وفانيليا',
    },
    shortDesc: {
      fr: 'Fini velours rose pastel, crème vanille',
      ar: 'تشطيب مخملي وردي، كريمة فانيليا',
    },
    description: {
      fr: 'Ce cake signature à la finition velours rose poudré est garni d\'une crème diplomate à la vanille de Madagascar. Sa texture aérienne et sa présentation romantique en font le gâteau parfait pour un anniversaire ou une Saint-Valentin.',
      ar: 'هذا الكيك المميز بتشطيب المخمل الوردي محشو بكريمة دبلوماسية بالفانيليا المدغشقرية. قوامه الهوائي وعرضه الرومانسي يجعله الكيك المثالي لعيد الميلاد أو يوم الحب.',
    },
    prix: '300 DH',
    category: 'cake',
  },
  {
    id: 'cake-citron',
    slug: 'cake-citron',
    image: null,
    emoji: '🍋',
    name: {
      fr: 'Cake Citron & Pavot',
      ar: 'كيك الليمون والخشخاش',
    },
    shortDesc: {
      fr: 'Frais et zesty, glaçage citron',
      ar: 'منعش وحامض، تزجيج بالليمون',
    },
    description: {
      fr: 'Un cake frais et pétillant au citron de Sicile avec des graines de pavot pour une texture unique. Le glaçage au citron apporte une touche d\'acidité parfaite qui équilibre la douceur du cake. Une création estivale et légère.',
      ar: 'كيك منعش ومفعم بالحيوية بالليمون الصقلي مع بذور الخشخاش لقوام فريد. التزجيج بالليمون يضيف لمسة من الحموضة المثالية التي توازن حلاوة الكيك.',
    },
    prix: '230 DH',
    category: 'cake',
  },
  {
    id: 'cake-mariage',
    slug: 'cake-mariage',
    image: null,
    emoji: '💍',
    name: {
      fr: 'Cake Mariage Élégance',
      ar: 'كيك زفاف الأناقة',
    },
    shortDesc: {
      fr: 'Sur mesure pour votre grand jour',
      ar: 'مخصص ليومك الكبير',
    },
    description: {
      fr: 'Un cake à plusieurs étages entièrement personnalisé pour votre mariage. Chaque détail est soigneusement étudié : fleurs en sucre, rubans comestibles, couleurs assorties à votre décoration. Contactez-nous pour un devis personnalisé.',
      ar: 'كيك متعدد الطبقات مخصص بالكامل لحفل زفافك. كل تفصيلة مدروسة بعناية: زهور السكر، الشرائط الصالحة للأكل، الألوان المنسجمة مع ديكورك. تواصل معنا لعرض سعر مخصص.',
    },
    prix: 'Sur devis / حسب الطلب',
    category: 'cake',
  },
  {
    id: 'cake-pistache',
    slug: 'cake-pistache',
    image: null,
    emoji: '💚',
    name: {
      fr: 'Cake Pistache & Framboise',
      ar: 'كيك الفستق والتوت',
    },
    shortDesc: {
      fr: 'Alliance parfaite pistache-framboise',
      ar: 'تناغم مثالي بين الفستق والتوت',
    },
    description: {
      fr: 'Un cake raffiné qui marie la douceur de la pistache iranienne avec l\'acidité de la framboise fraîche. Une couche de gelée de framboise maison entre chaque étage apporte fraîcheur et caractère. Décoré de pistaches entières et de framboises fraîches.',
      ar: 'كيك راقٍ يجمع بين حلاوة الفستق الإيراني وحموضة التوت الطازج. طبقة من مربى التوت المنزلية بين كل طابق تضيف نضارة وطابعاً مميزاً.',
    },
    prix: '280 DH',
    category: 'cake',
  },
]
