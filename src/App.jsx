import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { FloatingWhatsApp } from './components/WhatsAppButton'
import Home from './pages/Home'
import Cakes from './pages/Cakes'
import Gateaux from './pages/Gateaux'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import { useTranslation } from 'react-i18next'

export default function App() {
  // Lire la langue sauvegardée, sinon 'fr' par défaut
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ilham_lang') || 'fr'
  })
  const { i18n } = useTranslation()

  // Au démarrage, appliquer la langue sauvegardée
  useEffect(() => {
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr'
  }, [])

  // Quand la langue change, sauvegarder dans localStorage
  const handleSetLang = (l) => {
    setLang(l)
    localStorage.setItem('ilham_lang', l)
  }

  return (
    <BrowserRouter>
      <Navbar lang={lang} setLang={handleSetLang} />
      <Routes>
        <Route path="/"             element={<Home lang={lang} />} />
        <Route path="/cakes"        element={<Cakes lang={lang} />} />
        <Route path="/cake/:slug"   element={<ProductDetail lang={lang} type="cake" />} />
        <Route path="/gateaux"      element={<Gateaux lang={lang} />} />
        <Route path="/gateau/:slug" element={<ProductDetail lang={lang} type="gateau" />} />
        <Route path="/contact"      element={<Contact lang={lang} />} />
      </Routes>
      <FloatingWhatsApp lang={lang} />
    </BrowserRouter>
  )
}