// filter() DEVUELVE un NUEVO ARRAY con todos los elementos que CUMPLEN UNA CONDICIÓN dada por una función. Su uso común es filtrar elementos de un array basados en algún criterio.

const numeros = [1, 2, 3, 4];
const numerosPares = numeros.filter( (num) => num % 2 === 0 ); // filter() pasa cada número a la función num => num % 2 === 0, que comprueba si el número es par. Si la condición se cumple (es decir, si el número es par), el número se incluye en el nuevo array numerosPares.
console.log(numerosPares); // [2, 4]