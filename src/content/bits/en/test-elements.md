---
title: "System Typography Check"
description: "A comprehensive test of all Markdown elements to verify the Obsidian Telemetry design system."
date: 2026-02-11
stack: ["Markdown", "Typography", "CSS"]
status: "wip"
type: "SYSTEM_TEST"
images: ["/collibri.svg", "/guardian-overlay.svg"]
progress: 5
repository_url: "https://github.com/fectda/portafolio"
---

# Heading 1: The Main Title (Should trigger H2 logic mostly)
The above is an H1, but since the page title handles the main H1, this might be redundant. Let's look at the standard sections.

## 🎯 Heading 2: Section Title (Standard Challenge/Solution)
This is the standard `H2` used for main sections like **Challenge**, **Solution**, etc. It should have the counter prefix (e.g., `01 //`).

### Heading 3: Subsection (The "Clean" header)
This H3 should now be clean, **without** the vertical green bar. It uses the `prose-headings` styles: bold, uppercase, mono, and white.

#### Heading 4: Deep Dive
Sometimes we need to go deeper. This should still look good, likely smaller but consistent.

---

## 📝 Typography & Emphasis
We use a specific font stack. This paragraph demonstrates standard body text. It should use `font-body` and a light gray color (`#D4D4D4`).
*   **Bold Text:** This should be white (`text-white`) and stand out.
*   *Italic Text:* A subtle emphasis for internal thoughts or terminology.
*   ***Bold & Italic:*** When you really need to scream (quietly).
*   `Inline Code`: This should be Turquoise (`#25BCC0`) 'and' "monospaced".
*   [Hyperlinks](https://link-url-here.org): Should be Turquoise and non-underlined by default, with an underline on hover.

> **Blockquote:** This is a quote. It represents wisdom or an external voice. It implies a border-left and perhaps an italic style. "The code is the documentation."

---

## 📋 Lists & Data

### Unordered List (The Standard)
*   Item One: Basic feature.
*   Item Two: **Critical** feature.
*   Item Three: Nested content.
    *   Sub-item A
    *   Sub-item B

### Ordered List (The Process)
1.  **Initialize:** Start the engine.
2.  **Execute:** Run the primary loop.
3.  **Terminate:** Graceful shutdown.

---

## 💻 Code Blocks

Here is a standard code block (Rust/TypeScript style):

```typescript
interface NeuralInterface {
  synapseCount: number;
  efficiency: number;
  
  activate(): void {
    console.log("System Online :: OBSIDIAN_MODE");
  }
}

const core = new NeuralInterface();
core.activate();
```

---

## 📊 Tables (If supported)

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `mode` | `String` | `"obsidian"` | The visual theme mode |
| `p_val` | `Float` | `0.05` | Statistical significance |
| `active` | `Boolean` | `true` | System status |

---

## 🖼️ Media (Legacy Context)
We already test images in the carousel, but here is an inline image if Markdown supports it directly:

![Inline Diagram](/collibri.svg)

*Fig. 2: Inline vector representation.*
