var numero1 = Number(prompt("Digite o primeiro número: "))
var numero2 = Number(prompt("Digite o segundo número: "))

function multiplicar(numero1, numero2){
    var resultado = numero1 * numero2
    alert("A operação " + numero1 + " x " + numero2 + " é igual a " + resultado)
}

multiplicar(numero1, numero2);