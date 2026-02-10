# 🎄 Christmas Lights Hack (ESP8266 + H-Bridge)

**Category:** Maker / IoT / Reverse Engineering
**Status:** Paused
**Hardware:** Cheap LED curtains, ESP8266, Motor Driver

---

## 🎯 The Challenge
Cheap commercial LED curtains have dumb controllers. We wanted to integrate them into the smart home ecosystem.

## 💡 The Solution
Reverse-engineered the controller and found they use an **H-Bridge** to flip polarity for effects.
*   **The Hack:** Replaced the controller with a Motor Driver connected to an **ESP8266** running **ESPHome**.
*   **Result:** Full control via Home Assistant.

## 🚧 Current Blocker
Soldering fumes require ventilation (Triggered the **Fume Extractor** project).
