function promocao(){
    for(var valorInicial = 0, valorMax = 5; valorInicial <= valorMax; valorInicial++){
        if(valorInicial < valorMax){
            console.log("Parabéns, você ganhou a promoção");
        } else{
            console.log("Oops, parece que cinco pessoas já foram mais rápidas, mais sorte da próxima");
        }
    }
}