const transporte = () => {
    const listaTransporte = ["Carro", "Ônibus", "Bicicleta", "Avião"]

    const fn = (item) => item === "🛸";

    const amiguinhos = listaTransporte.filter(fn);
    console.log(amiguinhos);
};

transporte();