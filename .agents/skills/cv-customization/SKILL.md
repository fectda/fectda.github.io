---
name: cv-customization
description: Crea versiones personalizadas del CV en LaTeX para vacantes específicas sin alterar el código ni los datos originales.
---

# CV Customization Skill

Esta skill te guía sobre cómo generar versiones personalizadas del currículum de Eduardo para aplicaciones a vacantes específicas. Dado que el proyecto web es de código abierto, **los CVs personalizados nunca deben ser versionados (están ignorados por git en la carpeta `cv/`)**.

## ¿Cuándo usar esta skill?
Usa esta skill cada vez que el usuario pida:
- Adaptar su CV para una vacante específica.
- Resaltar ciertas habilidades (ej. liderazgo, AWS, GCP, etc.) para un puesto.
- Generar un PDF personalizado del CV.

## Estructura de Directorios
Todo el contenido personalizado y los subproductos de LaTeX DEBEN guardarse bajo la carpeta raíz `cv/`. 
*Ejemplo:* Para la vacante "Capital One", el directorio debe ser `cv/capital_one/`.

## Reglas Obligatorias (NO ROMPER)
1. **NO ALTERES EL CÓDIGO FUENTE NI LOS DATOS BASE:** No modifiques `cv-data.ts`, los archivos Markdown de `src/content/work/`, ni la lógica de `generate-cv.ts`. El código base del sitio web permanece intacto.
2. **COPIA LA ESTÉTICA EXISTENTE:** Lee el archivo `scripts/generate-cv.ts` (líneas de la plantilla LaTeX) para copiar exactamente la estética, paquetes, y preámbulo (ej. color `darkblue`, `geometry`, `enumitem`, `hyperref`).
3. **PREGUNTA QUÉ DESTACAR (NO INVENTES):** Lee las descripciones de los trabajos existentes. Si faltan detalles específicos que pide la vacante (ej. compliance, regulaciones, team building, etc.), **pregúntale directamente al usuario** qué información tiene al respecto antes de generar el archivo. Haz máximo una pregunta a la vez.
4. **COMPILACIÓN:** Genera el archivo LaTeX `.tex` directamente en su carpeta y compílalo usando `pdflatex`:
   `pdflatex -output-directory=cv/empresa cv/empresa/cv_empresa.tex`
5. **LIMPIEZA:** Una vez que tengas el PDF y el archivo `.tex`, elimina los archivos auxiliares de LaTeX (`.aux`, `.log`, `.out`) usando un comando bash para no dejar basura.
