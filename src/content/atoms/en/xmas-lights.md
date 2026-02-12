---
title: "Christmas Lights Hack"
shortTitle: "CHRISTMAS_LIGHT"
description: "Christmas Lights Hack - Proyecto Maker"
date: 2024-12-10
draft: true
icon: "hardware"
stack: ["ESP8266", "Reverse Engineering", "Electronics", "ESPHome"]
status: "wip"
type: "MAKER"
---

## 🎯 The Challenge
Cheap commercial LED curtains have dumb controllers. We wanted to integrate them into the smart home ecosystem.

## 💡 The Solution
Reverse-engineered the controller and found they use an **H-Bridge** to flip polarity for effects.
*   **The Hack:** Replaced the controller with a Motor Driver connected to an **ESP8266** running **ESPHome**.
*   **Result:** Full control via Home Assistant.

## 🚧 Current Blocker
Soldering fumes require ventilation (Triggered the **Fume Extractor** project).
