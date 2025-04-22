let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

function generarEnteroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo); // genera un numero entero aleatorio entre 0 y maximo (la longitud del array citas) (sin incluir maximo en los valores posibles)
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`; // como citas es un array de objetos accedemos a citas con su indice y luego a la propiedad "texto"
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener("click", cambiarCita); // cuando el usuario haga click en el boton ejecuta la funcion cambiar cita