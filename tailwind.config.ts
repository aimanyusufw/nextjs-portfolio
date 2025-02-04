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
        text: "#fceeef",
        background: "#040101",
        primary: "#d3dee4",
        secondary: "#8ac7f0",
        accent: "#4797cd",
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
