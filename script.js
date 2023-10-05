let total = 0;

function agregarAlCarrito(nombre, precio) {
    let juego = {
        nombre: nombre,
        precio: parseFloat(precio.replace('$', '')) 
    };
    let carrito = [];
    carrito.push(juego);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    total += juego.precio;
    localStorage.setItem('total', total);
    document.getElementById('total').textContent = 'Total: $' + total.toFixed(2);
    let detalleJuego = document.createElement('li');
    detalleJuego.textContent = `${nombre} - $${juego.precio.toFixed(2)}`;
    document.getElementById('detallesJuegos').appendChild(detalleJuego);
};

let botonesAgregar = document.querySelectorAll('.agregar');

botonesAgregar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        let juego = boton.parentElement;
        let nombreJuego = juego.querySelector('h2').textContent;
        let precioJuego = juego.querySelector('.precio').textContent;
        agregarAlCarrito(nombreJuego, precioJuego);
    });
});

