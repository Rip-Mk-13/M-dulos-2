var total = 0;

function contaMercado(valorProduto, valorDesconto, nomeProduto) {
    total = total + valorProduto - valorDesconto;

    console.log("Bipado o produto: " + nomeProduto + " no valor de: " + valorProduto + " com o desconto de: " + valorDesconto);
    console.log("Total:" + total);
}

function nomeProduto(produto) {
    // var produto = produto;
    // return produto;
    return produto;
}

contaMercado(10, 2, nomeProduto(2));
contaMercado(5, 1, nomeProduto("Nuggets"));
contaMercado(25, 5, nomeProduto("Coca-cola"));

// 8
// 12
// 32