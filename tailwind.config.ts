/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#070B12', panel: '#0D131D', cyan: '#65D8FF' }, fontFamily: { sans: ['var(--font-geist)', 'Inter', 'sans-serif'] } } },
  plugins: []
};