function notasEscolares(){
    alunos = []
    notas = []

    for(;;){
        var nome = prompt("Qual o nome do próximo aluno? \n (Ou digite 'Acabado' para parar)");

        if (nome.toLowerCase() === "acabado"){
            alert("Alunos reconhecidos");
            break;
        }

        var nota = Number(prompt("Digite a nota deste aluno \n (Ou digite 'Acabado' para parar)"))

        alunos.push({nomeAluno: nome, notaAluno: nota});
    }

    alunos.sort((a, b) => b.nota - a.nota);

    for (var i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome + " = " + alunos[i].nota)
    }
}

