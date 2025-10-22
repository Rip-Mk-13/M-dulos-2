var a = Number(prompt("Número A: "))
var b = Number(prompt("Número B: "))

function maiorNumero(a, b){
    var mensagem = "";
    if(a > b){
        mensagem = "O número A é maior que o número B";
    } else if(b > a){
        mensagem = "O número B é maior que o número A";
    } else{
        mensagem = "Ambos os números são iguais";
    }
    alert(mensagem);
}

maiorNumero(a, b)
