function chamadaWhile(){
    var alunos = []
    var nome = prompt("Qual o nome do primeiro aluno? \n (Deixe em branco para encerrar)")

    while(nome.trim() !== ""){
        alunos.push(nome)
        nome = prompt("Qual o nome do próximo aluno? \n (Deixe em branco para encerrar)")
    }
    console.log("Alunos presentes: " + alunos.join(", "));
    console.log("Dos 20 alunos " + alunos.length + " estão presentes")
}

function chamadaDoWhile(){
    var alunos = []
    var nome = prompt("Qual o nome do primeiro aluno? \n (Deixe em branco para encerrar)")

    do{
        if(nome.trim() !== ""){
            alunos.push(nome)
        }
        nome = prompt("Qual o nome do próximo aluno? \n (Deixe em branco para encerrar)")
    } while(nome.trim() !== "")
    console.log("Alunos presentes: " + alunos.join(", "));
    console.log("Dos 20 alunos " + alunos.length + " estão presentes")
}