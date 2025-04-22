// splice() Cambia el contenido de un array ELIMINANDO, REEMPLAZANDO o AGREGANDO ELEMENTOS. Uso común: modificar un array eliminando o insertando elementos, el método MODIFICA EL ARRAY ORIGINAL y DEVUELVE un array con los ELEMENTOS ELIMINADOS.

const numbers = [1, 2, 3, 4];
console.log(numbers.length); // 4
const eliminados = numbers.splice(2, 1); // splice(2, 1) elimina 1 elemento comenzando desde el índice 2. El elemento eliminado es 3. splice() modifica el array original, que ahora contiene [1, 2, 4].
console.log(numbers); // [1, 2, 4]
console.log(eliminados); // [3]
console.log(numbers.length); // 3

// AÑADIR ELEMENTOS
const fruits = ['apple', 'banana', 'fig'];
// Añadir 2 elementos a partir del índice 1
fruits.splice(1, 0, 'orange', 'grape'); // inicio: 1 (índice después de 'apple') cantidadEliminada: 0 (no se eliminan elementos) elemento1: 'orange', elemento2: 'grape' (se añaden estos elementos en la posición especificada)
console.log(fruits); // ['apple', 'orange', 'grape', 'banana', 'fig']


