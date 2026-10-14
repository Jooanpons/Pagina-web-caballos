# Imágenes de la demo

Todas las imágenes de esta carpeta son **marcadores de posición** (esquemas SVG). No son fotografías del local ni de sus platos.

| Archivo | Dónde se usa | Qué poner |
|---|---|---|
| `hero-pizza.svg` | Portada y carta (pizzas) | Pizza en vista cenital, formato vertical 4:5 |
| `pizza-1.svg` | Destacada Le Corbusier | Foto de esa pizza, formato 9:7 |
| `pizza-2.svg` | Destacada Coderch | Foto de esa pizza, formato 9:7 |
| `pizza-3.svg` | Destacada Alvar Aalto | Foto de esa pizza, formato 9:7 |
| `terraza.svg` | Sección "El espacio" | Foto real de la terraza, formato 3:2 |
| `detalle.svg` | Página Concepto | Detalle de masa e ingredientes, formato 9:7 |

## Cómo sustituirlas
1. Exporta cada foto optimizada (JPG o WebP, 1600 px de lado largo, menos de 250 KB).
2. Guárdala en esta carpeta, por ejemplo `hero-pizza.jpg`.
3. En el HTML cambia `src="assets/images/hero-pizza.svg"` por `src="assets/images/hero-pizza.jpg"`.
4. Cambia el `alt` por una descripción real ("Pizza Coderch con jamón york...") y ajusta `width`/`height` a las proporciones reales.
5. Quita el rótulo "Foto pendiente" del `<figcaption>` y pon el pie de foto que quieras.
