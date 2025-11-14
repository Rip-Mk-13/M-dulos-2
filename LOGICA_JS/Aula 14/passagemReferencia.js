function passagemPorReferencia(){
    var fusca = {
        marca: "Volkswagen",
        modelo: "Fusca",
        ano: 1986,
        cor: "Bege",
        motor: "1.3",
        placa: "OLD-1977",
        tipoCombustivel: "Gasolina",
        ligado: false
    }

    var carro = fusca;

    carro.ligado = true;

    console.log(fusca);
    console.log(carro);
}

passagemPorReferencia();