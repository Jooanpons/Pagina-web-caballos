# Ca s'Arquitecte · propuesta de rediseño web (demo no oficial)

Propuesta comercial no oficial. **No ha sido aprobada por Ca s'Arquitecte.** No modifica ni publica la web original.
HTML5 + CSS3 + JavaScript vanilla. Sin frameworks, sin claves API, sin dependencias de pago.

## Estructura
```
cas-arquitecte-demo/
├── index.html        Portada
├── carta.html        Carta con navegación por categorías
├── concepto.html     Arquitectura y gastronomía
├── ubicacion.html    Horario, contacto y mapa
├── aviso-legal.html  Marcador de posición (texto legal pendiente)
├── css/style.css     Sistema de diseño y estilos de todas las páginas
├── js/main.js        Menú móvil, animaciones suaves, estado abierto/cerrado
├── js/menu.js        Barra de categorías de la carta (scrollspy)
└── assets/images/    Marcadores de posición (ver README de esa carpeta)
```

## Cómo ejecutarla en Visual Studio Code
1. Abre la carpeta `cas-arquitecte-demo` en VS Code.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Clic derecho sobre `index.html` → **Open with Live Server**.

Alternativa sin extensión: `python3 -m http.server 8000` dentro de la carpeta y abre http://localhost:8000.
También funciona abriendo `index.html` con doble clic. Las fuentes (Google Fonts, gratuitas) y el mapa necesitan internet; sin ella se usan fuentes del sistema.

## Datos a verificar antes de enseñarla o publicarla
**Publicados en la web original (leídos de capturas, no de la web en vivo):**
- Nombre: Pizzería Ca s'Arquitecte.
- Dirección: Ramon Llull s/n, 07140 Sencelles, Mallorca.
- Teléfono y WhatsApp: 971 874 364 (confirmar que ese número recibe WhatsApp).
- Horario: martes a sábado, 19:30 a 23:00. **Lunes y domingo "Cerrado" es una deducción**, confirmarlo. Revisar también festivos y temporada.
- Servicio: pizzas para llevar y para tomar; hay terraza.
- Situación: delante del colegio y del polideportivo; fácil aparcamiento en la calle.

**Carta (solo hay una parte, la visible en las capturas):**
- Entrantes: Nachos 7,00 (extra guacamole 2,50), Provolone 7,90, Focaccia pesto 8,10, Focaccia romani/romero 8,10.
- Ensaladas: Caprese 12,10, Cabra 12,25, Salmón 15,10, Langostinos 13,25.
- Pizzas: Le Corbusier 9,10, Coderch 10,00, Alvar Aalto 16,50 (**ingredientes no visibles en la captura**).
- Textos copiados tal cual, incluidos "tomates cherris" y "romani/romero": confirmar la grafía con el propietario.
- **Pendiente de recuperar:** resto de pizzas, calzone, pasta, bebidas e ingredientes extra. Aparecen marcados como "Pendiente de confirmar".
- Alérgenos: solo se incluye el aviso general de la carta original. No se marca ningún plato como vegetariano, vegano o sin gluten.

**Textos propuestos por el diseñador (validar con el propietario):** frases del concepto, el "vocabulario compartido" proyecto/receta, y las notas sobre Le Corbusier, Coderch y Alvar Aalto (datos de contexto, no de su web).

**Otros:**
- Mapa: pin generado por búsqueda de dirección en Google Maps (sin clave API). Comprobar que cae en el local.
- `aviso-legal.html` es un marcador. El texto legal, privacidad y cookies debe aportarlo el titular.
- Cada `<head>` incluye `noindex`: quitarlo al publicar la versión definitiva.
- No se ha incluido la pestaña "Arquitectura" de la web original, porque promociona los servicios de un despacho profesional distinto de la pizzería.

## Fotografías
Ver `assets/images/README.md`. Con fotos reales el diseño gana mucho: es lo primero que conviene encargar.

## Comprobaciones realizadas
- Chromium (Playwright) a 390, 820 y 1440 px: sin desbordamiento horizontal ni errores de consola en las 5 páginas.
- Todos los enlaces internos y anclas responden; menú móvil (abrir, cerrar, Escape) y navegación por categorías de la carta funcionan.
- `prefers-reduced-motion` desactiva animaciones y scroll suave. Foco visible, enlace "Saltar al contenido", contraste AA en texto.
