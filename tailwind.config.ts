import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        text: "#110304",
        background: "#fefbfb",
        primary: "#1b262c",
        secondary: "#0f4d75",
        accent: "#3283b8",
        "dark-text": "#fceeef",
        "dark-background": "#040101",
        "dark-primary": "#d3dee4",
        "dark-secondary": "#8ac7f0",
        "dark-accent": "#4797cd",
      },
      fontFamily: {
        popins: ["Poppins", "serif"],
        firaCode: ["Fira Code", "serif"],
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
