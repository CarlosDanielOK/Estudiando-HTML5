// Este método CREA UN NUEVO ARRAY con los resultados de aplicar una función a CADA ELEMENTO del array original. Su uso común es transformar los elementos de un array sin modificar el array original.

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // map() toma cada número en el array numbers, lo multiplica por 2 y coloca el resultado en un nuevo array llamado doubled.
console.log(doubled); // [2, 4, 6]

const numeros = [10, 20, 30];
const result = numeros.map( (num, index) => num + index ); // map() suma el índice de cada elemento a su valor original y asigna cada resultado a result. El primer elemento permanece igual (10 + 0 = 10), el segundo elemento se incrementa en 1 (20 + 1 = 21), y así sucesivamente.
console.log(result); // [10, 21, 32]
