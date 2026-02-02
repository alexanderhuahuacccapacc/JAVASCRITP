//ojo usamos const porque no vamos a cambiar el valor de las variables

// tipo de dato numero
const Number = 42;
console.log(Number);
// tipo de dato texto
const String = "This is a string.";
console.log(String);
// tipo de dato booleano
const Boolean = true;
console.log(Boolean);
// tipo de dato nulo
const Null = null;
console.log(Null);
// tipo de dato indefinido
let Undefined;
console.log(Undefined);
// tipo de dato objeto
const Object = { nombre: "Juan", edad: 30 };    
console.log(Object);
// tipo de dato arreglo
const Array = [1, 2, 3, 4, 5];
console.log(Array);       

// ahora usando let para variables que pueden cambiar
// tipo de dato numero
let miNumber = 43;
console.log(miNumber);
console.log(typeof miNumber);
// tipo de dato texto
const miString = "This is a string con let.";
console.log(miString);
console.log(typeof miString);
// tipo de dato booleano
const miBoolean = true;
console.log(miBoolean);
console.log(typeof miBoolean);


// tipo de dato nulo
const miNull = null;
console.log(miNull);
console.log(typeof miNull);
// Ojo: typeof null en JavaScript devuelve "object", es un comportamiento historico del lenguaje    


// tipo de dato indefinido
let miUndefined;
console.log(miUndefined);
console.log(typeof miUndefined);
// tipo de dato objeto
const miObject = { nombre: "Juana", edad: 35 };    
console.log(miObject);
console.log(typeof miObject);
// tipo de dato arreglo
const miArray = [1, 2, 3, 4, 5, 6];
console.log(miArray);   
console.log(typeof miArray);
