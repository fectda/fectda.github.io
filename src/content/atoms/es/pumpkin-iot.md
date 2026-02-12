---
title: "IoT Axolotl-Pumpkin (Halloween 2025)"
shortTitle: "IOT_AXOLOTL_PUM"
description: "IoT Axolotl-Pumpkin (Halloween 2025) - Proyecto Maker"
date: 2025-10-31
draft: true
icon: "lightbulb"
stack: ["ESP32", "ESPHome", "Home Assistant", "LD2410", "PCM5102A"]
status: "done"
type: "IOT"
---

## 🎯 El Desafío
Crear una decoración de Halloween interactiva que fuera más allá de "prender luces". El objetivo era integrar una calabaza tallada (con diseño de Ajolote y branquias) al ecosistema de **Home Assistant** para que reaccionara a la presencia humana y contara historias generadas por IA en tiempo real.

## 💡 La Solución (The Spooky Setup)
Un cerebro **ESP32** escondido dentro de la calabaza orquestando todos los periféricos mediante **ESPHome**:
*   **Detección:** Sensor de presencia **LD2410** (tecnología de radar mmWave para precisión).
*   **Atmósfera:** 3 LEDs controlados para simular "vida".
*   **Voz:** Módulo DAC I2S (PCM5102A) + Amplificador (HW-104) + Bocinas recicladas.

### ⚙️ El Flujo de Automatización
1.  **Trigger:** Alguien entra a la habitación (LD2410 detecta).
2.  **Ambiente:** Home Assistant apaga las luces principales del cuarto.
3.  **Generación:** Se envía un prompt a la IA: *"Eres un Ajolote maldito, cuenta una historia breve de terror"*.
4.  **Síntesis:** El texto se convierte a audio (TTS).
5.  **Acción:** La calabaza reproduce el audio y sincroniza sus luces.

## 🔧 Retos y Obstáculos (Post-Mortem)
1.  **Latencia del Miedo:** El ciclo *Generar Historia -> TTS -> Streaming* era demasiado lento. La víctima esperaba en la oscuridad incómoda antes de que pasara algo.
    *   *Intento de Solución:* Usar audios pre-grabados. Fue rápido, pero se volvió repetitivo y aburrido.
2.  **Audio Entre-cortado:** El ESP32 luchaba para manejar la pila WiFi, los sensores y el buffer de audio I2S simultáneamente, causando "glitches" sonoros (que daban miedo, pero no del tipo intencional).
3.  **El Factor Biológico:** Al ser una calabaza real tallada, la humedad y el calor de la electrónica aceleraron su descomposición. El proyecto murió por hongos en 1.5 semanas.

## 🧪 Aprendizajes
*   Integrar audio de alta calidad en ESP32 junto con sensores pesados requiere optimización de núcleos (multithreading en ESPHome).
*   La latencia mata la inmersión. Para interacciones en tiempo real, el pipeline debe ser <1 segundo.
