function limiteDePessoas(){
    const limite = 15
    var participantes = prompt("Digite o número de pessoas na chamada")

    if(participantes >= 16){
        alert("O limite de participantes foi ultrapassado por: " + (participantes - 15));
    } else {
        if(participantes == 15){
            alert("A chamada está cheia");
        } else {
            if(participantes == 14){
                alert("Na chamada, 1 participante ainda pode entrar");
            } else {
            alert("Na chamada, " + (15 - participantes) + " participantes ainda podem entrar");
            }
        }
    }
}