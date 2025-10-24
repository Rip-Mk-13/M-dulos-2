// Quero que execute 4 vezes

// {
//     console.log("Olá Mundo!");
// }

// console.log("teste")

// Repetições:
// - Indefinidas
// - Definidas
// - Recursivas
// - Iterativas

// - Indefinidas:
// Muito parecidas com: if

// var semana = "Domingo";

// if(semana === Domingo){
//     console.log("Partiu clube")
// }

var contador = 1;

// while(contador <= 4){
//     contador = contador + 1;
//     console.log("Olá Mundo!")
// }

var contador1 = 1;

// do{
//     contador1 = contador1 + 1;
//     console.log("Olá Mundo!");
// } while(contador1 <= 4)

do{
    contador1 = contador1 + 1;
    while(contador <= 4) {
        // contador = contador + 1
        contador = contador + 1;
        // contador = contador + 5
        contador+= 5;
        console.log("Olá Mundo!")
    }
} while (contador1 <= 4)