// acceso a los input
const inputSumando1 = document.getElementById("inputSumando1");
const inputSumando2 = document.getElementById("inputSumando2");

// acceso al texto de "<p>" al lado de los input
const textoSumando1 = document.getElementById("texto-input1");
const textoSumando2 = document.getElementById("texto-input2");
const textoResultado = document.getElementById("texto-resultado");

// asigna los valores actuales de los input
let sumando1 = inputSumando1.value;
let sumando2 = inputSumando2.value;

// funcion que suma los numeros
function sumarNumeros(sumando1, sumando2) {
    let resultado = Number(sumando1) + Number(sumando2); // suma los numeros convertidos en numeros ya que estan en formato string
    textoResultado.textContent = resultado;
}

// Lo que sucede cuando el usuario interactue con inputSumando1
inputSumando1.addEventListener("change", (event) => {
    sumando1 = event.target.value; // actualiza el valor de sumando1
    textoSumando1.textContent = sumando1; // actualiza el texto con el numero seleccionado por el usuario
    sumarNumeros(sumando1, sumando2); // suma los numeros
});

// Lo que sucede cuando el usuario interactue con inputSumando2
inputSumando2.addEventListener("change", (event) => {
    sumando2 = event.target.value; // actualiza el valor de sumando2
    textoSumando2.textContent = sumando2; // actualiza el texto con el numero seleccionado por el usuario
    sumarNumeros(sumando1, sumando2); // suma los numeros
});