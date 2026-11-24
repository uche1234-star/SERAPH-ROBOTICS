/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#080B10', panel: '#10151D', cyan: '#73D7FF' }, fontFamily: { sans: ['var(--font-geist)', 'Arial', 'sans-serif'] }, letterSpacing: { tightest: '-.065em' } } },
  plugins: []
};