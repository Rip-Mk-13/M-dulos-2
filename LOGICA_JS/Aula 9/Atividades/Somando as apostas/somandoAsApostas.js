var numeroApostas = 0;
var totalAposta = 0;

function calcularGanhos(){
    do{
        var apostaIndividual = Number(prompt("Digite o valor da aposta do amigo " + (numeroApostas + 1) + ": "));
        totalAposta = totalAposta + apostaIndividual;
        numeroApostas = numeroApostas + 1;
    } while(numeroApostas < 4);
    alert("Os ganhos do ganhador serão de R$ " + totalAposta.toFixed(2));  
}