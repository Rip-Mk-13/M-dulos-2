var horaInicio = Number(prompt("Digite o horário em que o intervalo de tempo começa:"));
var horaFim = Number(prompt("Digite o horário em que o intervalo de tempo acaba:"));

function gentilezaDoDia(horaInicio, horaFim) {
    var gentileza = "";

    // Corrige valores maiores que 24 horas
    if (horaFim >= 24) {
        horaFim = horaFim - 24;
    }

    // Define a saudação de acordo com o horário de início
    if (horaInicio >= 0 && horaInicio < 6) {
        gentileza = "Boa Madrugada";
    } else if (horaInicio >= 6 && horaInicio < 12) {
        gentileza = "Bom Dia";
    } else if (horaInicio >= 12 && horaInicio < 18) {
        gentileza = "Boa Tarde";
    } else if (horaInicio >= 18 && horaInicio < 24) {
        gentileza = "Boa Noite";
    } else {
        gentileza = "Horário inválido";
    }

    alert("De(as) " + horaInicio + " até " + horaFim + " é recomendado dizer: " + gentileza);
}

gentilezaDoDia(horaInicio, horaFim);