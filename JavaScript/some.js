// some()
const numbers = [1, 2, 3, 4, 5];

// some() verifica si al menos un elemento cumple con la prueba de la función
const hasEven = numbers.some(num => num % 2 === 0);

// Imprime true si hay al menos un número par
console.log(hasEven);