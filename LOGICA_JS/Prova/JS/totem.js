function totem() {
    var sanduiche = prompt("Digite o nome do seu sanduíche:");
    var acompanhamentos = [];
    var nomeAcompanhamentos;

    do {
        nomeAcompanhamentos = prompt("Quais acompanhamentos deseja? \n(Digite 'Concluir' para finalizar o pedido)");
        if(nomeAcompanhamentos.toLowerCase() !== "concluir" && nomeAcompanhamentos.trim() !== "" && acompanhamentos.length < 5){
            acompanhamentos.push(nomeAcompanhamentos);
        }
    } while(nomeAcompanhamentos.toLowerCase() !== "concluir" && nomeAcompanhamentos.trim() !== "" && acompanhamentos.length < 5);

    console.log(
        "Seu " + sanduiche +
        " e seus " + acompanhamentos.length +
        " acompanhamentos: " + acompanhamentos.join(", ") +
        " irão custar: R$" + (10 + acompanhamentos.length * 2)
    );
}