function listaObjetos() {
    var fusca = {
        marca: "Volkswagen",
        modelo: "Fusca",
        ano: 1978,
        cor: "Azul calcinha",
        placa: "ABC-1234",
        ligado: false,
    }

    var opala = {
        marca: "Chevrolet",
        modelo: "Opala SS",
        ano: 1976,
        cor: "Amarelo",
    };

    var golQuadrado = {
        marca: "Volkswagen",
        modelo: "Gol Quadrado",
        ano: 1994,
        cor: "Branco",
    };

    var unoComEscada = {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2010,
        cor: "Vermelho",
        escadaNoTeto: true,
    };

    var hilux = {
        marca: "Toyota",
        modelo: "Hilux",
        ano: 2022,
        cor: "Preto",
    };

    var carros = [];

    carros.push(fusca);
    carros.push(opala);
    carros.push(golQuadrado);
    carros.push(unoComEscada);
    carros.push(hilux);

    carros[2].cor = "Vermelho";

    console.log(carros);
    console.log(carros.length);
    console.log(golQuadrado);


}

listaObjetos();