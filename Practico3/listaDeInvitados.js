let personas= ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro","Emilia"];
let admitidos=[];
let rechazados=[];
for (i=0;i<personas.length;i++){
    if (personas[i]==="Jose" || personas[i]==="Sofia"){
        rechazados.push(personas[i]);
    } else{
        admitidos.push(personas[i]);
    }
}
console.log("La lista de invitados admitidos es:");
admitidos.forEach(a=>console.log(a));
console.log("La lista de invitados rechazados es:");
rechazados.forEach(a=>console.log(a));
let admitidosOrdenados=admitidos.slice();
let rechazadosOrdenados=rechazados.slice();
admitidosOrdenados.sort();
rechazadosOrdenados.sort();
console.log("La lista ordenada de invitados admitidos es:");
admitidosOrdenados.forEach(a=>console.log(a));
console.log("La lista ordenada de invitados rechazados es:");
rechazadosOrdenados.forEach(a=>console.log(a));