/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('./assets/image/champa_cover.jpg')",
        'credit': "url('./assets/image/champa_cover2.jpeg')",
        'building': "url('./assets/image/scu_tre.jpg')",
        'pro1': "url('./assets/image/h1_hero1.jpg')"
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

