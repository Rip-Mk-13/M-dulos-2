const veiculo = [
  {
    marca: "Chevrolet",
    modelo: "Onix",
    anoModelo: 2021,
    anoFabricacao: 2020
  },
  {
    marca: "Volkswagen",
    modelo: "Gol",
    anoFabricacao: 2018
  }
]

for (let i = 0; i < veiculo.length; i++) {
  if(veiculo[i].anoModelo !== undefined){
    console.log("O ano modelo do carro é " + veiculo[i].anoModelo);
  } else{
    console.log("O ano do carro é " + veiculo[i].anoFabricacao);
  }
}
