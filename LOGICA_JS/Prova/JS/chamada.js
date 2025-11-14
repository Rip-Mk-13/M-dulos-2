function chamada(){
    var alunos = []
    var nomeAlunos = prompt("Qual o nome do primeiro aluno")
    while(nomeAlunos.trim() !== ""){
        alunos.push(nomeAlunos)
        nomeAlunos = prompt("Qual o nome do próximo aluno?")
    }
    console.log("Alunos " + alunos.join(", "))
}