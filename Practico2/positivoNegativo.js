const readlineSync = require("readline-sync");
let num = readlineSync.question("Ingrese un numero: ");
let numero= parseInt(num)
if(numero>0){
    console.log("El numero es positivo");
} else if(numero<0){
    console.log("El numero es negativo");
} else{
    console.log("El numero es cero");
}