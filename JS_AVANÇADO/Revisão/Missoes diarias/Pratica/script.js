import { getMissao } from "./funcoesScript.js";

console.log(getMissao);

// const tangerina = JSON.parse(getMissao())

const tabela = document.getElementById("table");

fetch("db.json")
.then(response => response.json())
.then(db => {

    async function missao(missao) {

        for (let i = 0; i < db.length; i++) {
            
            const tr = document.createElement("tr");
            const dados = [missao]

            dados.forEach( item => {
                const td = document.createElement("td");
                td.textContent = item;
                tr.appendChild(td);
            });

            tabela.appendChild(tr);
        }
    }
});


// missao(tangerina)