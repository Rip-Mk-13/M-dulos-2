const transporte = () => {
    const listaTransporte = ["Carro", "Ônibus", "Bicicleta", "Avião"]

    // const fn = (item) => item === "🛸";
    // const amiguinhos = listaTransporte.filter(fn);

    const amiguinhos = listaTransporte.find((item) => item === "🛸");
    console.log(amiguinhos);
};

transporte();