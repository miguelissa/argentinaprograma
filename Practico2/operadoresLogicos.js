const readlineSync = require("readline-sync");
const num = readlineSync.question("Ingrese un numero entero: ");
let numero=parseInt(num);
if(numero>0 && numero%2===0){
    console.log("El numero es positivo y par");
} else if(numero>0 && numero%2!==0){
    console.log("El numero es positivo e impar");
} else if (numero<0){
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}