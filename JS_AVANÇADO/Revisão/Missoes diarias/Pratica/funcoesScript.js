let responseParse = [];

const getMissao = async () => {
    let response = await fetch("http://localhost:3000/missoes");
    responseParse = await response.json();

    console.log(responseParse);
}

const idMissao = async () => {
    let response = await fetch("http://localhost:3000/missoes/2");
    responseParse = await response.json();

    console.log(responseParse);
}

const postMissao = async () => {
    let response = await fetch("http://localhost:3000/missoes", {
        method: 'POST',
        body: JSON.stringify({
            id: "",
            missao: ""
        })
    });
}

const putMissao = async () => {
    let response = await fetch("http://localhost:3000/missoes/3", {
        method: 'PUT',
        body: JSON.stringify({
            nome: "Vovó Mafalda"
        })
    });
}

const deleteMissao = async (id) => {
    fetch('http://localhost:3000/filmes/' + "2", {
        method: 'DELETE',
    })
    .then((response) => response.json());
}

export { postMissao, getMissao, putMissao, idMissao, deleteMissao }