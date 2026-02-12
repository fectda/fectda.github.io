---
title: "Water Supply Automation (Zero Friction)"
shortTitle: "WATER_SUPPLY_AU"
description: "Water Supply Automation (Zero Friction) - Proyecto Maker"
date: 2024-06-15
draft: true
icon: "hardware"
stack: ["ESPHome", "Home Assistant", "Power Electronics", "Hydraulics"]
status: "done"
type: "MAKER"
---

**Category:** Atoms / IoT / Critical Infrastructure
**Status:** Operational (Version 3.0)
**Philosophy:** "Don't Get Used to Discomfort"
## 🎯 The Challenge (The Discomfort)
The house's original state presented a classic developing-world problem: manual water supply.
1.  **Friction:** Running out of water mid-shower.
2.  **Inefficiency:** Climbing to the roof to check levels or manually switching the pump, leading to overflows (waste) or air in the pipes (pump damage).
3.  **The Mantra:** Accepting "that's just how life is" was unacceptable. Water must be a transparent utility, like electricity.

## 💡 The Solution (Evolutionary Engineering)
The system wasn't bought; it was iterated. It went through three stages of technological maturation to reach total autonomy.

### 🔄 System Evolution
1.  **Stage 1 (Mechanical):** Installation of standard electrical float switches (tank and cistern) in series. Robust but "dumb." No monitoring or remote override.
2.  **Stage 2 (Connected):** Integration of a smart relay (Sonoff/Shelly) for remote control.
    *   *Failure:* Reliance on the cloud and latency issues.
3.  **Stage 3 (Local Sovereignty - Current State):**
    *   **Brain:** **ESP32** running **ESPHome**. 100% local logic.
    *   **Sensors:** Mechanical floats replaced/augmented with ultrasonic (or pressure) level sensors for precise telemetry (0-100%) in Home Assistant.
    *   **Actuation:** Industrial contactor (to protect electronics from the pump's inductive spike) triggered by the ESP.

## 🛠️ Technical Specs
*   **Hardware:** 1HP Centrifugal Pump + Pressurizer at tank output.
*   **Safety:** "Empty Cistern" hard-logic kill switch to prevent dry running.
*   **Software:** Home Assistant Automation:
    *   *Logic:* If Tank < 40% AND Cistern > 20% -> START.
    *   *Logic:* If Time > 10 PM -> STOP (Silent Mode).

## 🧪 Results
*   **Human Intervention:** 0%. The system operates autonomously.
*   **Availability:** 100%. We haven't run out of water since V3 deployment.
*   **Feature:** Alexa notifies us if the cistern level drops critically, allowing us to order a water truck *before* the crisis hits.
