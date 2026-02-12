---
title: "Project Voice (AI Roleplay Conversacional)"
description: "Simulador de conversaciones 100% en inglés con IA para practicar fluidez oral en escenarios inmersivos"
date: 2026-01-15
draft: true
stack: ["Faster-Whisper", "Piper TTS", "Ollama", "Docker", "Python"]
status: "wip"
progress: 3
type: "AI_AGENT"
---

## 🎯 El Problema (The Gap)
La barrera final del aprendizaje de idiomas no es el vocabulario, es la **fluidez oral** y la **inhibición**. Puedes dominar la gramática escrita, pero "congelarte" en una conversación real. Hacía falta un entorno seguro (sin juicio humano) para practicar la improvisación y la escucha activa en escenarios inmersivos.

## 💡 La Solución
Un simulador de conversaciones **100% en inglés**. A diferencia de otros tutores, aquí no hay traducción ni puentes al español. Es inmersión total.
Tú hablas, la IA te escucha, te entiende y te responde con su propia voz, manteniendo un personaje consistente (e.g., el barista impaciente, el reclutador técnico, el vecino ruidoso).

## 🛠️ Arquitectura de Audio (The Voice Stack)
El reto técnico principal de este proyecto es la **Latencia**. Para mantener la ilusión de una conversación fluida, el ciclo "Escuchar -> Pensar -> Hablar" debe ser casi instantáneo.

El sistema orquesta 3 contenedores Docker especializados:

1.  **Oído (STT):** **Faster-Whisper**.
    *   Modelo de reconocimiento de voz altamente optimizado. Transcribe el audio del usuario a texto en tiempo real.
2.  **Cerebro (LLM):** **Ollama**.
    *   Ejecuta el modelo de lenguaje localmente. Mantiene el contexto del rol y genera la respuesta textual.
3.  **Boca (TTS):** **Piper TTS**.
    *   Motor de síntesis de voz ligero y rápido. Convierte la respuesta de texto en audio natural con latencia mínima.

## ⚙️ Flujo de Usuario
1.  **Generación de Escenarios:** El sistema propone 3 situaciones de Roleplay dinámicas.
2.  **Inmersión:** El usuario elige una y la sesión inicia. Todo es en inglés.
3.  **Interacción:**
    *   Usuario habla 🎤 -> Whisper transcribe.
    *   Texto entra al LLM -> LLM responde como personaje.
    *   Respuesta entra a Piper -> Audio sale 🔊.

## 🧠 Estado Actual
El proyecto está en fase de integración de componentes para reducir el tiempo de respuesta (Round-trip latency) y mejorar la naturalidad de la voz.
