// every()
const numbers = [2, 4, 6, 8, 10];

// every() verifica si todos los elementos cumplen con la prueba de la función
const allEven = numbers.every(num => num % 2 === 0);

// Imprime true si todos los números son pares
console.log(allEven);