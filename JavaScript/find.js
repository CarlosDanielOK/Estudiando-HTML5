// find() DEVUELVE EL PRIMER ELEMENTO en el array que CUMPLE UNA CONDICIÓN ESPECIFICADA en una función. Uso común: Buscar un elemento que coincida con un criterio específico.

const numbers = [1, 2, 3, 4];
const found = numbers.find( (num) => num > 2 ); // find() busca el primer número que cumple con la condición num > 2. El primer número que cumple esta condición es 3. find() devuelve 3 y lo almacena en found.
console.log(found); // 3