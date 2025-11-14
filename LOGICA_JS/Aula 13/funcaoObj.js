function produtos(){
    var produto = {
            nome: "PS5",
            cor: "branco",
            anoFabricacao: 2023,
            valorTotal: videoGame(3000, 0, 100)
    }

    console.log(produto);
    
}

function videoGame(valor, juros, desconto){
    return valor + juros - desconto;
}

produtos();