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

/* Formulario de contacto: mientras no esté conectado a un servicio (action="#"),
   avisa en vez de aparentar que ha enviado el mensaje */
const formulario = document.querySelector("[data-formulario]");

if (formulario) {
    const aviso = formulario.querySelector(".form-aviso");

    formulario.addEventListener("submit", e => {
        if (formulario.getAttribute("action") === "#") {
            e.preventDefault();
            aviso.textContent = "El formulario aún no está conectado, así que este mensaje no se ha enviado. Por favor, contacta por otro medio.";
        }
    });
}
