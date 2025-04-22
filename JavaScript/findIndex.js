// findIndex() Similar a find(), pero en lugar de devolver el elemento, DEVUELVE SU INDICE. Uso común: Encontrar la posición del primer elemento que CUMPLE CON UNA CONDICIÓN.

const numbers = [1, 2, 3, 4];
const index = numbers.findIndex( (num) => num > 2 ); // findIndex() busca el índice del primer número que cumple con la condición num > 2. El primer número que cumple esta condición es 3, que está en el índice 2. findIndex() devuelve 2 y lo almacena en index.
console.log(index); // 2