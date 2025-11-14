function listaObjetos() {
    var carros = {
        fusca: {
            marca: "Volkswagen",
            modelo: "Fusca",
            ano: 1978,
            cor: "Azul",
        },

        opala: {
            marca: "Chevrolet",
            modelo: "Opala SS",
            ano: 1976,
            cor: "Amarelo",
        },

        golQuadrado: {
            marca: "Volkswagen",
            modelo: "Gol Quadrado",
            ano: 1994,
            cor: "Preto",
        },

        unoComEscada: {
            marca: "Fiat",
            modelo: "Uno",
            ano: 2010,
            cor: "Vermelho",
            escadaNoTeto: true,
        },

        hilux: {
            marca: "Toyota",
            modelo: "Hilux",
            ano: 2022,
            cor: "Preto",
        },
    }

    const contagemCores = {};

    for (const chave in carros) {
        const carro = carros[chave]
        const cor = carro.cor;
        contagemCores[cor] = (contagemCores[cor] || 0) + 1;
    }

    console.log(contagemCores);
}

listaObjetos();


// Ou

