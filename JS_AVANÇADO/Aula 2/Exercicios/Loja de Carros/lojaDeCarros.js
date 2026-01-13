const table = document.getElementById("table");

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
  
const calcularInfo = (carro) => {
    const lucro = carro.valorAtual * 0.03;
    const ipva = carro.valorAtual * 0.04;
    const licenciamento = (2025 - carro.ano) >= 10 ? 160 : 0;

    return{
        marca,
        modelo,
        ano,
        valorCompra,
        valorAtual,
        cor,
        lucro,
        ipva,
        licenciamento
    }
};

const exibirCarros = () => {
    carros.forEach(c => {
        const carro = calcularInfo(c);

        const tr = document.createElement("tr");

        const dados = [
            carro.marca,
            carro.modelo,
            carro.ano,
            carro.valorCompra,
            carro.valorAtual,
            carro.cor,
            carro.lucro.toFixed(2),
            carro.ipva.toFixed(2),
            carro.licenciamento
        ];

        dados.forEach(item => {
            const td = document.createElement("td");
            td.textContent = item;
            tr.appendChild(td);
        });

        table.appendChild(tr);
    });
};

exibirCarros();