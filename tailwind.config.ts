import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['Jost', "sans-serif"]
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        marrslight: "#1C9A9A",
        marrsgreen: "#007A7A",
        marrsdark: "#004D4D",
        cardlight: "#EFF3F3",

        // bgdark: "#2D2D2D",
        bgdark: "#1D2A35",
        carrilight: "#57DCB4",
        carrigreen: "#05CE91",
        carridark: "#00835B",
        // carddark: "#383838",
        carddark: "#22323F",
        textlight: "#F9FAFB",
      }, 
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  darkMode: 'class',
};
export default config;
