// addEventListener es un método en JavaScript que se utiliza para agregar eventos a los elementos del DOM. Este método permite escuchar eventos específicos, como clics, movimientos del mouse, teclas presionadas, entre otros, y ejecutar una función cuando se produce el evento.
const aceitunas = document.getElementById("aceitunas"); // defino el El elemento del DOM al que deseas añadir el evento.

// defino la funcion
function mostrarClick(e) { // e es un argumento predeterminado
    console.log(e.target); // esto imprime el elemento html al que hicimos click en la consola
}

// El primer argumento de addEventListener es el nombre del evento que quieres escuchar, como 'click', 'keydown', 'load', etc., es decir que debe hacer el usuario para que se ejecuta la funcion. El segundo argumento es un callback, la función que se ejecutará cuando el evento ocurra. Esta función puede ser anónima o una función previamente definida.
aceitunas.addEventListener("click", mostrarClick);