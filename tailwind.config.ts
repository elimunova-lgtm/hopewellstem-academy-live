import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8B0000",
          50: "#fdf3f3",
          100: "#fbe5e5",
          200: "#f7cccc",
          300: "#efa3a3",
          400: "#e36f6f",
          500: "#d24343",
          600: "#bd2828",
          700: "#9e1f1f",
          800: "#8B0000",
          900: "#6d0606",
          950: "#3b0303",
        },
        accent: {
          DEFAULT: "#DC143C",
          light: "#FF6347",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fbf8ec",
          100: "#f6efd1",
          300: "#e6cd6c",
          400: "#ddbe4e",
          500: "#D4AF37",
          600: "#b8922a",
          700: "#93741f",
        },
        cream: "#FBF8F3",
        ink: "#1f2426",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(139, 0, 0, 0.08)",
        "card-hover": "0 20px 45px rgba(139, 0, 0, 0.16)",
        "card-soft": "0 6px 24px rgba(139, 0, 0, 0.05)",
        glow: "0 0 40px rgba(212, 175, 55, 0.25)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        marquee: "marquee 28s linear infinite",
        "scroll-up": "scroll-up 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
