function sapatoPorNome(){
    var prateleira = ["Adidas", "", "Nike", "", "Olympikus"]
    var resposta = prompt("Qual o nome do seu sapato? \nAdidas, Nike ou Olympikus? ")
    var posicao = prateleira.indexOf(resposta);

    if(resposta !== -1){
        console.log("Seu sapato " + resposta + " está na gaveta: " + (posicao + 1) );
    } else {
        console.log("Roubaro teu sapato menor")
    }
}