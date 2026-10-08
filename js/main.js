/* Menú móvil: abre y cierra la lista de enlaces con el botón hamburguesa */
const boton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

if (boton && menu) {
    boton.addEventListener("click", () => {
        const abierto = menu.classList.toggle("abierto");
        boton.setAttribute("aria-expanded", String(abierto));
    });

    // Al elegir un enlace (o pulsar Escape) el menú se cierra
    const cerrar = () => {
        menu.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
    };
    menu.addEventListener("click", e => { if (e.target.closest("a")) cerrar(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
}
