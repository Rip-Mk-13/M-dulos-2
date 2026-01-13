const table = document.getElementById("table");

function aluno(nome, nota1, nota2) {
    const media = (nota1 + nota2) / 2;

    const tr = document.createElement("tr");

    const dados = [nome, nota1, nota2, media]

    dados.forEach( item => {
        const td = document.createElement("td");
        td.textContent = item;
        tr.appendChild(td);
    });

    if(media >=7) {
        tr.style.backgroundColor = "green";
    } else {
        tr.style.backgroundColor = "red";
    }

    table.appendChild(tr);
}

aluno("Fulano1", 8, 10);
aluno("Fulano2", 7, 3);
