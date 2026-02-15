---
title: "Altépetl Digital"
description: "Meta-proyecto de identidad digital. De la falla de 'Obsidian Telemetry' al sistema 'Tlacuilo'. Orquestación de enjambres de IA y refactorización humana."
date: 2026-02-04
draft: false
stack: ["Astro", "TailwindCSS", "GitHub Actions","TypeScript", "AI Swarm", "System Prompting", "Meta-Prompting"]
status: "done"
progress: 5
type: "SOFTWARE"
repository_url: "https://github.com/fectda/fectda.github.io"
demo_url: "https://fectda.github.io"
---

## El Desafío
La necesidad inicial era simple: generar un portafolio. Sin embargo, al enfrentar el mercado, se hizo evidente que los formatos estándar están diseñados para perfiles "unitalento". Las plantillas y estructuras existentes asumen que eres solo una cosa: desarrollador, directivo o creativo.

Para un perfil híbrido y complejo, este enfoque es estructuralmente injusto e insuficiente. Intentar encajar mi trayectoria en un CV lineal o en un portafolio *bootstrap* resultaba en una mutilación de la identidad. El reto no era técnico, sino de arquitectura de información: ¿Cómo representar un universo de habilidades (Proyectos) sin que el formato diluya la potencia del contenido?

## La Solución: Orquestación de Agentes
La estrategia no fue lineal. Se diseñó una arquitectura de múltiples agentes de IA operando en cadena (Chain-of-Thought) para resolver cada capa del problema.

### 1. El Arquitecto de Carrera (System Prompting)
El primer paso fue crear un experto sintético mediante un *System Prompt* complejo. A este agente no se le pidió código, se le alimentó con la totalidad de mi trayectoria (CV crudo, historia, habilidades) y se le asignó el rol de "Arquitecto de Identidad".
* **Diagnóstico:** Dictaminó que una lista de *skills* era irrelevante. La única forma de validar un perfil polímata es mediante evidencia empírica (Los proyectos).
* **Estrategia:** Definió la estructura trinitaria (Atoms, Bits, Mind) y seleccionó el stack tecnológico (Astro + GitHub Pages) priorizando la eficiencia sobre mi familiaridad previa.

### 2. El Meta-Prompting (AI para AI)
Las herramientas de generación de código y diseno requieren instrucciones extremadamente precisas para no alucinar.
Para mitigar esto, creamos un **Agente Intermediario**: una IA dedicada exclusivamente a la generación de *prompts* técnicos.
* **Función:** Traducir los conceptos abstractos de identidad ("Mexica", "F1", "Brutalismo") a instrucciones técnicas que una IA pudiera interpretar (clases de Tailwind, estructuras HTML, paletas de colores hexadecimales).
* **Resultado:** Generamos *Meta-Prompts* para controlar las salidas de las IA, intentando forzar una estética que la IA por defecto tiende a suavizar.

### 3. El Pivote Cultural (De Obsidian a Tlacuilo)
El primer intento ("Obsidian Telemetry") fracasó porque el prompt cultural fue débil. La IA interpretó "Mexica" como decoración turística.
Ajustamos la estrategia de prompting para inyectar contexto histórico profundo: referencias al *Tlacuilo* (escriba), al *Altépetl* (Ciudad-Estado) y a la geometría sagrada (*Nahui Ollin*). Esto permitió que el diseño final dejara de ser un *theme* y se convirtiera en un sistema de creencias visuales.

## Ingeniería y Refactorización
A pesar de la sofisticación en los prompts, la implementación técnica final demostró las limitaciones de la generación automática ("The Hallucination Barrier").

### El Fracaso de la Automatización
Incluso con los *Meta-Prompts* optimizados, los agentes generaron código sucio. La máquina logró la estética, pero falló en la arquitectura. Entregó un monolito de código *basura* insostenible.

### La Intervención (Human-in-the-Loop)
Tuve que asumir el control total del repositorio para sanear la salida de la IA.
1.  **Limpieza:** Se descartó el código basura generado automáticamente.
2.  **Arquitectura:** Se refactorizó el HTML estático hacia una arquitectura de **Componentes Astro** reutilizables.
3.  **Optimización:** Se eliminaron estilos *hardcodeados* para implementar un sistema de diseño coherente en TailwindCSS, reduciendo drásticamente el peso del sitio.
4.  **Despliegue:** Se configuró CI/CD en GitHub Pages.

## Veredicto
Este proyecto demuestra que la IA es un multiplicador de fuerza, pero no un sustituto del criterio.
* **Los Prompts** resolvieron el bloqueo creativo y la estrategia de identidad.
* **El Humano** resolvió la ingeniería, la calidad y la coherencia estructural.

El **Altépetl Digital** no busca validación externa; establece sus propias reglas de juego. Funciona como un filtro eficaz: descarta a quien busca simplicidad y recompensa a quien entiende la densidad.