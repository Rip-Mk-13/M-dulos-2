const produtos = [
    { nome: "Arroz", preco: 20.00 },
    { nome: "Feijão", preco: 8.50 },
    { nome: "Macarrão", preco: 5.00 },
    { nome: "Óleo", preco: 7.20 },
    { nome: "Açúcar", preco: 4.80 }
]

let escolha = prompt("Qual produto você deseja comprar?\nArroz, Feijão, Macarrão, Óleo ou Açúcar");

var minutos = new Date().getMinutes();

function descontoPar(preco) {
    return preco * 0.85;
}

function descontoImpar(preco) { 
    return preco * 0.80;
}

let funcaoDesconto = (minutos % 2 === 0) ? descontoPar : descontoImpar;

let produtoEscolhido = produtos.find(
    p => p.nome.toLowerCase() === escolha.toLowerCase()
);

if (!produtoEscolhido) {
    console.log("Produto não encontrado.");
} else {
    let precoFinal = funcaoDesconto(produtoEscolhido.preco);

    console.log(`
Produto: ${produtoEscolhido.nome}
Minuto atual: ${minutos}
Preço original: R$ ${produtoEscolhido.preco.toFixed(2)}
Preço com desconto: R$ ${precoFinal.toFixed(2)}
    `);
}