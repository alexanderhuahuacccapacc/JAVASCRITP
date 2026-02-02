// hohsting
console.log(miVariable);
var miVariable = "Hello, World!";
// l princio de hoisting es poder declarar variables y funciones despues de usarlas y el interprete de javascript las mueve al inicio del codigo
// pero solo con var y function
// con let y const no funciona el hoisting..
// ejemplo con let
let numero = 42;
console.log(numero); // esto funciona porque la variable ya fue declarada antes de usarla
// pero si intentamos usarla antes de declararla

//console.log(numero2); // ReferenceError: Cannot access 'numero2' before initialization
let numero2 = 43;

// con const pasa lo mismo
//console.log(numero3); // ReferenceError: Cannot access 'numero3' before initialization
const numero3 = 44; 
// por lo tanto es recomendable usar let y const en lugar de var para evitar problemas con el hoisting.

// ejemplo con function
miFuncion();

function miFuncion() {
    console.log("Hola desde la función miFuncion");
}
// en este caso si funciona el hoisting porque las funciones son elevadas al inicio del codigo por el interprete de javascript
