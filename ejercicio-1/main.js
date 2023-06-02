// Obtener referencia al botón y al párrafo
let boton = document.getElementById('mi-boton');
let parrafo = document.getElementById('parrafo1');

// Agregar evento de clic al botón
boton.addEventListener('click', function() {
  parrafo.classList.toggle('orange');
});
