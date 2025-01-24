const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Inicializar variables para los valores de rojo, verde y azul con los valores actuales de los inputs
// Cada valor debe estar en el rango [0, 255]
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Mostrar los valores iniciales en los elementos de texto correspondientes
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;


// Función para actualizar el color de fondo de la página
const actualizarColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
