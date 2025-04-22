const primerTopping = document.querySelector(".topping");
console.log(primerTopping.classList); // classList devuelve todas las clases que tiene el elemento html seleccionado en el dom (devuelve algo similar a un array)

// AGREGAR UNA CLASE A UN ELEMENTO HTML CON JAVASCRIPT
primerTopping.classList.add("nueva-clase"); // agrega una nueva clase al elemento html llamada "nueva-clase"
console.log(primerTopping.classList);

// VERIFICAR SI UNA CLASE EXISTE EN LA LISTA DE CLASES DEL ELEMENTO HTML
console.log(primerTopping.classList.contains("topping")); // contains devuelve true si la clase existe en el elemento html o false si no existe

// ELIMINAR UNA CLASE DE UN ELEMENTO HTML
primerTopping.classList.remove("nueva-clase"); // remove elimina la clase del elemento html
console.log(primerTopping.classList);