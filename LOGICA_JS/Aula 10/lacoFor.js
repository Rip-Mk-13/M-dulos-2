// function exWhile(){
//     var contador = 1;
//     while(contador <= 5){
//         contador++
//         // ...
//     }
// }

// function exFor(){
//     var qtdPessoasCad = response

//     for(var contador = 0; contador <= qtdPessoasCad.length; contador++){
//         // ...        
//     }

//     var valorInicial = 5;
//     var valorFinal = 0;
//     for(var contador = valorInicial; contador <= valorFinal; contador--){
//         // ...        
//     }

//     for(var i = 0, j = 10; i > j && j < i; i++, j--){

//     }
// }

function encadeamentoLaco(){
    for(var i = 0; i < 3; i++){
        console.log("entrou " + i + " vezes!");

        var resposta;
        for(var j = 0; j < 2; j++){
            if(resposta === "Resposta Correta"){
                console.log("entrou no for de dentro: " + j + " vezes!");
                break;     
            } else{
                console.log("Vacilão");
                
            }
        }
    }
}

function lacoContinue(){
    for(var i = 0; i < 10; i++){
        if(i == 3){
            continue
        }
        console.log("indes = à: " + i);
        
    }
}