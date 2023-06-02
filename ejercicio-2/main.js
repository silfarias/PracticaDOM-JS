const lenguajes = [
  {
    titulo: "JavaScript",
    imagen: 'js.png',
    descripcion: "Lenguaje web interactivo y orientado a objetos, utilizado para agregar funcionalidad y dinamismo a las páginas.",

  },
  {
    titulo: "PHP",
    imagen: 'php.png',
    descripcion: "Lenguaje de programación del lado del servidor, ampliamente utilizado en el desarrollo web para generar contenido dinámico y gestionar bases de datos.",
  },
  {
    titulo: "Java",
    imagen: 'JAVA.png',
    descripcion:"Lenguaje de programación de propósito general, orientado a objetos y multiplataforma. Utilizado en el desarrollo de aplicaciones empresariales, Android y sistemas embebidos. Destaca por su robustez, seguridad y portabilidad.",
  },
];
const container = document.getElementById('cardcontainer')
container.innerHTML += lenguajes
.map((lenguajes) => {
  return `
  <div class="card my-card d-flex m-1" style="max-width: 18rem;"> 
  <img src="${lenguajes.imagen}" class="card-img-top my-img" alt="${lenguajes.titulo}">
  <div class="card-body">
  <h5>${lenguajes.titulo}</h5>
  <p>${lenguajes.descripcion}</p>
  </div>
  </div>
  `;
})
.join("");