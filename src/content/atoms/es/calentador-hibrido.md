---
title: "Gestión Térmica Híbrida (Solar + Gas)"
shortTitle: "GESTI_N_T_RMICA"
description: "Gestión Térmica Híbrida (Solar + Gas) - Proyecto Maker"
date: 2025-01-10
draft: true
icon: "solar_power"
stack: ["ESPHome", "Sensores DS18B20", "Plomería", "Home Assistant"]
status: "done"
type: "ENERGY"
---

## 🎯 El Desafío
Vivir con un calentador solar tiene dos problemas:
1.  **Días Nublados:** El agua no alcanza la temperatura.
2.  **Desperdicio de Gas:** Si tienes un boiler de respaldo automático, este suele encenderse incluso cuando el agua solar ya está caliente, desperdiciando gas inútilmente.
**El Objetivo:** Usar gas SOLO cuando la termodinámica solar falle.

## 💡 La Solución
Un sistema de **bypass inteligente** monitoreado por sensores de temperatura.

### ⚙️ Arquitectura Hidráulica
El agua baja del calentador solar y pasa por un nodo de decisión antes de entrar a la red de la casa.
1.  **Sensor de Entrada:** Un termómetro digital (DS18B20 encapsulado en acero inoxidable) mide la temperatura del agua solar en tiempo real.
2.  **Lógica de Home Assistant:**
    *   Si T > 40°C -> El agua va directo a la ducha. (Cero consumo de gas).
    *   Si T < 40°C -> El flujo se desvía al calentador de paso para darle el "delta" de calor que falta.

## 🛠️ Implementación Técnica
*   **Cerebro:** ESP32 (El mismo que controla la bomba o uno dedicado en el nodo hidráulico).
*   **Sensores:** **DS18B20** (Protocolo 1-Wire). Alta precisión y resistencia al agua.
*   **Integración:** Home Assistant muestra gráficas de "Ahorro Solar".

## 🧪 Impacto
*   **Ahorro Económico:** Reducción del consumo de gas en un **80%** anual.
*   **Confort:** El usuario nunca sabe qué sistema está usando, el agua siempre sale caliente.
