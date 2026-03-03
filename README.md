# ⛰️ Altépetl Digital — Portafolio Personal

> **"Architect-Executive // Maker"**
>
> *In Ixtli In Yollotl — "Rostro y Corazón"*

Este repositorio contiene el código fuente de mi portafolio personal. No es un escaparate de marketing; es un **Cuaderno de Laboratorio Digital** donde documento proyectos, experimentos y el proceso de construcción detrás de ellos.

La identidad visual (**Obsidian Telemetry**) fusiona la precisión de un tablero de F1 con la masa lítica de la Arquitectura Mexica.

---

## 🏗️ Stack Técnico

| Capa | Tecnología |
|---|---|
| **Framework** | [Astro v5](https://astro.build) — Static Site Generation |
| **Styling** | [TailwindCSS v4](https://tailwindcss.com) — Tema "Obsidian" personalizado |
| **Interactividad** | [Vue.js](https://vuejs.org) — Islands Architecture |
| **Contenido** | Markdown / MDX con validación de esquemas via [Zod](https://zod.dev) |
| **i18n** | Soporte nativo Inglés (`/en`) y Español (`/es`) |
| **Deploy** | GitHub Pages via GitHub Actions |

---

## 📂 Estructura del Contenido

El contenido se organiza por **Dominio de Materia**:

```
src/content/
├── bits/       # Proyectos Digitales (Software, Cloud, IA)
├── atoms/      # Proyectos Físicos (Maker, Hardware, Civil)
├── mind/       # Ensayos y Filosofía
└── work/       # CV y Trayectoria Profesional
```

---

## 🤖 Sistema de Edición de Imágenes (Ixtli)

Las fotografías de portada de los proyectos son **fotos reales** procesadas a través de un pipeline de IA local para unificarlas con la identidad visual del sitio:

- **Motor:** [ComfyUI](https://github.com/comfyanonymous/ComfyUI) con el modelo **RealVisXL V5.0**
- **Flujo:** Los prompts se ensamblan de forma determinista desde archivos Markdown modulares (estudio base, encuadre, atmósfera, calidad de render)
- **API:** Script `ixtli_api_demo.py` que conecta con la API de ComfyUI para encolado y descarga de resultados

> ℹ️ **Nota:** Las fotografías son originales. Se usa IA exclusivamente para adaptarlas al estilo gráfico **Obsidian Telemetry** del sitio.

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js v20+
- pnpm (recomendado) o npm

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build & Deploy
El proyecto se despliega automáticamente a **GitHub Pages** via GitHub Actions al hacer push a `main`.

```bash
npm run build
```

---

## � Créditos — El Enjambre de Agentes

Este proyecto es orquestado por un humano que dirige un equipo de agentes especializados:

| Agente | Rol |
|---|---|
| **Poposin** | Arquitectura de Contenido & Estructura |
| **Antigravity** | Implementación de Código |
| **Stitch** | Generación de Diseño UI/UX |
| **Ixtli** | Pipeline de Generación de Imágenes IA |
| **Meta-Gem** | Dirección Estratégica |

---

## Disclaimer

> Las imágenes y fotografías presentadas en este portafolio han sido **editadas o generadas con herramientas de Inteligencia Artificial** (principalmente ComfyUI + RealVisXL). No representan fotografías reales sin intervención. El uso de IA es parte integral del proceso creativo y experimental documentado en este sitio.

---

*© 2026 Eduardo González // In Ixtli In Yollotl*
