/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.hide-scrollbar': {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none', 
        'scrollbar-width': 'none', 
      },
    });
  },],
}

