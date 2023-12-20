import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': 'url("/hero-background.svg")',
      },
      colors: {
        'primary': '#7F5AF0',
        'secondary': '#2CB97D',
        'primary-alt': '#4F3F7E',
        'secondary-alt': '#1E724F',
        'background': '#16161A',
        'background-alt': '#242629',
        'text': '#94A1B2',
        'minor-text': '#495059',
        'placeholder': '#535353',
        'input-stroke': '#94A1B2',
        'hero-blackout': '#16161A',
        'headings': '#FFFFFE',
      } 
    },
  },
  plugins: [],
}
export default config
