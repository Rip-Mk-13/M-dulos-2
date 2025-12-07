function nomeAlunos(){
    var nomeAlunos = []

    var aluno1 = prompt("Digite o nome do primeiro aluno")
    nomeAlunos.push(aluno1)
    var aluno2 = prompt("Digite o nome do segundo aluno")
    nomeAlunos.push(aluno2)
    var aluno3 = prompt("Digite o nome do terceiro aluno")
    nomeAlunos.push(aluno3)

    return nomeAlunos
}

var alunos = {
    alunos: nomeAlunos()
}

var alunosOrdenados = alunos.alunos.sort();

console.log(alunosOrdenados);