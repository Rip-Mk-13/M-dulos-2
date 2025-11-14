function perguntaAoVivo() {
    const respostaCorreta = "Brasília";
    var pergunta = prompt("Qual a capital do Brasil?");

    for (var candidatos = 1; candidatos <= 3; candidatos++) {
        if (pergunta === respostaCorreta) {
            console.log("Você acertou!");
            break;
        } 
        else {
            for (var chances = 2; chances > 0; chances--) {
                console.log("Você errou, mas ainda tem " + chances + " chance(s).");
                pergunta = prompt("Tente novamente: Qual a capital do Brasil?");
                if (pergunta === respostaCorreta) {
                    console.log("Você acertou!");
                    return;
                }
                if (chances === 1) {
                    console.log("Acabaram suas chances, que pena.");
                }
            }
        }
        if (candidatos === 3) {
            console.log("Três pessoas foram mais rápidas que você, que pena.");
        }
    }
}