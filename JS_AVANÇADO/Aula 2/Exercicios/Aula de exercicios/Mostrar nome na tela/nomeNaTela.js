var botao = document.getElementById("inputBotao")

botao.onclick = function(){
    var nome = document.getElementById("nomeDigitado").value

    var paragrafo = document.getElementById("inputNome")

    paragrafo.innerHTML = "Seu nome é " + nome
}