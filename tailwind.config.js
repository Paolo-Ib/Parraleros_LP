module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./componentes/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titulo: ['var(--font-agbalumo)'],
        subtitulo: ['var(--font-poppins)'],
        general: ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [],
}