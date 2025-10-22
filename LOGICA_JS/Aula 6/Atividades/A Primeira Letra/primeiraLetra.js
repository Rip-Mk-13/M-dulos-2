function entrevista(){
    var nome = prompt("Digite o nome do candidato")
    var primeiraLetra = nome.substring(1);

    if(primeiraLetra === "A" ||
        primeiraLetra === "E" ||
        primeiraLetra === "I" ||
        primeiraLetra === "O" ||
        primeiraLetra === "U"
    ){
        alert("O candidato deve ser entrevistado na segunda-feira!");
    } else {
        alert("O candidato deve ser entrevistado na terça-feira!");
    }
}