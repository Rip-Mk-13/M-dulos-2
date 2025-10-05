function centavos(){
    var num1 = prompt("Digite o seu valor");
    var num2 = prompt("Em quantas vezes ele será dividido");

    var resultado = num1 % num2;

    alert("Seu resto é igual à: " + resultado);
}