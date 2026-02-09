# 🗿 DESIGN_BLUEPRINT.md - Estética Mexica Lítica (Huitzilopochtli)

**Proyecto:** Portafolio Eduardo González
**Concepto:** "El Tlacuilo Digital" / "Ingeniería de Piedra y Luz"
**Filosofía:** *In Ixtli In Yollotl* (Rostro y Corazón). Claridad absoluta, estructura masiva, función sagrada.

---

## 1. Sistema Visual (La Paleta Solar y Sacrificial)

El color no es decoración, es semántica.

### 🎨 Paleta Cromática (Alto Contraste)
*   **Fondo (El Inframundo/Norte):** `#050505` (Negro Absoluto) o `#1A1A1A` (Negro Carbón). *No usar gris suave.*
*   **Acción/Energía (Chichiltic/Este):** `#D4442F` (Rojo Hematita). Usar para botones primarios, bordes activos y alertas. Representa la sangre/energía que mueve el sistema.
*   **Acento/Tecnología (Xiuh):** `#00A6B6` (Turquesa Profundo). Usar para enlaces, hover y elementos de "fuego precioso" (datos valiosos).
*   **Estructura/Luz (Iztac/Oeste):** `#F2E2D9` (Hueso) o `#E5E5E5`. Para texto principal y líneas divisorias. *Evitar blanco clínico #FFFFFF.*
*   **Advertencia (Coztauhqui):** `#E8B730` (Ocre/Oro). Para estados de "WIP" o notas importantes.

### 🔡 Tipografía (Piedra Tallada)
*   **Títulos (Display):** `Fjalla One` o `Teko`. Pesada, condensada, geométrica. Debe sentirse como un glifo tallado en basalto. (Uppercase).
*   **Cuerpo (Lectura):** `Montserrat` o `Questrial`. Geométrica pero legible. Círculos perfectos.
*   **Código/Datos:** `JetBrains Mono`. (La única concesión a la terminal).

### 📐 Formas y Geometría
*   **Bordes:** Gruesos y sólidos. `border-width: 2px` o `3px`. Color hueso o rojo.
*   **Esquinas:** `border-radius: 0`. Ángulos rectos agresivos.
*   **Vectores:** Triángulos agudos (Pico de Colibrí) para flechas/cursores. Trapecios para barras de progreso (Xiuhcóatl).

---

## 2. Composición (El Grid del Tlacuilo)

No usar "espacio en blanco" vacío. Usar **Espacio Estructurado**.

*   **Layout:** CSS Grid visible. Las líneas divisorias entre celdas deben verse (bordes de 1px o 2px en rojo o gris).
*   **Jerarquía:** Tamaño masivo. El proyecto principal debe ocupar el 50% de la pantalla. No miedo al tamaño gigante.
*   **Ritmo:** Alternancia. Texto a la izquierda, imagen a la derecha -> Siguiente fila invertida (Patrón de serpiente/bustrófedon).

---

## 3. Especificaciones de Componentes (UI Lítica)

### A. Navegación (El Templo)
*   Barra superior sólida, borde inferior grueso rojo (#D4442F).
*   Logo: Un glifo abstracto (triángulo/círculo) + "EDUARDO GONZÁLEZ".
*   Links: Texto grande, uppercase (`BITS`, `ATOMS`). Hover: Fondo turquesa, texto negro.

### B. Tarjeta de Proyecto (La Losa)
*   Contenedor rectangular con borde sólido hueso (#F2E2D9).
*   Imagen en escala de grises de alto contraste. Al hover: Color completo (Turquesa/Rojo).
*   Etiquetas: No "chips" redondos. Bloques rectangulares sólidos (Estilo etiqueta industrial o glifo).

### C. Timeline (La Cuenta de los Años)
*   Línea vertical gruesa (La serpiente).
*   Nodos: Rombos o Cuadrados (No puntos redondos).
*   Tipografía de fechas: `Fjalla One` gigante.

---

## 4. Comportamiento (Movimiento Ollin)
*   **Animaciones:** Rápidas, lineales y cortantes. (Duración 100ms - 200ms).
*   **Hover:** Desplazamiento físico (la tarjeta se mueve 4px arriba y a la derecha, dejando una sombra sólida negra o roja). Sensación táctil.

---

## 5. Mapeo de Contenido (Taxonomía)

*   **/bits (Códices):** Software, Cloud, IA.
*   **/atoms (Artefactos):** Maker, Hardware, Obra.
*   **/mind (Pensamiento):** Ensayos.
*   **/cv (Trayectoria):** Historial.
