let responseParse = [];

const getTodos = async () => {
    let response = await fetch("http://localhost:8080/pessoa");
    responseParse = await response.json();

    console.log(responseParse);
}

const getId = async () => {
    let response = await fetch("http://localhost:8080/pessoa/2");
    responseParse = await response.json();

    console.log(responseParse);
}

const getPost = async () => {
    let response = await fetch("http://localhost:8080/pessoa", {
        method: 'POST',
        body: JSON.stringify({
            id: 4,
            marca: "Ford",
            modelo: "Fiesta",
            ano: 2012,
            valorCompra: 18000,
            valorAtual: 21000,
            cor: "Vermelho"
        })
    });
}

const getPut = async () => {
    let response = await fetch("http://localhost:8080/pessoa/4", {
        method: 'PUT',
        body: JSON.stringify({
            marca: "Chevrolet",
            modelo: "Onix",
            ano: 2019,
            valorCompra: 45000,
            valorAtual: 52000,
            cor: "Azul"
        })
    });
}

const getDelete = async () => {
    let response = await fetch("http://localhost:8080/pessoa/4", {
        method: 'DELETE'
    });
}