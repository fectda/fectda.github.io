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
        // Obsidian Telemetry Homogenized Palette
        "primary": "#c72929",      // Deep Red Accent
        "background-dark": "#050505", // Obsidian Black (Strict)
        "surface-dark": "#0A0A0A",    // Card Background (Strict)
        "border-dark": "#262626",     // Neutral 800 approx
        "grid-line": "#111111",
      },
      fontFamily: {
        // Typography - FORCE MONO
        "display": ["JetBrains Mono", "monospace"], // Kill Space Grotesk
        "mono": ["JetBrains Mono", "monospace"],    // Strict
        "sans": ["JetBrains Mono", "monospace"],    // Kill Sans -> JetBrains Mono
        "serif": ["JetBrains Mono", "monospace"],   // Kill Serif -> JetBrains Mono
      },
      borderRadius: {
        // Brutalist - ABSOLUTE ZERO
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px", // Even circles must die? User said "KILL ALL rounded-*". Let's keep full for status dots only if needed, but user said "KILL". I'll map full to 0px for now to be safe, or leave it for specific utilitarian dots. User said "Replace with rounded-none", effectively. I will map everything to 0px.
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
