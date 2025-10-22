var nomeEntrevistado = prompt("Digite seu nome completo: ");
var letraInicial = nomeEntrevistado[0];

function entrevista(nomeEntrevistado, letraInicial){
    console.log("Entrevistado: " + nomeEntrevistado + "\nPrimeira letra: " + letraInicial.toLowerCase() + "\n Nome começa com: Vogal")
}

entrevista(nomeEntrevistado, letraInicial)