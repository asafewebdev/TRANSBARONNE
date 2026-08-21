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
        ink: "rgb(var(--color-ink-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        border: "rgb(var(--color-border-rgb) / <alpha-value>)",
        lime: "rgb(var(--color-lime-rgb) / <alpha-value>)",
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        white: "rgb(var(--color-white-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: [
          "var(--font-barlow-condensed)",
          "Barlow Condensed",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        glow: "0 0 34px rgb(126 211 33 / 0.32)",
        "glow-soft": "0 0 64px rgb(126 211 33 / 0.18)",
      },
      keyframes: {
        freightScroll: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 22px rgb(126 211 33 / 0.26)" },
          "50%": { boxShadow: "0 0 44px rgb(126 211 33 / 0.46)" },
        },
      },
      animation: {
        freight: "freightScroll 34s linear infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
