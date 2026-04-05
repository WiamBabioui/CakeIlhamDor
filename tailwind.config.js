/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'surface-bright':            '#fff8f3',
        'surface':                   '#fff8f3',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#fff2e2',
        'surface-container':         '#fbecd9',
        'surface-container-high':    '#f5e6d3',
        'surface-container-highest': '#efe0cd',
        'surface-dim':               '#e6d8c5',
        'on-surface':                '#221a0f',
        'on-surface-variant':        '#4d4635',
        'outline-variant':           '#d0c5af',
        'outline':                   '#7f7663',
        'primary':                   '#735c00',
        'primary-container':         '#d4af37',
        'on-primary':                '#ffffff',
        'on-primary-container':      '#554300',
        'secondary':                 '#a93058',
        'secondary-container':       '#fe7299',
        'on-secondary':              '#ffffff',
        'tertiary':                  '#2f6767',
        'tertiary-container':        '#86bdbd',
        // legacy
        rose: {
          pastel: '#fde8ed', light: '#fbc9d5', mid: '#f4a7b9',
          deep:   '#d9637e', dark:  '#a03058',
        },
        gold: {
          light: '#fdf3d0', muted: '#f5e3a0', mid: '#d4af37',
          deep:  '#8a6f00', dark:  '#5a4800',
        },
        sand:      { light: '#fdf6ed', mid: '#f0dfc0', dark: '#c8aa80' },
        cream:     '#fff8f3',
        whatsapp:  '#25D366',
      },
      fontFamily: {
        headline: ['"Noto Serif"', 'serif'],
        body:     ['"Plus Jakarta Sans"', 'sans-serif'],
        label:    ['"Plus Jakarta Sans"', 'sans-serif'],
        ar:       ['"Noto Naskh Arabic"', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
