var alunos = 0;
var alunosPresentes = 0;

function chamada(){
    do{
        var presenca = (prompt("Digite o nome do " + (alunos + 1) + "° aluno \n (Deixe em branco caso tenha faltado)"))
        if(presenca !== ""){
            alunosPresentes++;
        }
        alunos++;
    } while(alunos < 20)
    alert("Dos 20 alunos, " + alunosPresentes + " estão presentes")
}