// de/para

// var fruta = "🍉"
// switch (fruta){
//     case "🍍": alert("O chá da casca e da fruta é muito bom!");
//         break;
//     case "🥝": alert("A fruta ou animal?");
//         break;
//     case "🍉":
//     case "🍊": alert("Laranja e Melancia são frutas refrescante!");
//         break;
//     default: alert("Hoje não temos a fruta selecionada... Foi mal ae")
// }


// var idade = 45

// switch(idade){
//     case(idade >= 13 && idade < 18):
//         console.log("Adolescente");
//         break;
//     case(idade > 0 && idade < 13):
//         console.log("Criança");
//         break;
//     case(idade >= 18):
//         console.log("Adulto");
//         break;
//     default: console.log("Não nasceu ainda!")
//         break;
// }


// var estado = "RJ";
// var nomeEstado;

// switch(estado){
//     case SP:
//         nomeEstado = "São Paulo"
//         break;

//     case BH:
//         nomeEstado = "Belo Horizonte"
//         break;
    
//         default:
//         break;
// }


function estadoNome(){
    var estado = "RJ";
    var nomeEstado;

    switch (estado) {
        case SP:
            nomeEstado = "São Paulo"
            break;
        case RJ:
            nomeEstado = "Rio de Janeiro"
            break;
        default: nomeEstado = "Não registrado!"
            break;
    }

    console.log("O seu estado é " + nomeEstado)
}