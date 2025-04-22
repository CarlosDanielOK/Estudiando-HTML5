// CREAR NUEVO ELEMENTO HTML CON JAVACRIPT
// 1. Seleccionar el contenedor: Primero, necesitas seleccionar el contenedor en el que quieres agregar el nuevo elemento. Esto se hace usando métodos de selección como getElementById, querySelector, etc.
const listaToppings = document.getElementById("lista-toppings");
// 2. Crea el nuevo elemento: Utiliza el método document.createElement para crear el nuevo elemento HTML.
const nuevoTopping = document.createElement("li");
// 3. Configura el nuevo elemento: Puedes configurar atributos, clases y contenido del nuevo elemento según sea necesario.
nuevoTopping.classList.add("topping", "fondo-marron");
nuevoTopping.innerText = "Nueva Pizza";
// 4. Añade el nuevo elemento al contenedor: Finalmente, usa métodos como append para agregar el nuevo elemento al contenedor seleccionado.
listaToppings.append(nuevoTopping); // append añade nodos o cadenas de texto al final de un nodo padre. Puede recibir múltiples argumentos, lo que permite añadir varios nodos o textos en una sola llamada.

// ELIMINAR UN ELEMENTO HTML CON JAVASCRIPT
nuevoTopping.remove();

// OTRA FORMA DE AGREGAR UN NUEVO ELEMENTO HTML CON JAVASCRIPT
listaToppings.appendChild(nuevoTopping); // appendChild añade un nodo como el último hijo de un nodo padre. Solo puede añadir nodos del tipo Node. Esto incluye elementos del DOM, como otros elementos HTML, pero no puede añadir cadenas de texto directamente.