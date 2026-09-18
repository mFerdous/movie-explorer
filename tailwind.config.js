/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        reel: {
          bg: '#0F1115',
          surface: '#171A21',
          surface2: '#1E222B',
          line: '#2A2E38',
          text: '#F5F3EE',
          muted: '#9BA0AC',
          gold: '#E3B23C',
          goldDark: '#B8892A',
          red: '#C1443A',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        sprocket:
          'radial-gradient(circle, rgba(245,243,238,0.10) 2px, transparent 2px)',
      },
    },
  },
  plugins: [],
}
