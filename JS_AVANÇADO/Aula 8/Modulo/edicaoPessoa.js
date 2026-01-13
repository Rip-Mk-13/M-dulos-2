import { putPessoa } from "./pessoasService";

const editarPessoa = async () => {
    let nomePessoa = document.getElementById("nomePessoa").value;
    console.log(nomePessoa);

    putPessoa(nomePessoa)
}