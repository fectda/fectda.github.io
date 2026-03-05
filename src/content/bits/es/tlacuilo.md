---
date: 2026-02-12
demo_url: ''
description: Proyecto de orquestación de contenidos para portafolio
draft: false
progress: 5
repository_url: https://github.com/fectda/tlacuilo
stack:
- Python
- FastAPI
- Vue 3
- Docker
- NVIDIA GPU
- Ollama
- ComfyUI
status: done
tags:
- draft
title: tlacuilo
type: SOFTWARE
---

## El Desafío de Publicar 50 Proyectos

La idea de tlacuilo nace de la frustración de tener un portafolio vacío tras terminar un proyecto. Tenía que tomar fotos, redactar textos, generar borradores y subir todo manualmente. Eso implicaba, para cada proyecto, pasar por un flujo interminable de copiar‑pegar entre la web de la IA, el editor de código y el explorador de archivos. El resultado era:  

- Cada proyecto requería **horas** de trabajo para textos e imágenes.
- Las imágenes generadas por IA siempre tenían **marca de agua** y no quedaban bien para publicar.
- Con mas de 50 proyectos, el proceso se vuelve inabordable y el tiempo se multiplica.

El objetivo era un ciclo de vida de la documentación proyecto totalmente automatizado, con publicación directa al portafolio, con la minina interacción manual y sin marcas de agua.

## La Solución: Agentes, Fracasos y la Última Palabra

Para lograrlo intenté usar un ecosistema de agentes: orquestador, infra, backend, frontend, prompt‑engineer, arquitecto, genesis, ComfyUI‑expert y QA. Cada agente debía asumir un rol, pero el resultado fue la siguiente saga:

1. **Instalación de ComfyUI en Docker** con GPU NVIDIA: rápido, gracias a mi experiencia con contenedores.
2. **Prueba con agentes**: el orquestador y el QA solo sirvieron como anotaciones; los agentes no se comunicaban entre sí. El flujo de datos se perdió y los prompts no eran aceptados.
3. **Iteraciones de refactorización**: tuve que borrar código de los agentes, reescribir funciones, y en muchas ocasiones terminar con la lógica escrita a mano. El tiempo de desarrollo se disparó, pasando de **un par de días** a **mas de 14 horas diarias por dos semanas** sin descanso.
4. **Fallas de los LLMs**: los modelos de Ollama se comportaron de forma inesperada, los resultados eran pobres y no seguían instrucciones; al probarlos uno a uno, la única solución estable fue iterar hasta encontrar una combinación de modelos y prompts estables.
5. **Persistencia de la lógica**: el backend y el frontend empezaron a mezclar dependencias y a tocar archivos del otro. El único momento en que un servicio quedaba funcional era tras una ronda de revisiones y correcciones manuales.

El resultado: una aplicación funcional que permite crear un proyecto, pasar por los distintos estados (entrevista, generación de borradores, generación de imágenes, traducción, publicación) y que se publica en el portafolio mediante un commit y push simples. Sin embargo, la calidad de los resultados todavía es variable el proceso sigue siendo **iterativo en varios pasos** y tengo que ir haciendo actualizaciones al mismo mientras vamos documentado nuevo proyectos.

## Arquitectura y Especificaciones

| Componente | Tecnología | Comentario |
| :--- | :--- | :--- |
| **Frontend** | Vue 3 + Vite + TailwindCSS  | Interfaz de usuario para la entrevista y la gestión de proyectos. |
| **Backend** | FastAPI (Python) | API de orquestación y generación de contenidos. |
| **Infraestructura** | Docker, NVIDIA GPU | Contenedores para FastAPI, Vue, requiere servicios de ComfyUI y Ollama que no son administrados por este proyecto. |
| **Modelos LLM** | Ollama (local) | Uso los modelos gpt-oss y qwen3-vl. |
| **Generación de Imágenes** | ComfyUI | Generación de imágenes a partir de prompts y procesamiento de archivos. |
| **CI/CD** | GitHub Actions | Despliegue del portafolio: commit de archivos Markdown e imágenes y push a GitHub Pages. |
| **Persistencia** | Git + Markdown | Cada proyecto se almacena como un archivo Markdown en `src/content/...`. |
| **Validación de datos** | LLM | Se usa un LLM para validar la estructura narrativa de los Markdown, sin reglas rígidas. |
| **Localización** | LLM (o modelo local) | Traducción de contenidos al inglés después de la generación en español. |

## Resultados

- **Tiempo por proyecto**: meno de 2 horas (texto + imágenes).  
- **Imágenes**: 3 a 5 imágenes por proyecto, 1–2 min cada una; y se puede iterar sobre ellas.  
- **Pruebas**: Se eliminaron todas las pruebas unitarias debido a los problemas con los agentes; se mantienen pruebas por servicio, end‑to‑end y mecanismos de depuración de prompts.  
- **Publicación**: Se logra con un simple commit y push; no hay un pipeline CI/CD complejo, solo GitHub Actions que despliega la página.  
- **Calidad**: Funcional, pero no perfecta; sigue requiriendo intervención y corrección de prompts cada que se encuentra un nuevo problema en la generación de contenido.  
- **Lecciones aprendidas**:  
  - La orquestación de agentes sin comunicación interna es inviable.  
  - La automatización completa de los LLMs es posible, pero no es el objetivo de este proyecto **calidad antes que cantidad**.  
  - Un flujo de trabajo de muchas horas por proyecto no es sostenible para mas de 50 proyectos.  
  - La documentación y los prompts deben ser claros y restrictivos; sin ellos, el agente se comporta como un “Juanito” que hace lo que le ordenes sin sentido.  

**Próximos pasos**: pulir los system prompts para reducir iteraciones y lograr que los LLMs generen conteindo con mayor consistencia y menos iteracciones. Para la fase de mantenimiento se eliminara la orquestación automática y se pasara a la manual hasta encontrar una nueva arquitectura de orquestación.

---