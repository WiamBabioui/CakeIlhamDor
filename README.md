# إلهام دور — Ilham D'Or 🎂

Site web bilingue (Français / Arabe) pour pâtisserie artisanale.

---

## 🚀 Installation & Démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# → http://localhost:5173
```

---

## 📸 Comment ajouter vos photos et produits

### Étape 1 — Copiez vos photos dans les bons dossiers

| Dossier | Pour quoi |
|---------|-----------|
| `src/assets/cakes/` | Toutes les photos de cakes |
| `src/assets/gateaux/` | Toutes les photos de gâteaux |

**Format recommandé :** JPG ou WebP · 700×500 px minimum · Pas d'espaces dans les noms

### Étape 2 — Remplissez les données dans les fichiers JS

**Pour les cakes** → ouvrez `src/data/cakes.js`  
**Pour les gâteaux** → ouvrez `src/data/gateaux.js`

Pour chaque produit, remplissez :

```js
{
  id: 'cake-fraise',           // identifiant unique (pas d'espaces)
  slug: 'cake-fraise',         // même chose (utilisé dans l'URL)
  image: '/src/assets/cakes/cake-fraise.jpg',  // chemin de votre photo
  emoji: '🍓',                 // affiché si pas de photo
  name: {
    fr: 'Cake Fraise',         // nom en français
    ar: 'كيك الفراولة',        // nom en arabe
  },
  shortDesc: {
    fr: 'Moelleux aux fraises fraîches',  // 1 ligne → sur la carte
    ar: 'كيك طري بالفراولة',              // 1 ligne → sur la carte
  },
  description: {
    fr: 'Description longue...',  // texte complet → page détail
    ar: 'وصف مفصّل...',           // texte complet → page détail
  },
  prix: '250 DH',
  category: 'cake',  // NE PAS CHANGER
}
```

---

## ⚙️ Configuration — vos coordonnées

### WhatsApp
Dans `src/components/WhatsAppButton.jsx` :
```js
const WHATSAPP_NUMBER = '212600000000' // ← mettez votre numéro
```

### Réseaux sociaux & téléphone
Dans `src/pages/Home.jsx` et `src/pages/Contact.jsx` :
```js
const CONTACT = {
  whatsapp:  'https://wa.me/212XXXXXXXXX',
  phone:     'tel:+212XXXXXXXXX',
  facebook:  'https://facebook.com/votre-page',
  instagram: 'https://instagram.com/votre-page',
}
```

---

## 📁 Structure du projet

```
src/
├── assets/
│   ├── cakes/        ← vos photos de cakes ici
│   └── gateaux/      ← vos photos de gâteaux ici
├── components/
│   ├── Navbar.jsx          top (desktop) + bottom (mobile)
│   ├── ProductCard.jsx     carte produit
│   └── WhatsAppButton.jsx  bouton commander + bouton flottant
├── data/
│   ├── cakes.js      ← noms, descriptions, prix, photos
│   └── gateaux.js    ← noms, descriptions, prix, photos
├── i18n/
│   ├── fr.json       textes en français
│   └── ar.json       textes en arabe
├── pages/
│   ├── Home.jsx
│   ├── Cakes.jsx
│   ├── Gateaux.jsx
│   ├── ProductDetail.jsx
│   └── Contact.jsx
├── App.jsx     routeur principal
├── main.jsx    point d'entrée
└── index.css   styles globaux
```

---

## 🌐 Pages du site

| URL | Page |
|-----|------|
| `/` | Accueil — hero + aperçu cakes + aperçu gâteaux + contact |
| `/cakes` | Liste complète des cakes |
| `/cake/slug` | Détail d'un cake + bouton WhatsApp |
| `/gateaux` | Liste complète des gâteaux |
| `/gateau/slug` | Détail d'un gâteau + bouton WhatsApp |
| `/contact` | Instagram, WhatsApp, Facebook, Téléphone |

---

## 🏗️ Build pour production

```bash
npm run build
# Les fichiers sont générés dans le dossier dist/
```
