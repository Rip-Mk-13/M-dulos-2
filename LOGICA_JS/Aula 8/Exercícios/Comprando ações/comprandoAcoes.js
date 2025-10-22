function comprarAcao(codigo, valorAcao, quantidade) {
    var valorTotal = valorAcao * quantidade;
    return valorTotal;
}

var compra1 = comprarAcao("Microsoft", 70, 3)
var compra2 = comprarAcao("Disney", 60, 2)
var compra1 = comprarAcao("Apple", 30, 4)

console.log("Compra 1: R$ " + compra1)
console.log("Compra 2: R$ " + compra2)
console.log("Compra 3: R$ " + compra3)