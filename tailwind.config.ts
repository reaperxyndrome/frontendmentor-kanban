import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      main_purple: "#635FC7",
      main_purple_hover: "#A8A4FF",
      black: "#000112",
      very_dark_grey: "#20212C",
      dark_grey: "#2B2C37",
      lines_dark: "#3E3F4E",
      medium_grey: "#828FA3",
      lines_light: "#E4EBFA",
      light_grey: "#F4F7FD",
      red: "#EA5555",
      red_hover: "#FF9898"
    },
  },
  plugins: [],
}
export default config
