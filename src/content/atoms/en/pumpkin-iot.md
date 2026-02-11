---
title: "IoT Axolotl-Pumpkin"
shortTitle: "IOT_PUMPKIN"
description: "An interactive Halloween pumpkin that uses AI to tell horror stories and reacts to presence via mmWave radar."
date: 2025-10-31
stack: ["ESP32", "ESPHome", "Home Assistant", "LD2410", "AI"]
status: "done"
type: "HARDWARE"
images: []
icon: "sensors"
---

## 🎯 The Challenge
Create an interactive Halloween decoration beyond simple lights. A carved pumpkin (Axolotl design) integrated into **Home Assistant** that reacts to presence and tells AI-generated horror stories.

## 💡 The Solution
An **ESP32** brain hidden inside the pumpkin orchestrating peripherals via **ESPHome**:
*   **Sensors:** **LD2410** mmWave radar.
*   **Voice:** I2S DAC (PCM5102A) + Amplifier.

### ⚙️ Automation Flow
1.  **Trigger:** Presence detected.
2.  **Ambience:** Lights off via HA.
3.  **Generation:** AI Prompt ("You are a cursed Axolotl...").
4.  **Action:** Pumpkin speaks via TTS.

## 🔧 Post-Mortem
1.  **Latency:** AI Generation + TTS took too long, killing the scare factor.
2.  **Glitches:** ESP32 struggled with WiFi + Audio streaming simultaneously.
3.  **Biology:** Real pumpkin rotted in 1.5 weeks.

## 🧪 Verdict
**Partial Success.** Technical integration worked, UX suffered from latency.
