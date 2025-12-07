const veiculos = () => {
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
      }
    ]

    carros.forEach(({marca}, indice) => {
        console.log(indice, marca)
    })
}

veiculos();