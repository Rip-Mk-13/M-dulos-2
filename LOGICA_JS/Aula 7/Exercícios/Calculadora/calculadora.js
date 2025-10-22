function calculadora(){
    var valor1 = Number(prompt("Digite o primeiro número:"));
    var valor2 = Number(prompt("Digite o segundo número:"));

    var soma = valor1 + valor2;
    var subtracao = valor1 - valor2;
    var multiplicacao = valor1 * valor2;
    var divisaoReal = valor1 / valor2;
    var divisaoInteira = Math.round(divisaoReal);

    alert(
    "Soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão real: " + divisaoReal +
    "\nDivisão inteira: " + divisaoInteira
    );

    console.log(
    "Soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão real: " + divisaoReal +
    "\nDivisão inteira: " + divisaoInteira
    );
}