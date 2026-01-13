import { getCarro } from "./carrosService.js";

const listarCarros = async () => {
    let listaCarros = await getCarro();

    let addLi = "";
    let itemLi = "";

    listaCarros.forEach((carro) => {
        addLi = document.createElement("li");
        itemLi = document.createTextNode(`ID: ${carro.id} - ${carro.nome} - ${carro.modelo}`);

        addLi.appendChild(itemLi);
        document.getElementById("listarCarros").appendChild(addLi)
    });
}

let inputGet = document.getElementById("getCarros");
inputGet.addEventListener("click", listarCarros);