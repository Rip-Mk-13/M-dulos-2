// Tentativa:

// function arrayComFor(){
//     var nome = []
//     var maxContador = Number(prompt("Quantas posições você deseja?"))

//     for(contador = 0; contador < maxContador; contador++){
//         nome[contador] = prompt("Bem-vindo a chamada, qual o seu nome")
//         console.log("Seu nome está na posição " + contador);
         
//         if(contador === 3){
//             contador = 10;
//             console.log("Seu nome está na posição " + contador);    
//             return;
//         }
//     }
// }


// Correção: 
function arrayComFor(){
    var numero = []
    var contador = Number(prompt("Quantas posições você deseja?"))

    for(pessoas = 0; pessoas < contador; pessoas++){
        var nome = prompt("Digite o nome da pessoa " + (pessoas + 1) + ":");
        numero[pessoas] = nome;
    } 

    console.log("Lista de pessoas");
    for (var pessoas = 0; i < numero.length; pessoas++){
        console.log((pessoas + 1) + " - " + numero[pessoas]);
    }
}