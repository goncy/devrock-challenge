const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Noto Serif", "serif"],
    },
    extend: {
      colors: {
        primary: colors.purple
      }
    }
  },
  variants: {},
  plugins: [],
};
