class Carro {
    constructor({marca, modelo, ano, cor, motor, placa, tipoCombustivel}) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.motor = motor;
        this.placa = placa;
        this.tipoCombustivel = tipoCombustivel;
    }
};

var carro1 = new Carro(
    {
        marca: "Volkswagen",
        modelo: "Fusca",
        ano: 1986,
        cor: "Bege",
        motor: "1.3",
        placa: "OLD-1977",
        tipoCombustivel: "Gasolina",
    }
);

var carro2 = new Carro(
    {
        marca: "Chevrolet",
        modelo: "Chevette",
        ano: 1982,
        cor: "Verde",
        motor: "1.4",
        placa: "RET-1982",
        tipoCombustivel: "Gasolina",
    }
);

console.log(carro1);
console.log(carro2);