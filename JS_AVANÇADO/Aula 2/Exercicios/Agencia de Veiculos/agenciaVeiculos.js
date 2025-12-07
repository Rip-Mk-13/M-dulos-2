const carros = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2018,
    valorCompra: 72000,
    valorAtual: 85000,
    cor: "Prata"
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2016,
    valorCompra: 65000,
    valorAtual: 69000,
    cor: "Preto"
  },
  {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2014,
    valorCompra: 22000,
    valorAtual: 26000,
    cor: "Branco"
  },
  {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2012,
    valorCompra: 18000,
    valorAtual: 21000,
    cor: "Vermelho"
  }
];

const mostrarCarro = ({marca, modelo, ano, valorCompra, valorAtual, cor}) => {
    var lucro = valorAtual - valorCompra;
    var ipva = valorAtual * 0.04;
    var licenciamento; 
    if(2025 - ano >= 10){
        licenciamento = 160;
    } else{
        licenciamento = 0;
    }

    return {
    marca,
    modelo,
    ano,
    valorCompra,
    valorAtual,
    cor,
    lucro,
    ipva,
    licenciamento
  };
};

console.log(mostrarCarro(carros[0]));
console.log(mostrarCarro(carros[1]));
console.log(mostrarCarro(carros[2]));
console.log(mostrarCarro(carros[3]));