/* Ventajas de las funciones flecha:
* 1. No se necesita el uso de la palabra reservada function
* 2. No se necesita el uso de la palabra reservada return
* 3. No se necesita el uso de la palabra reservada this
* 4. No se necesita el uso de la palabra reservada arguments
*/
// Función declarativa
// function sumar( a, b){
//     return a + b;
// }

// Cuando el cuerpo posee una sola línea, se puede escribir de la siguiente manera:
/* const sumar = (a, b) =>  a + b;
console.log(sumar(1, 2)); */

// Template literals
/* const saludar = (nombre) =>  `Bienvenido a la clase de Javascript ${nombre}`;
console.log(saludar('Ale')); */

// Argumentos implícitos
/* 
const sumarArgumentos = (...argumentos) => {
    let suma = 0;
    for (let i = 0; i < argumentos.length; i++) {
        suma += argumentos[i];
    }
    return suma;
}

console.log(sumarArgumentos(1, 2, 3, 4, 5));
 */
