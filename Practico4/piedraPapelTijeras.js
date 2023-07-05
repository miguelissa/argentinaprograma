const readlineSync = require("readline-sync");
const piedra="piedra";
const papel="papel";
const tijera="tijera";
let ganoComputadora=0;
let ganoUsuario=0;

function obtenerJugadaComputadora(){
    let min=0;
    let max=2;
    let num=Math.floor(Math.random()*(max-min+1)+min);
    if(num===0){
        return(piedra);
    } else if(num===1){
        return(papel);
    } else{
        return(tijera);
    }
}
function obtenerJugadaUsuario(){
    let imputUsuario=readlineSync.question("Ingrese opcion (piedra, papel o tijera): ");
    return imputUsuario;
}
function determinarGanador(a,b){
    if(a===tijera&& b===papel){
        return a
    } else if (a===tijera&& b===piedra){
        return b
    } else if(a===papel&& b===tijera){
        return b;
    } else if (a===papel&& b===piedra){
        return a;
    } else if(a===piedra&& b===tijera){
        return a;
    } else if (a===piedra&& b===papel){
        return b;
    } 
}
function juego(){
    let computadora=obtenerJugadaComputadora();
    let usuario=obtenerJugadaUsuario();
    let ganador=determinarGanador(computadora,usuario);
    if (usuario==="papel"||usuario==="piedra"||usuario==="tijera"){
        if (ganador===computadora) {
            ganoComputadora++;
            console.log("La computadora elijio: %s.\nEl usuario elijio : %s.\nEl resultado fue: Gana la computadora",computadora,usuario);
        } else if (ganador===usuario){
            ganoUsuario++;
            console.log("La computadora elijio: %s.\nEl usuario elijio : %s.\nEl resultado fue: Gana el usuario",computadora,usuario);
        } else{
            console.log("La computadora elijio: %s.\nEl usuario elijio : %s.\nEl resultado fue: Empate",computadora,usuario);
        }
    }else(console.log("Ingrese opcion valida"));

}
let imputTipoJuego=readlineSync.question("Las opciones de juegos son: \na) Una jugada\nb) Dos jugadas\nc) Mejor de tres\nIngrese opcion que desea jugar:  ");
switch(imputTipoJuego){
    case "a":
        juego();
        break;
    case "b":
        juego();
        juego();
        if(ganoUsuario>ganoComputadora){
            console.log("El ganador es el usuario");
        } else if(ganoUsuario<ganoComputadora){
            console.log("El ganador es el computadora");
        }else{
            console.log("Empataron");
        }
        break;
    case "c":
        juego();
        juego();
        juego();
        if(ganoComputadora<ganoUsuario){
            console.log("El ganador es el usuario");
        } else if(ganoComputadora>ganoUsuario){
            console.log("El ganador es la computadora");
        } else{
            console.log("Empataron");
        }
    default:
        console.log("Ingrese opcion de juego correcta");
        break;

}
