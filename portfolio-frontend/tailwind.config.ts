import type { Config } from 'tailwindcss'

const config: Config = {
  variants: {
    backgroundColor: ["hover"]
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      'color1': '#F2E9D8',
      'color2': '#8C877D',
      'color3': '#59564F',
      'color4': '#F2F2F2',
      'color5': '#0D0D0D',
    },
  },
  plugins: [],
}
export default config
