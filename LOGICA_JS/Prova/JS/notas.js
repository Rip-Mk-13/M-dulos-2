var alunos = [];

function cadastrarAlunos() {
    alunos = [];

    for (let i = 0; i < 5; i++) {
        let nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
        let modulo = prompt("Digite o módulo do aluno " + (i + 1) + ":");
        let nota_4 = Number(prompt("Digite a nota da avaliação 4:"));
        let nota_6 = Number(prompt("Digite a nota da avaliação 6:"));

        alunos.push({
            nome: nome,
            modulo: modulo,
            nota_4: nota_4,
            nota_6: nota_6
        });
    }
}

function calcularMedia(aluno) {
    return (aluno.nota_4 + aluno.nota_6) / 2;
}

function verificarAprovacao(media) {
    if (media >= 6) {
        return "aprovado";
    } else {
        return "reprovado";
    }
}

function corrigirAvaliacoes() {
    cadastrarAlunos();

    for (var i = 0; i < alunos.length; i++) {
        var media = calcularMedia(alunos[i]);
        var resultado = verificarAprovacao(media);

        console.log(
            alunos[i].nome +
            "\nMédia: " + media +
            "\nResultado: " + resultado
        );
    }
}