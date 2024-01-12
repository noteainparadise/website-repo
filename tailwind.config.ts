import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'apocalypse': ['Apocalypse Grunge', ...defaultTheme.fontFamily.sans],
      'binaria': ['Binaria', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        red: "#FF0000",
        red2: "#E52F41",
        yellow: "#FFE500",
        blue: "#25B0FF",
        blue2: "#08A5FE",
      },
    }
  },
  plugins: [],
}
export default config
