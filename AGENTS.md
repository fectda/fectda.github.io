# 🤖 AGENTS.md - Project Manifesto & Guidelines

**Project:** Eduardo González Portfolio (The Scientist-Maker Hub)
**Identity:** "Obsidian Telemetry" (Brutalist, Technical, Dark Mode)
**Stack:** Astro, TailwindCSS, Vue.js (Islands), Markdown/MDX.

---

## 🎯 Objetivo
Construir un portafolio de alto rendimiento que funcione como un **Cuaderno de Laboratorio Digital**. No es un sitio de marketing, es una herramienta de documentación técnica.
Debe reflejar la identidad híbrida del autor: **Físico + CIO + Maker**.

## 🎨 Design System: "Obsidian Telemetry"
*   **Vibe:** Panel de control de F1 / Terminal de Linux / Grabado en piedra volcánica.
*   **Colores:**
    *   Fondo: `#050505` (Negro Absoluto).
    *   Bordes/Estructura: `#333333` (Gris Oscuro, 1px).
    *   Texto: `#E5E5E5` (Hueso/Gris Claro).
    *   Acento (Alertas/Links): `#C62828` (Rojo Óxido) o `#FF6D00` (Naranja Seguridad).
*   **Tipografía:** 100% Monoespaciada (JetBrains Mono, Geist Mono).
*   **Formas:** 0px Border Radius. Todo cuadrado. Sombras duras o inexistentes.

## 🏗️ Arquitectura de Contenidos
El sitio NO debe usar la estructura estándar de "Blog". Debe usar:
1.  **`/bits`**: Proyectos de Software, Cloud, IA. (Narrativa: Arquitectura, Escalabilidad).
2.  **`/atoms`**: Proyectos de Maker, Hardware, Obra Civil. (Narrativa: Ingeniería, Materiales).
3.  **`/mind`**: Ensayos y filosofía ("No te acostumbres a la incomodidad").
4.  **`/cv`**: Hoja de vida técnica (Timeline).

## 🛠️ Reglas Técnicas para el Agente Dev (Antigravity)
1.  **Zero JS by Default:** Usa componentes `.astro` para todo el layout estático.
2.  **Islands Architecture:** Usa `.vue` SOLO para componentes interactivos complejos (demos, calculadoras).
3.  **Tailwind First:** No escribas CSS puro si Tailwind lo resuelve.
4.  **Performance:** 100/100 Lighthouse es obligatorio. Optimiza imágenes y fuentes.
5.  **Clean Code:** Estructura modular. Separa layouts, componentes y páginas.

## 🔄 Flujo de Trabajo
1.  **Poposin (Yo):** Genero el contenido (`.md`) y valido que cumpla con la identidad.
2.  **Stitch/v0:** Genera los componentes UI (HTML/Tailwind).
3.  **Antigravity:** Implementa el código, configura rutas y lógica.
