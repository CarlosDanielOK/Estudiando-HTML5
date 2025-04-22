// ACCEDER AL NODO PADRE
const listaToppings = document.getElementById("lista-toppings");
console.log(listaToppings.parentElement); // parentElement devuelve el elemento padre de un nodo específico, pero solo si el padre es un nodo de tipo Element. Si el padre no es un nodo Element (por ejemplo, si es un nodo de tipo Document), devolverá null.
console.log(listaToppings.parentNode); // parentNode devuelve el nodo padre de un nodo específico, sin importar su tipo. Esto puede incluir elementos, documentos o cualquier otro tipo de nodo.
console.log(listaToppings.parentElement.parentElement); // tambien es posible acceder al node padre del padre encadenando parentElement

// ACCEDER AL NODO HIJO
console.log(listaToppings.children); // Devuelve el nodo hijo del elemento html
console.log(listaToppings.firstElementChild); // acceder al primer elemento html hijo
console.log(listaToppings.lastElementChild); // acceder al ultimo elemento html hijo

// ACCEDER AL ELEMENTO HERMANO
console.log(listaToppings.previousElementSibling); // accede al anterior elemento hermano del elemento html en cuestion
console.log(listaToppings.nextElementSibling); // accede al proximo elemento hermano del elemento html en cuestion