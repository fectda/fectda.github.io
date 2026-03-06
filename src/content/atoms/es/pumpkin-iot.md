---
date: 2025-10-31
description: Una calabaza tallada en forma de ajolote que, gracias a un ESP32 y Home
  Assistant, detecta personas, apaga las luces, genera historias de terror en tiempo
  real y las reproduce con audio y luces sincronizadas.
draft: false
icon: lightbulb
shortTitle: Calabaza Ajolote
stack:
- ESP32
- ESPHome
- Home Assistant
- LD2410
- PCM5102A
status: done
title: Calabaza Ajolote Interactiva
type: IOT
---

## El Reto  
La idea nació de una costumbre familiar: algunos años tallamos una calabaza para Halloween. Este año quería que la calabaza fuera más que una pieza decorativa. El objetivo era integrarla al ecosistema de **Home Assistant** para que detectara la presencia de personas, contara historias de terror generadas por IA y responder con audio y luces. La limitación era el tiempo: teníamos solo una semana antes de la fiesta, y el material era una calabaza bruja recién tallada, con branquias de plastilina, no un molde prefabricado.

## La Solución  
El cerebro del proyecto quedó en un **ESP32** programado con **ESPHome**. Este módulo orquestaba todo el ecosistema:  
- **Detección**: sensor **LD2410** de radar mmWave.  
- **Iluminación**: tres LEDs que simulaban “vida” de ajolote.  
- **Audio**: módulo DAC I2S **PCM5102A**, un amplificador **HW‑104** y bocinas recicladas.  

El flujo de automatización, manejado por Home Assistant, era:  
1. El LD2410 detecta movimiento y envía un evento.  
2. HA apaga las luces de la habitación.  
3. HA manda un prompt a la IA: “Eres un Ajolote maldito, cuenta una historia breve de terror”.  
4. La respuesta se convierte a audio (TTS).  
5. El ESP32 reproduce el audio y enciende las luces en un ritmo predefinido.

### Proceso de Construcción  
1. **Diseño**: no hubo CAD; se diseñó la ubicación de los componentes sobre la calabaza con cinta y marcadores.  
2. **Fabricación**: se soldaron los leds, el LD2410, y la PCM5102 a cables Dupont y se conectaron a pines ESP32. El HW‑104 se le contacron la bocinas y se le conecto la entrada a un jack 3.5mm para poder conectarlo a la PCM5102.
3. **Ensamble**: se escondió todo dentro de la calabaza y se fijaron los LEDs con cinta aislante. Se taparon por dentro los ojos y boca de la calabaza tela blanca para que no se vieran su interior electrónico pero la luz de los leds pudiera pasar.

## Retos y Obstáculos  
- **Audio intermitente**: el ESP32 tenia problemas ya que en algunas ocasiones el audio se paraba como si estuviera cargando un bufferr.  
- **Potencia insuficiente de las bocinas**: las bocinas pequeñas no respondían al PCM5102A. Con el HW‑104 se logró volumen audíble, pero con ruido asi que se tuvo que conectar por medio de un jack 3.5mm que elimino la interferencia pero la solución es poco elegante.  
- **Duración de la calabaza**: la humedad y el calor de los componentes aceleraron la descomposición, y la calabaza quedó inutilizable tras 1 .5 semanas.  
- **Latencia del ciclo TTS**: el tiempo de generar, convertir y reproducir la historia era demasiado lento, haciendo que la experiencia fuera frustrante. Se intentó usar audios pre‑grabado, pero el resultado no era lo que se esperaba.

## Aprendizajes  
- Integrar audio de alta calidad en un ESP32 con sensores que usan Wi‑Fi exige optimización de núcleos y manejo cuidadoso del buffer I2S.  
- La latencia del pipeline debe mantenerse baja para que la interacción sea inmersiva.  
- Los materiales orgánicos (calabaza) no son ideales para proyectos que requieren electrónica; pero lo hacen maravilloso debido a su  efimeridad.  
- El proceso de debugging rápido se vio limitado por el tiempo; se debe dejar margen para pruebas de audio y memoria antes de la exposición.

## Veredicto  
El proyecto funcionó en su forma más básica: la calabaza detectó movimiento, apagó las luces, genero las historias, reproducía audio, aunque con interrupciones y mucho retraso. La experiencia fue divertida pero muy frágil.  
Limitaciones: duración de la calabaza, latencia en audio, falta de sincronización de la luz y la historia.  

En definitiva, la idea tenía potencial; los obstáculos técnicos mostraron la necesidad de planear más a fondo la parte de audio y la integración de componentes de alto consumo dentro de un ESP32 limitado.