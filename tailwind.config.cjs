/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9500',
        accent: '#00D4AA',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
