function cadastroAlunos(){
    // var aluno = {
    //     nome: "João",
    //     idade: "33",
    //     curso: "Front-end",
    //     modalidade: "Semi-presencial",
    //     endereco: "Rua x",
    //     cpf: "111.222.333-44",
    //     time: "Flamengo",
    // }

    // var aluno1 = {
    //     nome: "João",
    //     idade: "33",
    //     curso: "Front-end",
    //     modalidade: "Semi-presencial",
    //     endereco: "Rua x",
    //     cpf: "111.222.333-44",
    //     time: "Flamengo",
    // }

    var aluno = {
        nome: "João",
        idade: "33",
        curso: "Front-end",
        modalidade: "Semi-presencial",
        endereco: {
                pais: "Brasil",
                estado: "RJ",
                cidade: "Teresópolis",
                bairro: "Centro",
                numero: 90,
                rua: "x"
            },
        cpf: "111.222.333-44",
        time: "Flamengo",
    }

    var aluno2 = aluno;

    aluno2.idade = 30;

    console.log(aluno);
    console.log(aluno.nome);
    console.log(aluno.time);

    console.log("Aluno2:", aluno2);
    console.log(aluno2.idade)
}

cadastroAlunos()