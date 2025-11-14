// var nome1 = "Edson";
// var nome2 = "Gustavo";
// var nome3 = "Pedro";

// var numero = 3;

// var nome = new Array(3);
// var nome = new Array(numero);
// var nome4 = [];

// var nome5 = ["Edson", "Gustavo", "Pedro"];

// function lista(){
//     console.log(nome5[1]);

//     nome5[1] = "Emilly";

//     console.log(nome5[1]);
// }

// lista();

// var cor = [];

// function listaCor(){
//     console.log(cor.length);

//     cor[1] = "Vermelha"
//     cor[4] = "Roxa"
//     cor[6] = "Amarela"

//     console.log(cor.length);
// }

// listaCor();

function listaCor(){
    var nome = [];
    var contador = 0;

    while(nome !== ""){
        nome[contador] = prompt("Bem-vindo a chamada! Qual o seu nome?");

        if(contador === 3){
            contador = 10;
            return;
        }

        contador++;
    }
}