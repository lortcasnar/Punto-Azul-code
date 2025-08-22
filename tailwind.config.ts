import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azul: "#1D3557",
        cream: "#FAF7F2",
        ink: "#0b0b0b",
        stone: "#8B8B8B",
        accent: "#457B9D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui"],
        serif: ["Playfair Display", "Georgia"],
      },
      letterSpacing: {
        wider2: ".2em",
      },
    },
  },
  plugins: [],
};
export default config;
