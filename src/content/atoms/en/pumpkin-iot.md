---
date: 2025-10-31
description: A pumpkin carved into an axolotl shape that, thanks to an ESP32 and Home
  Assistant, detects people, turns off lights, generates real‑time horror stories,
  and plays them with synchronized audio and lighting.
draft: false
icon: lightbulb
shortTitle: Axolotl Pumpkin Iot
stack:
- ESP32
- ESPHome
- Home Assistant
- LD2410
- PCM5102A
status: done
title: IoT Axolotl Pumpkin
type: IOT
---

## The Challenge  
The idea stemmed from a family tradition: every few years we carve a pumpkin for Halloween. This year, the goal was to turn the pumpkin into more than a decorative piece. We wanted to integrate it into the **Home Assistant** ecosystem so that it could detect the presence of people, tell AI‑generated horror stories, and respond with audio and lighting. The constraint was time: we had only a week before the party, and the material was a freshly carved witch pumpkin, with clay gills, not a pre‑made mold.

## The Solution  
The brain of the project was an **ESP32** programmed with **ESPHome**. This module orchestrated the entire ecosystem:  
- **Detection**: mmWave radar sensor **LD2410**.  
- **Lighting**: three LEDs that simulated the axolotl’s “life”.  
- **Audio**: I2S DAC module **PCM5102A**, a **HW‑104** amplifier, and recycled speakers.

The automation flow, handled by Home Assistant, was:  
1. The **LD2410** detects motion and sends an event.  
2. HA turns off the room lights.  
3. HA sends a prompt to the AI: “You are a cursed axolotl, tell a brief horror story.”  
4. The response is converted to audio via TTS.  
5. The **ESP32** plays the audio and lights up the LEDs in a predefined rhythm.

### Construction Process  
1. **Design**: No CAD; component placement was mapped on the pumpkin using tape and markers.  
2. **Manufacturing**: LEDs, the **LD2410**, and the **PCM5102** were soldered to Dupont cables and connected to ESP32 pins. The **HW‑104** was wired to the speakers, and its input was connected to a 3.5 mm jack to interface with the **PCM5102**.  
3. **Assembly**: Everything was hidden inside the pumpkin and the LEDs were secured with electrical tape. The pumpkin’s eyes and mouth were covered from the inside with white fabric so the electronics were concealed while allowing LED light to pass.

## Challenges and Obstacles  
- **Intermittent audio**: the ESP32 had issues where the audio would pause as if it were loading a buffer.  
- **Insufficient speaker power**: the small speakers did not respond to the **PCM5102A**. With the **HW‑104** we achieved audible volume, but with noise; a 3.5 mm jack was used to eliminate interference, though the solution is inelegant.  
- **Pumpkin longevity**: humidity and component heat accelerated decomposition, rendering the pumpkin unusable after 1.5 weeks.  
- **TTS cycle latency**: generating, converting, and playing the story was too slow, making the experience frustrating. Pre‑recorded audio was attempted, but the result was not as expected.

## Learnings  
- Integrating high‑quality audio on an ESP32 with Wi‑Fi sensors requires core optimization and careful I2S buffer handling.  
- Pipeline latency must stay low to keep the interaction immersive.  
- Organic materials (pumpkin) are not ideal for electronics‑requiring projects; yet they add charm through their ephemerality.  
- Rapid debugging was time‑constrained; a buffer should be left for audio and memory testing before the showcase.

## Verdict  
The project functioned in its most basic form: the pumpkin detected motion, turned off lights, generated stories, and played audio, albeit with interruptions and significant delay. The experience was fun but fragile. Limitations: pumpkin longevity, audio latency, lack of synchronization between light and story. Overall, the idea had potential; the technical obstacles highlighted the need for better audio planning and integration of high‑consumption components within a limited ESP32 platform.