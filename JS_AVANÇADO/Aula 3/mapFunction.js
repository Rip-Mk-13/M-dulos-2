const transporte = () => {
    const listaTransporte = ["Carro", "Ônibus", "Bicicleta", "Avião"]

    const top = (item) => "Top " + item;
    const listaMap = listaTransporte.map(top);

    console.log(listaTransporte);
    console.log(listaMap);
};

transporte();