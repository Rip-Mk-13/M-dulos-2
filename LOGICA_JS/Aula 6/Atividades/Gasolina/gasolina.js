function valorGasolina(){
    var valor = prompt("Qual o valor da gasolina? \n (Digite usando 3 digitos decimais)")
    alert("O valor da sua gasolina é de: " + parseFloat(valor) + " reais.");
    
    valorConsole = Math.round(valor)
    console.log("Valor:" + valorConsole);
}