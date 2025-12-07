var azul = document.getElementById("azul")
var vermelho = document.getElementById("vermelho")
var verde = document.getElementById("verde")

azul.onclick = function(){
    document.getElementById("texto").style.color = "blue";
}

vermelho.onclick = function(){
    document.getElementById("texto").style.color = "red";
}

verde.onclick = function(){
    document.getElementById("texto").style.color = "green";
}