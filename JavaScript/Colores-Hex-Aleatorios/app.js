const boton = document.querySelector("button"); // selecciona el boton "Cambiar color"
const color = document.getElementById("color"); // selecciona el elemento p con su id color

function generarHexAleatorio() {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    // itera 6 veces porque los colores hexadecimales se componen de 6 digitos
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random()*16); // genera un numero aleatorio entre 0 y 15
        colorHex += digitos[indiceAleatorio]; // concatena al string colorHex un digito aleatorio del string digitos con un indice aleatorio que ya genero previamente entre 0 y 15
    }

    return colorHex;
}

// DEFINE QUE PASA CUANDO HAGAMOS CLICK EN EL BOTON CAMBIAR COLOR
boton.addEventListener("click", function() {
    let colorAleatorio = generarHexAleatorio(); // obtiene el color aleatorio
    color.textContent = colorAleatorio; // actualiza el texto con el nuevo color aleatorio
    document.body.style.backgroundColor = colorAleatorio; // actualiza el color de fondo de todo el body
});