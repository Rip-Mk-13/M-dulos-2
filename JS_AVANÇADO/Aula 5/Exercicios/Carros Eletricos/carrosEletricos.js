class Carro {
    constructor(marca, modelo, ano, cor, motor, portas, rodas) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.motor = motor;
        this.portas = portas;
        this.rodas = rodas;
    }
}

class CarrosEletricos extends Carro{
    constructor(marca, modelo, ano, cor, motor, portas, rodas, bateria, autonomia, carregador, pilotoAuto) {
        super(marca, modelo, ano, cor, motor, portas, rodas)
        this.bateria = bateria;
        this.autonomia = autonomia;
        this.carregador = carregador;
        this.pilotoAuto = pilotoAuto;
    }
}

const teslaModel3 = new CarrosEletricos(
    "Tesla",
    "Model 3",
    2024,
    "Branco",
    "Motor elétrico 210cv",
    4,
    "Aro 18",
    "75 kWh",
    "480 km",
    "Carregamento rápido 250 kW",
    true
);

const nissanLeaf = new CarrosEletricos(
    "Nissan",
    "Leaf",
    2023,
    "Prata",
    "Motor elétrico 150cv",
    4,
    "Aro 16",
    "40 kWh",
    "240 km",
    "Carregador portátil 6 kW",
    false
);

const bydDolphin = new CarrosEletricos(
    "BYD",
    "Dolphin",
    2024,
    "Azul",
    "Motor elétrico 95cv",
    4,
    "Aro 16",
    "44.9 kWh",
    "400 km",
    "Carregamento rápido 60 kW",
    false
);

console.log(teslaModel3);
console.log(nissanLeaf);
console.log(bydDolphin);