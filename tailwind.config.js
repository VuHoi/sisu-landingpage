const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'btn-primary': 'var(--btn-primary)',
        'btn-secondary': 'var(--btn-secondary)',
      },
      backgroundImage: {
        'background-sign-in': "url('/images/background-sign-in.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('flowbite/plugin')],
};
