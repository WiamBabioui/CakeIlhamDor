import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/cake-d_or-removebg-preview.png'

const NAV_STYLE = `
  .nav-desktop { display: none; }
  .nav-mobile-top { display: flex; }
  .nav-mobile-bottom { display: flex; }
  @media (min-width: 768px) {
    .nav-desktop { display: flex; }
    .nav-mobile-top { display: none !important; }
    .nav-mobile-bottom { display: none !important; }
  }
`

export default function Navbar({ lang, setLang }) {
  const { i18n } = useTranslation()
  const location  = useLocation()
  const isRTL = lang === 'ar'

  const switchLang = (l) => {
    setLang(l)
    i18n.changeLanguage(l)
    document.documentElement.lang = l
    document.documentElement.dir  = l === 'ar' ? 'rtl' : 'ltr'
  }

  const toggleLang = () => switchLang(lang === 'fr' ? 'ar' : 'fr')

  const links = isRTL
    ? [
        { to: '/',        label: 'الرئيسية', icon: 'home' },
        { to: '/cakes',   label: 'الكيك',    icon: 'cake' },
        { to: '/gateaux', label: 'الحلويات', icon: 'star' },
        { to: '/contact', label: 'تواصل',    icon: 'phone' },
      ]
    : [
        { to: '/',        label: 'Accueil',  icon: 'home' },
        { to: '/cakes',   label: 'Cakes',    icon: 'cake' },
        { to: '/gateaux', label: 'Gâteaux',  icon: 'star' },
        { to: '/contact', label: 'Contact',  icon: 'phone' },
      ]

  // Logo toujours à gauche
  const LogoBlock = () => (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', direction: 'ltr', textDecoration: 'none' }}>
      <img src={logo} alt="Cake Ilham D'or" style={{ height: '38px', width: '38px', objectFit: 'contain' }} />
      <span style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: '17px', color: '#735c00', letterSpacing: '0.03em' }}>
        Cake Ilham D'or
      </span>
    </Link>
  )

  // Sélecteur langue desktop
  const LangSelector = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', direction: 'ltr', border: '1px solid #d0c5af', borderRadius: '9999px', padding: '4px 10px' }}>
      <button onClick={() => switchLang('ar')} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: lang === 'ar' ? 700 : 400, fontSize: '13px', color: lang === 'ar' ? '#b8920a' : '#4d4635', background: 'none', border: 'none', cursor: 'pointer', padding: '0 3px' }}>AR</button>
      <span style={{ color: '#ccc', fontSize: '13px' }}>|</span>
      <button onClick={() => switchLang('fr')} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: lang === 'fr' ? 700 : 400, fontSize: '13px', color: lang === 'fr' ? '#b8920a' : '#4d4635', background: 'none', border: 'none', cursor: 'pointer', padding: '0 3px' }}>FR</button>
      <span className="material-symbols-outlined" style={{ fontSize: '17px', color: '#735c00', marginLeft: '2px' }}>language</span>
    </div>
  )

  return (
    <>
      <style>{NAV_STYLE}</style>

      {/* ── MOBILE TOP: logo gauche | globe droit (toujours, peu importe la langue) ── */}
      <nav className="nav-mobile-top" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: '#fff8f3', borderBottom: '1px solid #efe0cd',
        boxShadow: '0 1px 6px rgba(115,92,0,0.07)', height: '56px',
        alignItems: 'center', justifyContent: 'space-between', padding: '0 16px',
      }}>
        {/* Logo toujours à gauche */}
        <LogoBlock />

        {/* Globe toujours à droite */}
        <button onClick={toggleLang} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '36px', height: '36px',
          border: '1.5px solid #d0c5af', borderRadius: '50%',
          background: 'none', cursor: 'pointer', color: '#735c00',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>language</span>
        </button>
      </nav>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="nav-mobile-bottom" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        height: '64px', backgroundColor: '#ffffff', borderTop: '1px solid #efe0cd',
        alignItems: 'center', justifyContent: 'space-around',
      }}>
        {links.map(l => {
          const active = location.pathname === l.to
          return (
            <Link key={l.to} to={l.to} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
              color: active ? '#b8920a' : '#9ca3af',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: active ? 700 : 400,
              fontSize: '10px', textDecoration: 'none', padding: '4px 12px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{l.icon}</span>
              {l.label}
            </Link>
          )
        })}
      </nav>

      {/* ── DESKTOP TOP NAV ── */}
      <nav className="nav-desktop" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: '#fff8f3', borderBottom: '1px solid #efe0cd',
        boxShadow: '0 1px 8px rgba(115,92,0,0.07)', padding: '10px 40px',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Gauche : logo (FR) ou langue (AR) */}
        {isRTL ? <LangSelector /> : <LogoBlock />}

        {/* Centre : liens */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: location.pathname === l.to ? 700 : 400,
              fontSize: '15px',
              color: location.pathname === l.to ? '#735c00' : '#6b5740',
              textDecoration: 'none',
              borderBottom: location.pathname === l.to ? '2px solid #d4af37' : '2px solid transparent',
              paddingBottom: '2px', transition: 'color 0.2s',
            }}>{l.label}</Link>
          ))}
        </div>

        {/* Droite : langue (FR) ou logo (AR) */}
        {isRTL ? <LogoBlock /> : <LangSelector />}
      </nav>
    </>
  )
}