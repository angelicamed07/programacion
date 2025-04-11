const leer = require("prompt-sync")();


function main() {

    let tiempoPreparacion = 0;
    let cantidadIngrediente = 0;

    console.log("Ingresa la cantidad: true o false");
    cantidadValida = leer();
    console.log("Tiempo de preparacion:true o false");
    tiempoPreparacion = leer();

    cantidadValida = (cantidadIngrediente >= 5 && cantidadIngrediente <= 10);
    let Tiempo=(tiempoPreparacion == 3);

    console.log("Apta para consumo:");
    cantidadValida = leer();

    
}

main();

