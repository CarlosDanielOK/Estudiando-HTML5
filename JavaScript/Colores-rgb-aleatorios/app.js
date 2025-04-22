const boton = document.querySelector("button");
const colorRGB = document.getElementById("color");

// GENERAR COLOR RGB ALEATORIO
function generarColorAleatorio() {
    let digitos = [255,0,1];

    for (let i = 0; i < 3; i++) {
        let generarNumeroAleatorio = Math.floor(Math.random() * 256); // genera un numero aleatorio entre 0 y 255
        digitos[i] = generarNumeroAleatorio; // asigna el numero aleatorio generado a digitos
    }
    let colorrgb = "rgb(" + digitos.join() + ")"; // asignamos el color rgb en formato string
    return colorrgb; // retorna el color rgb en formato string
}

// Cuando hagamos click en el boton "Cambiar color" sucede:
boton.addEventListener("click", () => {
    let colorAleatorio = generarColorAleatorio(); // obtiene el color rgb aleatorio
    colorRGB.textContent = colorAleatorio; // actualiza el color rbg del texto del elemento p
    document.body.style.backgroundColor = colorAleatorio; // actualiza el color rbg del body
});