// PINTAR LA CARTELERA
function pinta_cartelera(){

    datos.forEach((elemento,indice)=>{
        document.querySelector(`.caja${indice+1}`).innerHTML = comando(elemento.titulo,elemento.descripcion);
    });

}

pinta_cartelera();







let nombre = "Juanito";
let apellido = "Gonazales";

console.log(
    `Hola ${nombre} ${apellido} como estas megusta tu apellitdo ${apellido}`
);






