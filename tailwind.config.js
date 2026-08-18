/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
// bg: '#0d0b0a', // TODO
// surface: '#161210',
// surface2: '#1c1815',
// border: '#2b2420',
// text: '#f0ebe6',
// muted: '#a89a8c',






// bg: '#0a1416',
// surface: '#122228',
// surface2: '#16292f',
// border: '#224248',
// text: '#e8f1f2',
// muted: '#8fa8ac',


bg: '#0a0f1a', //pretty good
surface: '#101a2b',
surface2: '#152236',
border: '#233650',



// bg: '#07090c',
// surface: '#0d1117',
// surface2: '#121821',
// border: '#1d2530',

// bg: '#0b0d1a',
// surface: '#121428',
// surface2: '#181b35',
// border: '#2a2d4f',

        // bg: '#0a0e14',
        // surface: '#10141c',
        // surface2: '#141a24',
        // border: '#1c2431',

        text: '#e6edf3',
        muted: '#8b95a5',
// accent: '#3ee87a',
// accentDim: '#1e8f4f',
// accent: '#4d7fff',
// accentDim: '#2a4fb0',
// accent: '#a06bff',
// accentDim: '#6b3fb0',
// accent: '#ff8a3d',
accent: '#FF6C0A',
// accentDim: '#b5551e',
// accentDim: '#CC5200',
accentDim: '#b54f0a',


      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
