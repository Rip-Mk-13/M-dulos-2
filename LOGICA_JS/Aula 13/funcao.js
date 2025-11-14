// var a = 7;

// function nome(a){
//     a = a + 5;
//     console.log("parâmetro:", a);
// }

// nome(a);

// console.log("variável:", a);

var a = 7;

function soma(valor){
    valor = valor + 5;
    console.log("parâmetro:", valor);
}

soma(a);

console.log("variável:", a);

////////////////////////////////////////////////////////////////////////////////////////////////////////

const nomesArray = ["Papai Noel", "Vovó Mafalda", "Coelinho da Páscoa"]

function nomes(nome){
    nome[1] = "Fada do Dente";

    console.log(nome);
}

nomes(nomesArray);

console.log(nomesArray);