---
title: "Adaptador de Sierra DeWalt para Riel Truper"
description: "Base personalizada impresa en 3D que permite usar una sierra circular DeWalt sobre un riel de guía Truper"
date: 2025-11-20
draft: false
stack: ["FreeCAD", "Impresión 3D", "PETG", "Diseño Mecánico"]
status: "done"
---

# 🪚 Adaptador de Sierra DeWalt para Riel Truper

**Categoría:** Maker / Impresión 3D / Herramientas
**Estado:** Funcional (v1.0)
**Stack:** FreeCAD, Impresión 3D (PETG)

---

## 🎯 El Desafío (The Problem)
Tenía una sierra circular **DeWalt DCS570** (elegida estratégicamente por compatibilidad de discos con mi inglete) y conseguí un **riel de guía Truper MAX-SC-G** en oferta.
**El problema:** Son marcas incompatibles. La DeWalt DCS570 no está diseñada para rieles, y cortar recto a mano alzada es impreciso.
**El objetivo:** Crear un adaptador que permita usar la sierra sobre el riel sin modificar la herramienta permanentemente.

## 💡 La Solución (Engineering)
Diseñé en **FreeCAD** una base personalizada que se acopla a la zapata de la sierra y tiene el perfil negativo del riel Truper.

### 🔧 Retos Técnicos & Iteraciones
1.  **Fijación Magnética Fallida:** La idea original era usar imanes para "pegar" el adaptador a la base, pero descubrí (a la mala) que la zapata de la sierra es de **aluminio**.
    *   *Solución:* Diseño por ajuste a presión (Press-fit). El adaptador entra justo y se mantiene en su lugar, permitiendo usar la sierra con o sin el riel.
2.  **Volumen de Impresión:** La pieza completa era más grande que la cama de mi impresora.
    *   *Solución:* Diseño modular. Corté el modelo en partes y diseñé un sistema de ensamble para unirlas después de imprimir.
3.  **Protector del Disco:** El protector de seguridad plástico choca levemente con el riel al iniciar el corte.
    *   *Workaround:* Requiere levantarlo manualmente al inicio (fricción operativa aceptable).

## 🛠️ Especificaciones
*   **Material:** PETG (Por resistencia mecánica y térmica).
*   **Diseño:** FreeCAD (Paramétrico).
*   **Archivos:** [Pendiente: Link a MakerWorld/Printables].

## 🧪 Resultados (Review)
*   **Precisión:** Excelente. Los cortes son rectos gracias al riel.
*   **Deslizamiento:** Funcional. No es "mantequilla" (tiene fricción), pero no se atora. Cumple el propósito.

## 📸 Galería
*(Fotos del adaptador impreso, el ensamble y la sierra montada en el riel).*
