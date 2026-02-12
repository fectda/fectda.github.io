---
title: "Automatización de Suministro de Agua (Cero Fricción)"
shortTitle: "AUTOMATIZACI_N_"
description: "Automatización de Suministro de Agua (Cero Fricción) - Proyecto Maker"
date: 2024-06-15
draft: true
icon: "hardware"
stack: ["ESPHome", "Home Assistant", "Power Electronics", "Hydraulics"]
status: "done"
type: "MAKER"
---

**Filosofía:** "No te acostumbres a la incomodidad"
## 🎯 El Desafío (La Incomodidad)
El estado original de la casa presentaba un problema clásico del mundo en desarrollo: suministro de agua manual.
1.  **Fricción:** Quedarse sin agua a mitad de una ducha.
2.  **Ineficiencia:** Subir al techo a revisar niveles o encender la bomba manualmente, resultando en desbordamientos (desperdicio) o aire en las tuberías (daño a la bomba).
3.  **El Mantra:** Aceptar "así es la vida" era inaceptable. El agua debe ser un servicio transparente, como la electricidad.

## 💡 La Solución (Ingeniería Evolutiva)
El sistema no se compró; se iteró. Pasó por tres etapas de maduración tecnológica para alcanzar la autonomía total.

### 🔄 Evolución del Sistema
1.  **Etapa 1 (Mecánica):** Instalación de flotadores eléctricos estándar (tinaco y cisterna) en serie. Robusto pero "tonto". Sin monitoreo ni control remoto.
2.  **Etapa 2 (Conectada):** Integración de un relevador inteligente (Sonoff/Shelly) para control remoto.
    *   *Fallo:* Dependencia de la nube y problemas de latencia.
3.  **Etapa 3 (Soberanía Local - Estado Actual):**
    *   **Cerebro:** **ESP32** ejecutando **ESPHome**. Lógica 100% local.
    *   **Sensores:** Flotadores mecánicos reemplazados/aumentados con sensores ultrasónicos (o de presión) para telemetría precisa (0-100%) en Home Assistant.
    *   **Actuación:** Contactor industrial (para proteger la electrónica del pico inductivo de la bomba) accionado por el ESP.

## 🛠️ Especificaciones Técnicas
*   **Hardware:** Bomba Centífuga de 1HP + Presurizador en salida del tinaco.
*   **Seguridad:** Interruptor de "Cisterna Vacía" por lógica dura para prevenir marcha en seco.
*   **Software:** Automatización en Home Assistant:
    *   *Lógica:* Si Tinaco < 40% Y Cisterna > 20% -> ENCENDER.
    *   *Lógica:* Si Hora > 10 PM -> APAGAR (Modo Silencioso).

## 🧪 Resultados
*   **Intervención Humana:** 0%. El sistema opera autónomamente.
*   **Disponibilidad:** 100%. No nos hemos quedado sin agua desde el despliegue de la V3.
*   **Feature:** Alexa nos notifica si el nivel de la cisterna baja críticamente, permitiéndonos pedir una pipa de agua *antes* de que llegue la crisis.
