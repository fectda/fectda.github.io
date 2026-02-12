import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Altepetl Digital Palette
        "primary": "#25BCC0",      // Turquesa
        "secondary": "#AB2A3E",    // Rojo Hematita
        "accent": "#D4442F",       // Bright Red
        "obsidian": "#1A1A1A",     // Background
        "plate": "#2D2D2D",
        "plate-dark": "#222222",
        "spine-segment": "#2A2A2A",
        "text-muted": "#A3A3A3",    // Neutral 400 for secondary text
        "panel-border": "#293837",  // Dark Slate/Green for structural borders (Header, Footer, InfoBar)
        "panel": "#111111",         // Darker background for panels/cards
        // Legacy mappings (for backward compatibility if needed, or mapped to new)
        "border-dark": "#333333",
      },
      fontFamily: {
        "display": ["Teko", "Space Grotesk", "sans-serif"],
        "body": ["Montserrat", "sans-serif"],
        "mono": ["Fira Code", "Space Grotesk", "monospace"],
        "headline": ["Anton", "sans-serif"],
        "sans": ["Montserrat", "sans-serif"], // Default sans
      },
      borderRadius: {
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      backgroundImage: {
        'xiuhcoatl-pattern': "linear-gradient(180deg, #2D2D2D 0%, #1A1A1A 100%)",
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'glow': '0 0 15px rgba(37, 188, 192, 0.5)',
        'glow-secondary': '0 0 8px rgba(171, 42, 62, 0.4)',
        'glow-strong': '0 0 20px rgba(37, 188, 192, 0.6)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
