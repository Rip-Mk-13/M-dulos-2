import { postPessoa } from "./pessoasService.js";

const cadastrarPessoa = async () => {
    let nomePessoa = document.getElementById("nomePessoa").value;
    console.log(nomePessoa);

    postPessoa(nomePessoa)
}