function notasEscolares(){
    var alunos = []
    var notas = []
    var alunosQntd = Number(prompt("Quantos alunos fazem parte da turma?"))

    while(alunos.length < alunosQntd){
        var nomeAluno = prompt("Digite o nome do aluno: ")
        alunos.push(nomeAluno);

        var notaAluno = Number(prompt("Digite a nota deste aluno: "))
        notas.push(notaAluno);
    }


    console.log("RELATÓRIO DE NOTAS: ");
    for(var i = 0; i < alunosQntd; i++){
        console.log("Alunos: " + alunos[i] + " Notas: " + notas[i]);
    }

    var maiorNota = Math.max(...notas)
    var indiceMaiorNota = notas.indexOf(maiorNota)
    console.log("O aluno com a maior nota é " + alunos[indiceMaiorNota] + " com a nota " + maiorNota);
    
    var abaixoDeSete = 0
    for(i = 0; i < notas.length; i++){
        if(notas[i] < 7){
            abaixoDeSete++
        }
    }
    console.log("Quantidade de alunos com a nota abaixo de sete: " + abaixoDeSete)
}