import { getPokemon, postPokemon, putPokemon, deletarPokemon } from "../JS/crudPokemon.js"

const listarPokemon = async () => {
    let listaPokemon = await getPokemon();
    let ul = document.getElementById("listarPokemon")

    ul.innerHTML = "";

    for(let i = 0; i < listaPokemon.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `
            ID: ${listaPokemon[i].id} <br>
            Nome: ${listaPokemon[i].nome} <br>
            Tipo: ${listaPokemon[i].tipo} <br>
        `
        ul.appendChild(li)
    }

    console.log(listaPokemon);
}

const criarCadastro = async() => {
    let idInput = document.getElementById("id").value;
    let nomeInput = document.getElementById("nome").value;
    let tipoInput = document.getElementById("tipo").value;
    let nivelInput = document.getElementById("nivel").value;
    let regiaoInput = document.getElementById("regiao").value;
    postPokemon(idInput, nomeInput, tipoInput, nivelInput, regiaoInput);
}

const editarCadastro = async() => {
    let idInput = document.getElementById("id").value;
    let nomeInput = document.getElementById("nome").value;
    let tipoInput = document.getElementById("tipo").value;
    let nivelInput = document.getElementById("nivel").value;
    let regiaoInput = document.getElementById("regiao").value;

    putPokemon(idInput, nomeInput, tipoInput, nivelInput, regiaoInput);
}

const delPokemon = async () => {
    let idInput = document.getElementById("idPokemon").value;

    deletarPokemon(idInput)
}
 
document.getElementById("getPokemon").addEventListener("click", listarPokemon);
document.getElementById("enviar").addEventListener("click", criarCadastro);
document.getElementById("editar").addEventListener("click", editarCadastro);
document.getElementById("deletarPokemon").addEventListener("click", delPokemon);