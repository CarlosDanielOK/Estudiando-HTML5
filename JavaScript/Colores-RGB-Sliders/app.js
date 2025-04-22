// obtiene acceso a los input
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

// obtiene acceso a los textos de sus elementos p en html
const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// obtiene el valor inicial de los input
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// actualiza el texto de cada input que indica que numero rgb esta al inicio de cada uno
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// Actualizar Rojo
// El evento "change" se dispara cuando el valor de un elemento <input> cambia y el usuario sale del campo.
// El parámetro event, es un objeto en JavaScript que contiene información sobre un evento específico que ha ocurrido en la página. Este objeto se pasa automáticamente a las funciones que manejan eventos (event listeners) cuando ocurre el evento. El objeto event tiene propiedades y métodos que te permiten obtener detalles sobre el evento. event.target es una propiedad del objeto del evento que se refiere al elemento que disparó el evento. En este caso, event.target será el input que el usuario cambió. Para los inputs, event.target te da acceso al elemento <input> específico que el usuario ha interactuado. e.target.value contiene el nuevo valor del input después de que el usuario ha cambiado su selección.
inputRojo.addEventListener("change", (event) => {
    rojo = event.target.value; //event.target es el input rojo aquí
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});

// Actualizar Verde
inputVerde.addEventListener("change", (event) => {
    verde = event.target.value; // event.target es el input verde aquí
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

// Actualizar Azul
inputAzul.addEventListener("change", (event) => {
    azul = event.target.value; // e.target es el input azul aquí
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
});