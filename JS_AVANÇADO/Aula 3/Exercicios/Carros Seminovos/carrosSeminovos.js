const veiculos = () => {
    const carros = [
        {
            marca: "Toyota",
            modelo: "Yaris",
            ano: 2024,   // Menos de 3 anos
            valorCompra: 89000,
            valorAtual: 95000,
            cor: "Branco"
        },  
        {   
            marca: "Chevrolet",
            modelo: "Onix",
            ano: 2023,   // Menos de 3 anos
            valorCompra: 78000,
            valorAtual: 82000,
            cor: "Preto"
        },
        {   
            marca: "Honda",
            modelo: "Fit",
            ano: 2019,   // Mais de 3 anos
            valorCompra: 62000,
            valorAtual: 69000,
            cor: "Prata"
        }
    ]

    const anoAtual = new Date().getFullYear();
    const seminovos = carros.filter(carro => anoAtual - carro.ano <= 3);

    console.log(seminovos);
};

veiculos();