import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
        brand: {
          purple: "#7c3aed",
          peach: "#ffcdb2",
          surface: "#F8F7FF",
          dark: "#120B1E",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#7c3aed",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#fbbf24",
              foreground: "#000000",
            },
            background: "#F8F7FF",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#7c3aed",
              foreground: "#ffffff",
            },
            background: "#120B1E",
          },
        },
      },
    }),
  ],
};
