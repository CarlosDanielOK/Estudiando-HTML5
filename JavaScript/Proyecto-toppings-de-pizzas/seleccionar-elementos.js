// getElementById: SELECCIONAR ELEMENTO POR ID. document hace referencia a todo el documento html. El argumento es el nombre del id del elemento html que deseas seleccionar. document.getElementById("titulo"); este metodo retorna el elemento html como un objeto
const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerHTML); // muestra el elemento html como un string
console.log(titulo.innerText); // muestra el texto dentro del elemento html
console.log(titulo.tagName); // muestra la etiqueta html del elemento

// getElementsByClassName: SELECCIONAR ELEMENTO POR CLASES. En este caso al ser varios elementos con el mismo nombre de clase en html retorna un array de los elementos html que tenga dicha clase, en este caso, topping
const toppings = document.getElementsByClassName("topping");
console.log(toppings);
console.log(toppings.length); // obtiene la cantidad de elementos html del array
console.log(toppings[0]); // accede al primer elemento html
console.log(toppings[1].id); // obtiene el id del segundo elemento html

// getElementsByTagName: SELECCIONAR ELEMENTO POR SU ETIQUETA HTML. Retorna todos los elementos html que tengan el nombre de la etiqueta html, en este caso, li, sin importar si las etiquetas html tienen un id o clases
const etiquetali = document.getElementsByTagName("li");
console.log(etiquetali);

// querySelector: SELECCIONA EL PRIMER ELEMENTO DEL DOM QUE COINCIDA CON EL SELECTOR CSS PROPORCIONADO COMO ARGUMENTO. En este caso si hace falta escribir el # para id y . para las clases en el argumento como lo hariamos en CSS. Permite combinar selectores. Si hay varios elementos retorna el primer elemento que encuentre con el nombre de la clase o id proporcinado
const primerToppingNaranja = document.querySelector(".topping.fondo-naranja");
console.log(primerToppingNaranja);
const primerToppingMarron = document.querySelector("ul li.fondo-marron"); // otra forma de declarar
console.log(primerToppingMarron);

// querySelectorAll: SELECCIONA TODOS LOS ELMENTOS DEL DOM QUE COINCIDAN CON EL SELECTOR CSS PROPORCIONADO COMO ARGUMENTO. Devuelve una NodeList (lista de nodos) que contiene todos los elementos que coinciden con el selector (similar a un array)
const toppingsNaranjas = document.querySelectorAll(".topping.fondo-naranja");
console.log(toppingsNaranjas);
console.log(toppingsNaranjas[0]); // obtiene el primer elemento de la lista de nodos