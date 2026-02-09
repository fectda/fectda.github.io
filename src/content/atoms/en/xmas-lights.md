---
title: "Hackeo de Luces Navideñas (ESP8266 + Puente H)"
description: "Control inteligente de cortinas LED mediante ingeniería inversa usando ESP8266 y driver de motores"
date: 2025-12-15
draft: false
stack: ["ESP8266", "Puente H", "ESPHome", "Home Assistant", "Soldadura"]
status: "wip"
---

# 🎄 Hackeo de Luces Navideñas (ESP8266 + Puente H)

**Categoría:** Maker / IoT / Ingeniería Inversa
**Estado:** Pausado (En espera del extractor de humo)
**Hardware:** Cortinas LED chinas, ESP8266, Driver de Motores (Puente H)

---

## 🎯 El Desafío
Las cortinas LED comerciales son baratas pero sus controladores son "tontos" y frágiles. Al fallar una, decidimos no solo repararla, sino integrarla al ecosistema inteligente.

## 💡 La Solución (Ingeniería Inversa)
Descubrimos que los LEDs de estas cortinas funcionan invirtiendo la polaridad (AC simulada o cambio de sentido) para generar efectos.
*   **El Hack:** Usar un controlador de motores a pasos (que contiene un **Puente H**) conectado a un **ESP8266**.
*   **Resultado:** Control total de los efectos y encendido desde **ESPHome / Home Assistant**, reutilizando la tira de LEDs de una cortina rota y el cableado de una nueva.

## 🚧 Bloqueo Actual
El proyecto requiere soldar los componentes finales. Al iniciar, notamos la falta de ventilación adecuada para los gases de soldadura, lo que detonó el sub-proyecto del **Extractor de Humo**.
