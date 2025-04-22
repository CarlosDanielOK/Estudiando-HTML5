// slice() se usa para CREAR UNA COPIA superficial de una PORCIÓN DE UN ARRAY (o una cadena) EN UN NUEVO ARRAY (o cadena) sin modificar el array o cadena original. Puedes especificar los índices de inicio y fin para definir qué parte del array (o cadena) deseas copiar.

const numbers = [1, 2, 3, 4, 5];
const subArray = numbers.slice(1, 4); // slice(1, 4) selecciona elementos desde el índice 1 hasta el 4 (exclusivo, es decir que no lo incluye). Esto incluye los elementos en los índices 1, 2, y 3, que son los valores 2, 3, y 4. slice() devuelve un nuevo array [2, 3, 4], almacenado en subArray.
console.log(subArray); // [2, 3, 4]

// ejemplo con un string
const str = 'Hello, World!';
// Extraer una porción de la cadena
const slicedStr = str.slice(7, 12);
console.log(slicedStr); // 'World'

