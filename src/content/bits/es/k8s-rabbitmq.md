---
title: "Sistema Distribuido Escalable (K8s + RabbitMQ)"
description: "Arquitectura orientada a eventos con autoescalado usando Kubernetes y RabbitMQ para procesamiento asíncrono"
date: 2025-09-10
draft: true
stack: ["Kubernetes", "RabbitMQ", "Docker", "Python", "Go"]
status: "done"
progress: 5
type: "SOFTWARE"
---

## 🎯 El Desafío
Necesidad de procesar grandes volúmenes de mensajes/tareas de manera asíncrona, donde la carga de trabajo es variable y se requiere alta disponibilidad.

## 💡 La Solución
Desarrollo de una arquitectura orientada a eventos utilizando **RabbitMQ** como broker de mensajería y **Kubernetes** para la orquestación de contenedores.

### ⚙️ Mecánica
*   **Pipelines:** Workers independientes consumen tareas de colas específicas.
*   **Autoescalado:** Implementación de HPA (Horizontal Pod Autoscaler) basado en métricas de carga de trabajo (longitud de cola o uso de CPU).

## 🧪 Resultados
Sistema resiliente capaz de absorber picos de tráfico escalando pods automáticamente y reduciendo recursos en periodos de inactividad.

*(Pendiente: Diagrama de flujo de mensajes)*
