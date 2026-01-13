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
            id: "3",
            nome: "Coelinho da Pascoa"
        })
    });
}

const getPut = async () => {
    let response = await fetch("http://localhost:8080/pessoa/3", {
        method: 'PUT',
        body: JSON.stringify({
            nome: "Vovó Mafalda"
        })
    });
}

const getDelete = async () => {
    let response = await fetch("http://localhost:8080/pessoa/4", {
        method: 'DELETE'
    });
}