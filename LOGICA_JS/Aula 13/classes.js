class Aluno{
    nome
    idade
    curso
    modalidade
    endereco
    cpf
    time
}

var aluno1 = new Aluno()
aluno1.nome = "Gustavo"
aluno1.idade = 19
aluno1.curso = "Front-end"
aluno1.modalidade = "Semi-presencial"
aluno1.endereco = "Rua blablabla"
aluno1.cpf = "111.111.111-11"
aluno1.time = "Flamengo"

console.log(aluno1);

class Aluno1{
    constructor(nome, idade, curso, modalidade, endereco, cpf, time){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.modalidade = modalidade;
        this.endereco = endereco;
        this.cpf = cpf;
        this.time = time;
    }
};

var aluno2 = new Aluno1(
    {    
        nome: "João",
        idade: "33",
        curso: "Front-end",
        modalidade: "Semi-presencial",
        endereco: "Rua x",
        cpf: "111.222.333-44",
        time: "Flamengo",
    }
);

console.log(aluno2);