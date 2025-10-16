function vendaPreco(){
    var valor = prompt("Quanto é o valor da sua compra?");
    var valorCompra = Math.floor(valor);
    var centavos = (valor - valorCompra) * 100;

    alert("A partir de " + valor + " reais, você pagará " + valorCompra + " e economizará " + centavos + " centavos");
}   