function identificador(parametro){
    return true;
}

identificador();

// Função anônima

const identificadorAnonimo = function (parametro){
    return true;
}


const retornoIdade = function(){
    return 30 + 3;
}

var pessoa ={
    nome: "Mateus",
    idade: retornoIdade()
}

console.log(identificadorAnonimo());
console.log(pessoa);

function reposseIdade(){
    return 30 + 3;
}

const recebeIdade = reposseIdade();