// reduce() reduce un array a un solo valor aplicando una función a cada elemento, acumulando el resultado. Su uso común es sumar todos los elementos de un array o combinar elementos en un solo valor.

const numeros = [1, 2, 3, 4];
// esta funcion reduce basicamente hace lo mismo que un for para sumar todos los elementos de un array
const sum = numeros.reduce( (acumulador, elementoActual) => acumulador + elementoActual, 0 ); // acumulador empieza con el valor 0 (pasado como segundo argumento a reduce()). La función suma elementoActual al acumulador en cada iteración.
console.log(sum); // 10