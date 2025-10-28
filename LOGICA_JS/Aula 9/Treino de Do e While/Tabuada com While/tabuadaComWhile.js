var contador = 1;

function tabuada(){
    var numero = Number(prompt("Digite o número do qual deseja a tabuada"));
    while(contador <= 10){
        console.log(numero * contador);
        contador = contador + 1;
    }
}