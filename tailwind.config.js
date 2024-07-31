/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-gradient': 'linear-gradient(180deg, #0B051A 0%, #0F082B 100%)',
        'card-gradient-hover': 'linear-gradient(180deg, #1F0F60 0%, #0B051A 100%)',
      },
      borderColor: {
        'card-border': '#2B2664',
      },
    },
  },
  plugins: [],
}

