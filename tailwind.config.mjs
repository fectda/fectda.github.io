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
        "plate-mid": "#252525",    // Between plate and plate-dark
        "plate-dark": "#222222",
        "plate-deep": "#202020",   // Darker plate for cards
        "terminal": "#1e1e1e",     // Specific terminal background
        "spine-segment": "#2A2A2A",
        "text-muted": "#A3A3A3",    // Neutral 400 for secondary text
        "panel-border": "#293837",  // Dark Slate/Green for structural borders (Header, Footer, InfoBar)
        "panel": "#111111",         // Darker background for panels/cards
        "content": "#D4D4D4",       // Main text color
        "content-strong": "#E5E7EB", // Headings and highlights
        "subtext": "#888888",       // Subtitles and secondary text
        "separator": "#4B5563",     // Structural separators (pipes, lines)
        "marker": "#555555",        // Crosshairs and specific markers
        "content-bright": "#ffffff", // Brightest content color
        "content-dim": "#9CA3AF",   // Dimmed content (tags, descriptions)
        "icon-muted": "#6B7280",    // Muted icons
        "wip": "#EAB308",           // Work in progress status
        "icon-bright": "rgba(255, 255, 255, 0.9)", // Bright icons
        "primary-dim": "rgba(37, 188, 192, 0.2)",  // Dim primary for shadows/accents
        "primary-faint": "rgba(37, 188, 192, 0.05)", // Very faint primary for backgrounds
        "primary-medium": "rgba(37, 188, 192, 0.4)", // Medium opacity primary
        "overlay-dim": "rgba(0, 0, 0, 0.3)",        // Dim overlay for tags
        "spine-segment-hover": "#383838",           // Lighter spine segment for hover
        "primary-soft": "rgba(37, 188, 192, 0.3)",  // Soft primary for low intensity glow
        "primary-strong": "rgba(37, 188, 192, 0.6)", // Strong primary for high intensity glow
        "content-light": "#cccccc",                 // Lighter content for specific UI elements
        "overlay-light": "#333333",                 // Lighter overlay for hover states
        "connector": "#25BCC0",                     // Timeline connector lines
        "background-main": "#0a0a0a",               // Main app background
        "info-bar-bg": "#111111",                   // Info bar background
        "footer-bg": "#111111",                     // Footer background
        "header-bg": "#111111",                     // Header background
        "grid-line": "#333333",                     // Grid lines
        "text-footer": "#666666",                   // Footer text color
        "grid-line-dark": "#222222",                // Darker grid lines
        "status-green-glow": "rgba(34, 197, 94, 0.6)", // Status indicator glow
        "scanline-start": "rgba(255, 255, 255, 0)", // Scanline gradient start
        "scanline-end": "rgba(0, 0, 0, 0.1)",       // Scanline gradient end
        "guardian-glow": "rgba(255, 255, 255, 0.3)", // Guardian overlay glow
        "shadow-strong": "rgba(0, 0, 0, 0.8)",      // Strong shadow
        "overlay-medium": "rgba(0, 0, 0, 0.5)",     // Medium overlay
        "overlay-dark": "rgba(0, 0, 0, 0.8)",       // Dark overlay
        // Legacy mappings (for backward compatibility if needed, or mapped to new)
        "border-dark": "#333333",
        "border-mid": "#444444",    // Lighter border distinct from border-dark
        "warning": "#FFA500",       // Warning state
        "error": "#FF0000",         // Error state
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
