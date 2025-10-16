function infoNumero(){
    var numero = prompt("Qual o número que deseja?")
    var valorNumero = parseFloat(numero)
    var raizNumero = Math.sqrt(valorNumero)
    var raizNumeroCima = Math.ceil(raizNumero)
    var raizNumeroBaixo = Math.floor(raizNumero)

    console.log("Raiz quadrada: " + raizNumero)
    console.log("Raiz para cima: " + raizNumeroCima)
    console.log("Raiz para baixo: " + raizNumeroBaixo)

    if(raizNumeroBaixo % 2 === 0){
        console.log("A raiz para baixo é par")
    } else{
        console.log("A raiz para baixo é impar")
    }
}