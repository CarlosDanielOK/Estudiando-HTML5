// El método sort() se usa para ORDENAR los elementos de un ARRAY, MODIFICA EL ARRAY ORIGINAL y NO DEVUELVE UNA COPIA. De manera predeterminada, sort() convierte los elementos a cadenas y los ordena según la secuencia de valores Unicode del punto de código. Sin embargo, para arrays con elementos numéricos o para ordenar arrays de objetos, es necesario proporcionar una función de comparación personalizada.

// ORDENACIÓN PREDETERMINADA. Por defecto, sort() ordena los elementos como cadenas de texto, esto FUNCIONA BIEN solo si los elementos SON CADENAS DE TEXTO, SI SON NUMEROS NO FUNCIONA CORRECTAMENTE:
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

// ORDENAR NÚMEROS DE MENOR A MAYOR. Para ORDENAR NÚMEROS CORRECTAMENTE, se usa una FUNCIÓN DE COMPARACIÓN. La función recibe dos argumentos y devuelve: Un número negativo si a debe ordenarse antes que b. Cero si a y b son iguales. Un número positivo si a debe ordenarse después que b.
const numbers = [10, 5, 40, 25];
numbers.sort((a, b) => a - b);
console.log(numbers); // [5, 10, 25, 40]

// ORDENAR NÚMEROS DE MAYOR A MENOR. Invertimos la resta (b - a) para obtener un orden descendente (mayor a menor).
numbers.sort((a, b) => b - a);
console.log(numbers); // [40, 25, 10, 5]

// ORDENAR ARRAY DE OBJETOS. Por ejemplo, ordernarlos por una PROPIEDAD ESPECIFICA como edad (NUMEROS) de MENOR A MAYOR
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);

// ORDENAR ARRAY DE OBJETOS. Ordenar por NOMBRE ALFABÉTICAMENTE, Para ordenar por una propiedad que es una cadena, como name, puedes usar localeCompare, que maneja la comparación de cadenas de forma adecuada para diferentes idiomas.
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);

// ORDENAR ARRAY DE OBJETOS POR MÚLTIPLES PROPIEDADES. A veces, necesitarás ordenar por más de una propiedad. Por ejemplo, puedes querer ordenar primero por age y luego por name en caso de que las edades sean iguales:
const usuarios = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 20 }
];

usuarios.sort((a, b) => {
    if (a.age === b.age) { // si las edades son iguales
        return a.name.localeCompare(b.name); // los ordena por orden alfabetico, localCompare es un método de cadena que compara dos cadenas en el orden alfabético correcto
    }
    return a.age - b.age; // ordena por edades de menor a mayor
});

console.log(usuarios);

// ORDENAR ARRAY DE OBJETOS POR FECHA. Supongamos que tienes un array de objetos que contienen fechas, y quieres ordenarlos cronológicamente.
const events = [
    { name: 'Event 1', date: new Date('2023-12-01') },
    { name: 'Event 2', date: new Date('2023-10-15') },
    { name: 'Event 3', date: new Date('2023-11-20') }
];

events.sort((a, b) => a.date - b.date);
console.log(events);
