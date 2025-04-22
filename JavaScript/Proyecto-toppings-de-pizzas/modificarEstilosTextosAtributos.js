// ASIGNAR ESTILOS CSS CON JAVASCRIPT
const primerToppingNaranja = document.querySelector(".topping.fondo-naranja");
console.log(primerToppingNaranja);
console.log(primerToppingNaranja.style); // imprime en consola todos las propiedades css que puedes personalizar del elemento html
// asigna un estilo css al elemento html primerToppingNaranja, en este cambia el color de fondo a de naranja a azul, accedemos a la propiedad css con style.nombreDeLaPropiedad y la propiedad css en javascript se usa formato camelCase, en css seria background-color
primerToppingNaranja.style.backgroundColor = "blue";
primerToppingNaranja.style.color = "red";
primerToppingNaranja.style.textTransform = "uppercase";

// MODIFICAR TEXTO CON JAVASCRIPT
const titulo = document.getElementById("titulo");
titulo.innerText = "Ingredientes Pizza"; // modifica el texto del titulo. El texto se guarda aunque recargues la pagina

// MODIFICAR ATRIBUTOS DE LOS ELEMENTOS HTML CON JAVASCRIPT
const enlace = document.getElementsByTagName("a"); // getElementsByTagName retorna una coleccion html (array) por mas que solo haya una sola etiqueta a en el documento html
console.log(enlace);
console.log(enlace[0].getAttribute("href")); // getAttribute obtiene el atributo href de a
// console.log(enlace[0].removeAttribute("href")); // removeAttribute elimina el atributo href de a
// ACTUALIZAR UN ENLACE
console.log(enlace[0].setAttribute("href", "https://www.youtube.com/")); // setAttribute("nombreDelAtributo", "nuevoValor"); el primer argumento es el nombre del atributo que vamos a modificar o actualizar en html, y el segundo argumento es el nuevo valor que tendra el atributo href