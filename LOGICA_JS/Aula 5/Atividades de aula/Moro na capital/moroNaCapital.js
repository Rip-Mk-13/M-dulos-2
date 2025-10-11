function estadoNome(){
    var estado = prompt("Digite a sigla do seu estado");
    var nomeEstado;

    switch (estado) {
        case "SP":
            nomeEstado = "São Paulo"
            break;
        case "RJ":
            nomeEstado = "Rio de Janeiro"
            break;
        case "MG":
            nomeEstado = "Minas Gerais"
            break;
        case "ES":
            nomeEstado = "Espirito Santo"
            break;
        case "sp":
            nomeEstado = "São Paulo"
            break;
        case "rj":
            nomeEstado = "Rio de Janeiro"
            break;
        case "mg":
            nomeEstado = "Minas Gerais"
            break;
        case "es":
            nomeEstado = "Espirito Santo"
            break;

        default: nomeEstado = "Não registrado!"
            break;
    }

    if(estado = true){
        alert("O seu estado é " + nomeEstado)
    } else {
        alert("Seu estado não está registrado")
    }
}