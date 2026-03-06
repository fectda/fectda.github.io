---
date: 2026-02-05
description: Entrenador de fluidez interactivo impulsado por IA que simula contextos
  reales y se adapta al nivel del usuario.
draft: false
progress: 3
repository_url: https://gitlab.com/eduardo-dev/text-practice
stack:
- Vue.js
- Flask
- Docker
- Ollama
- Python
status: wip
title: Marl Flow (AI Language Trainer)
type: AI_AGENT
---

## El Problema  
Aunque mantengo rachas constantes en apps como Duolingo y he tomado clases tradicionales, sigue siendo muy difícil para mí **articular ideas complejas** en inglés. Hay una brecha entre saber inglés y sentirme cómodo traduciendo pensamientos abstractos o técnicos del español al inglés en tiempo real.

## La Solución  
Para cerrar esa brecha construí un entrenador de fluidez que combina IA y diseño iterativo. El proceso empezó con un prototipo Python/Gradio que me mostraba cómo podía integrar el modelo local, pero el UI resultó *horriblemente* rígido: un grid de Gradio que no se adaptaba a los estilos que quería y que terminaba con una experiencia visual poco agradable.  
Aun así, la lógica de negocio funcionaba, así que decidí usar la arquitectura original de **Python + Flask + Docker**, pero pasé a un **frontend en Vue.js** porque ya manejaba ese framework y quería una UI más flexible. Usé Google Stitch para generar un diseño base y, después de que Antigrafity intentó ajustar el layout sin éxito, terminé reescribiendo el front‑end en Vue, manteniendo la misma lógica de backend y el modelo Ollama que no es parte de este proyecto.

## Mecánica (Core Loop)  
1. **Selección de Contexto:** El sistema ofrece 3 escenarios (Profesional, Casual, Técnico) generados al vuelo por IA.  
2. **Desafío:** Se presenta una frase o idea en español adaptada al nivel actual.  
3. **Input:** El usuario escribe la traducción o interpretación en inglés.  
4. **Feedback Inmediato:** El sistema analiza la respuesta, corrige errores y asigna una calificación.  
5. **Progresión Dinámica:**  
   - Sesiones de 10 rondas.  
   - Al final de la sesión, si el desempeño es alto, la dificultad aumenta; si es bajo, se reduce.

## Arquitectura y Especificaciones  
- **Frontend:** Vue.js + Vite, renderizado SPA, control de estado con Vuex, conexión a la API Flask.  
- **Backend:** Flask que expone endpoints `/traduce`, `/progreso`, `/nivel`. Gestiona la lógica de estado y llama al modelo Ollama.  
- **Infraestructura:** Docker Compose con contenedores separados para Front y Back.  
- **Hardware:** Raspberry Pi 4 (modelo que elegí por su bajo consumo) ejecuta el front‑end y la API; la IA local (Ollama) corre en una máquina de escritorio, ya que el modelo no se ajusta a la capacidad de la Pi.  
- **Motor de IA:** Ollama, modelo de traducción local (ej. `gpt-oss:20b`).
- **Meta‑Prompting:** Se diseñaron prompts específicos para contextos, dificultad y evaluación; estos prompts fueron creados con una Gem en Gemini que actúa como "Director de Producto".

## Resultados  
El proyecto todavía está en **wip** y no está pensado para lanzar al público; funciona en un entorno privado donde solo usuarios de confianza prueban las rondas. Los principales logros son:

- Una interfaz de usuario fluida y personalizable que reemplazó al rígido grid de Gradio.  
- Un sistema de feedback inmediato que permite ajustar la dificultad en despues de cada ronda.  
- Un flujo completo de desarrollo que demostró que se puede orquestar la visión del producto usando LLMs locales sin depender de APIs externas.  

Las limitaciones son claras:

- Ollama no corre en la Raspberry Pi, por lo que la IA necesita un servidor externo.  
- El proceso de generación de prompts todavía depende de la Gem y no está automatizado.  
- No hay métricas cuantitativas; la validación se basa en feedback de usuarios de prueba.  

En conclusión, *Marl Flow* es una prueba de concepto que muestra que la traducción en tiempo real puede ser práctica con IA local, pero requiere un equipo de hardware más robusto y un flujo de prompts más sólido para pasar de un prototipo privado a una herramienta pública.