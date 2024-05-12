import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'customFont-regular': ['"Neue Plak Regular"', 'sans-serif'],
        'customFont-regular-semibold': ['"Neue Plak SemiBold", sans-serif'],
        'customFont-regular-bold': ['"Neue Plak Bold", sans-serif'],
        'customFont-condensed-black': ['"Neue Plak Condensed Black", sans-serif'],
      },
    },
  },

  plugins: [
    typographyPlugin,
  ],
}