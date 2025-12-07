var botao = document.getElementById("inputBotao");

botao.onclick = function(){
    var nascimento = document.getElementById("inputIdade").value;

    var idade = 2025 - nascimento;

    var paragrafo = document.getElementById("outputNome");

    paragrafo.innerHTML = "Sua idade está entre " + idade + " e " + (idade - 1);
}