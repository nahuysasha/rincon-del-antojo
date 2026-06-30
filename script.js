let carrito = [];

const botones = document.querySelectorAll(".producto button");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {

        const producto = boton.parentElement.querySelector("h3").innerText;
        const precioTexto = boton.parentElement.querySelector("p").innerText;
        const precio = parseInt(precioTexto.replace("$", ""));

        carrito.push({ producto, precio });

        alert(producto + " agregado al carrito.");
    });
});

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