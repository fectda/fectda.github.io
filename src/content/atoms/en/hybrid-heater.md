---
title: "Hybrid Thermal Management (Solar + Gas)"
shortTitle: "HYBRID_THERMAL_"
description: "Hybrid Thermal Management (Solar + Gas) - Proyecto Maker"
date: 2025-01-10
draft: true
icon: "solar_power"
stack: ["ESPHome", "DS18B20 Sensors", "Plumbing", "Home Assistant"]
status: "done"
type: "ENERGY"
---

**Category:** Atoms / Sustainability / Home Automation
**Status:** Operational
## 🎯 The Challenge
Living with a solar heater presents two problems:
1.  **Cloudy Days:** Water doesn't reach target temperature.
2.  **Gas Waste:** Automatic backup heaters often fire up even when solar water is already hot, wasting fuel unnecessarily.
**The Goal:** Use gas ONLY when solar thermodynamics fail.

## 💡 The Solution
A **smart bypass** system monitored by temperature sensors.

### ⚙️ Hydraulic Architecture
Water descends from the solar collector and passes through a decision node before entering the house network.
1.  **Input Sensor:** A digital thermometer (DS18B20 encapsulated in stainless steel) measures solar water temperature in real-time.
2.  **Home Assistant Logic:**
    *   If T > 40°C -> Water goes straight to the shower. (Zero gas consumption).
    *   If T < 40°C -> Flow is diverted to the tankless heater to add the missing heat delta.

## 🛠️ Technical Implementation
*   **Brain:** ESP32 (Shared with the pump node or dedicated).
*   **Sensors:** **DS18B20** (1-Wire Protocol). High precision and waterproof.
*   **Analytics:** Home Assistant dashboard displays "Solar Savings" graphs.

## 🧪 Impact
*   **Financial Savings:** **80%** reduction in annual gas consumption.
*   **UX:** The user never knows which system is active; the water is always hot.
