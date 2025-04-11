const leer = require("prompt-sync")();

function main() {
    let cantEstudiantes = 0;
    let cantVaritas = 0;
    let cantLibros = 0;
    let totalMateriales = 0;

    console.log("Escribe la cantidad de estudiantes");
    cantEstudiantes = Number(leer());
    console.log("Escribe la cantidad de estudiantes con varitas");
    cantVaritas = Number(leer());
    console.log("Escribe la cantidad de libros que hay");
    cantLibros = Number(leer());

    totalMateriales = (cantVaritas * 3) + (cantLibros * 2);



    console.log("***Resumen de Materiales*** \n");
    console.log("Estudiantes:", cantEstudiantes);
    console.log("Estudiantes con varita:", cantVaritas);
    console.log("Cantidad de libros:", cantLibros);
    console.log("Total de Materiales:", totalMateriales);

}

main();


