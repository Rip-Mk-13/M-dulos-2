var numero = document.getElementById("numero");
numero.innerHTML = 0;

var botaoMenos = document.getElementById("botaoMenos")
var botaoMais = document.getElementById("botaoMais")

botaoMenos.onclick = function(){
    var valorAtual = Number(numero.innerHTML)
    numero.innerHTML = valorAtual - 1;
}

botaoMais.onclick = function(){
    var valorAtual = Number(numero.innerHTML)
    numero.innerHTML = valorAtual + 1;
}