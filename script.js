let carrito = [];

document.addEventListener("DOMContentLoaded", () => {

const botones = document.querySelectorAll(".producto button");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {

        const producto = boton.parentElement.querySelector("h3").innerText;
        const precioTexto = boton.parentElement.querySelector("p").innerText;
        const precio = parseInt(precioTexto.replace("$", ""));

        carrito.push({ producto, precio });

        actualizarCarrito();

        alert(producto + " agregado al carrito.");
    });
});

});

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalHTML = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");

        li.textContent = item.producto + " - $" + item.precio;

        lista.appendChild(li);

        total += item.precio;
    });

    totalHTML.textContent = "Total: $" + total;
}

function mostrarCarrito() {
    document.getElementById("carrito").classList.toggle("activo");
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function pedirWhatsApp() {

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "Hola, quiero hacer el siguiente pedido:%0A%0A";
    let total = 0;

    carrito.forEach((item) => {
        mensaje += "- " + item.producto + " ($" + item.precio + ")%0A";
        total += item.precio;
    });

    const pago = document.getElementById("pago").value;

    mensaje += "%0ATotal: $" + total;
    mensaje += "%0AForma de pago: " + pago;

    window.open(
        "https://wa.me/59898449771?text=" + mensaje,
        "_blank"
    );
}
