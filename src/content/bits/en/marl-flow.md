---
title: "Marl Flow (AI Language Trainer)"
description: "Entrenador de fluidez interactivo impulsado por IA que simula contextos reales y se adapta al nivel del usuario"
date: 2026-02-05
draft: false
stack: ["Vue.js", "Flask", "Docker", "Ollama", "Python"]
status: "wip"
type: "AI_TRAINER"
progress: 3
repository_url: "https://github.com/tu-usuario/marl-flow"
images: ["/collibri.svg"]
---

# 🗣️ Marl Flow (AI Language Trainer)

**Categoría:** Software / IA / Educación
**Estado:** En desarrollo (Dockerizado y funcional en local)
**Stack:** Vue.js, Flask, Docker, Ollama (Local LLM)

---

## 🎯 El Problema (Pain Point)
A pesar de mantener rachas constantes en apps como Duolingo y tomar clases tradicionales, persiste la dificultad para **articular ideas complejas** en inglés. Existe una brecha entre "saber inglés" y sentirse cómodo traduciendo pensamientos abstractos o técnicos del español al inglés en tiempo real.

## 💡 La Solución
Un entrenador de fluidez interactivo impulsado por IA que simula contextos reales y se adapta al nivel del usuario.

### ⚙️ Mecánica (Core Loop)
1.  **Selección de Contexto:** El sistema ofrece 3 escenarios distintos (ej. Profesional, Casual, Técnico) generados al vuelo por IA.
2.  **Desafío:** Se presenta una frase o idea en español ajustada al nivel actual.
3.  **Input:** El usuario escribe la traducción o interpretación en inglés.
4.  **Feedback Inmediato:** El sistema analiza la respuesta, corrige errores y asigna una calificación.
5.  **Progresión Dinámica:**
    *   Sesiones de 10 rondas.
    *   **Ajuste de Nivel:** Al final de la sesión, si el desempeño es alto, la dificultad aumenta. Si es bajo, se reduce.

## 🛠️ Arquitectura y "Fanfarronería Técnica"
Este proyecto es una demostración de arquitectura moderna y soberanía de datos.

*   **Frontend:** **Vue.js + Vite**. Interfaz reactiva y ligera.
*   **Backend:** **Python (Flask)**. Gestiona la lógica de estado (sesión, puntaje, nivel actual) y sirve como API Gateway para el modelo.
*   **Infraestructura:** **Docker Compose**. El sistema completo (Front + Back + DB) vive en contenedores aislados.
*   **Hardware:** Optimizado para correr *on-premise* en una **Raspberry Pi**.
*   **Motor de IA:** **Ollama**. Todo el procesamiento de lenguaje ocurre localmente, garantizando privacidad y cero latencia de red externa.

### 💍 Meta-Prompting ("Un Prompt para gobernarlos a todos")
El desarrollo de este proyecto fue asistido por una **Meta-Gem** (Gema personalizada en Gemini) diseñada específicamente para actuar como "Director de Producto".
Esta Gema no escribió código ciegamente, sino que **diseñó los prompts** que controlan cada aspecto del sistema:
*   **Branding:** Iteración de nombres y prompts para generación de Logo.
*   **UI/UX:** Creación de instrucciones precisas para que herramientas como Google Stitch generaran la interfaz.
*   **Lógica de Negocio:** Redacción y ajuste fino de los prompts del sistema (Contexto, Dificultad, Juez) para asegurar consistencia en el LLM local.

## 🧠 Aprendizajes
*   Desplegar LLMs en hardware limitado (RPi) requiere optimización extrema.
*   La IA no solo sirve para escribir código, sino para orquestar la visión del producto completo.
