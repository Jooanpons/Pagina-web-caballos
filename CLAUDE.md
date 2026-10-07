# Espíritu Equino (Esperit Equí) — web para proyecto de caballos en Mallorca

Web real para una clienta (novia del desarrollador, que está aprendiendo para trabajar de freelance).
Tiene Grado Medio de Informática: no explicar qué es HTML/CSS, pero sí explicar brevemente cada cambio importante
(qué, por qué, dónde, qué archivos).

## Stack y estructura
HTML + CSS + JS mínimo. Sin frameworks. Un único `css/style.css`. Se prueba con Live Server.

    index · venta · apadrinacion · historias · servicios · contacto  (.html, en la raíz)
    css/style.css
    imagenes/                                      (fondo-campo.jpg, fotos de caballos)

Rutas relativas: HTML→CSS `css/style.css`; HTML→imagen `imagenes/x.jpg`; CSS→imagen `../imagenes/x.jpg`. Nunca rutas con `/` inicial.
No crear carpeta `paginas`.

## Reglas de trabajo
- Avanzar por partes; no generar todo de golpe ni pasar a la siguiente página sin que se pida.
- Analizar lo existente primero; no cambiar lo que no se ha pedido.
- Decisión de diseño importante → preguntar antes.
- Código limpio, semántico, comentado cuando ayude, accesible, con SEO básico.
- JS solo si aporta (leer más/menos, menú móvil, formulario); lo que haga CSS, en CSS.
- NO inventar datos del cliente (caballos, edades, historias, precios, dirección, teléfono, email, servicios, legal, horarios). Usar texto provisional claramente marcado.
- Si hay que dar código, que se pueda copiar, pegar y probar en Live Server.

## Identidad visual
Natural + elegante + profesional + cálida. Mallorca, campo, verdes, marrones, ocre/dorado (`#f4c400` para botones destacados).
Tipografía: "Segoe UI", Arial, sans-serif (si se propone Google Fonts, explicar antes por qué).
Sin emojis, iconos excesivos, animaciones exageradas ni tarjetas recargadas. Todas las páginas comparten navbar, colores,
botones, sombras y tarjetas. Colores y medidas en variables CSS (`:root`).
Home: hero a pantalla completa con fondo de campo + overlay oscuro. Internas: mini-hero con título y descripción.

## Navbar (idéntico en todas las páginas, marcar la actual con aria-current)
Inicio | Caballos en venta | Caballos en apadrinación | Historias rescatados | Servicios | Ubicación y contacto (destacado)

## Tarjetas
Rejilla: 3 columnas escritorio, 2 tablet, 1 móvil. Foto con `object-fit: cover` y proporción fija.
Apadrinación: ~22 caballos (Rayo, Chilly, Max, Quinne, Bella, Pua, Bril, Tilly, Rambo, Alba, Harry, Sambo, Albie, Dahlia,
Jarana, Caramelo, Ultimatum, Johnny, Dimond, Gabriela, Neu, Romi). Sin campos rígidos (edad/raza…): descripción de texto libre
con "Leer más / Leer menos" que se despliega en la propia tarjeta con animación suave.

## Estado
[x] index  [x] venta  [x] apadrinacion  [x] historias  [x] servicios  [x] contacto  (estructura base; fotos y textos provisionales)
[ ] formulario funcional (servicio externo)  [ ] mapa  [ ] menú hamburguesa móvil  [ ] SEO  [ ] optimización  [ ] dominio/hosting
Idioma: español (posible mallorquín/catalán más adelante).
