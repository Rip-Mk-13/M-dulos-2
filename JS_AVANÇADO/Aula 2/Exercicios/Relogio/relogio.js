function relogio() {
    const horaDiv = document.getElementsByClassName("hora")
    const minutoDiv = document.getElementsByClassName("minuto")
    const segundoDiv = document.getElementsByClassName("segundo")

    function horarioAtual(){
        const agora = new Date().toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo"
        });

        const partes = agora.split(" ")[1].split(":")
        var hora = partes[0]
        var minuto = partes[1]
        var segundo = partes[2]

        horaDiv[0].innerHTML = hora;
        minutoDiv[0].innerHTML = minuto;
        segundoDiv[0].innerHTML = segundo;
    }

    horarioAtual();
    setInterval(horarioAtual,1000)
}