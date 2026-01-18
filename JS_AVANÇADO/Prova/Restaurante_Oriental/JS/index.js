function timer() {
    const horaDiv = document.getElementById("hora");
    const minutoDiv = document.getElementById("minuto");
    const segundoDiv = document.getElementById("segundo");

    function timerMeiaNoite() {
        const agora = new Date();

        const meiaNoite = new Date();
        meiaNoite.setHours(24, 0, 0, 0);

        const tempo = meiaNoite - agora;

        if (tempo <= 0) {
            horaDiv.innerHTML = "00";
            minutoDiv.innerHTML = "00";
            segundoDiv.innerHTML = "00";
            return;
        }

        const horas = Math.floor(tempo / (1000 * 60 * 60));
        const minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempo % (1000 * 60)) / 1000);

        horaDiv.innerHTML = String(horas).padStart(2, "0");
        minutoDiv.innerHTML = String(minutos).padStart(2, "0");
        segundoDiv.innerHTML = String(segundos).padStart(2, "0");
    }

    timerMeiaNoite();
    setInterval(timerMeiaNoite, 1000);

    function ofertas() {
        const ofertaDiv = document.getElementById("ofertas")

        const agoraOferta = new Date();
        
        const ofertaInicio = new Date();
        ofertaInicio.setHours(19, 0, 0, 0);

        const ofertaFim = new Date();
        ofertaFim.setHours(22, 0, 0, 0);

        if (agoraOferta < ofertaInicio) {
            const tempo = ofertaInicio - agoraOferta;

            const horasOferta = String(
                Math.floor(tempo / (1000 * 60 * 60))
            ).padStart(2, "0");

            const minutosOferta = String(
                Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60))
            ).padStart(2, "0");

            const segundosOferta = String(
                Math.floor((tempo % (1000 * 60)) / 1000)
            ).padStart(2, "0");

            ofertaDiv.innerHTML =
                `A promoção vai começar em ${horasOferta}:${minutosOferta}:${segundosOferta}`;
        }
        else if (agoraOferta >= ofertaInicio && agoraOferta < ofertaFim) {
            const tempo = ofertaFim - agoraOferta;

            const horasOferta = String(
                Math.floor(tempo / (1000 * 60 * 60))
            ).padStart(2, "0");

            const minutosOferta = String(
                Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60))
            ).padStart(2, "0");

            const segundosOferta = String(
                Math.floor((tempo % (1000 * 60)) / 1000)
            ).padStart(2, "0");

            ofertaDiv.innerHTML =
                `Aproveite a promoção por ${horasOferta}:${minutosOferta}:${segundosOferta}`;
        }
        else {
            const amanha = new Date();
            amanha.setDate(amanha.getDate() + 1);
            amanha.setHours(19, 0, 0, 0);

            const tempo = amanha - agoraOferta;

            const horasOferta = String(
                Math.floor(tempo / (1000 * 60 * 60))
            ).padStart(2, "0");

            const minutosOferta = String(
                Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60))
            ).padStart(2, "0");

            const segundosOferta = String(
                Math.floor((tempo % (1000 * 60)) / 1000)
            ).padStart(2, "0");

            ofertaDiv.innerHTML =
                `A promoção acabou, mas voltará em ${horasOferta}:${minutosOferta}:${segundosOferta}`;
        }
    }

    ofertas();
    setInterval(ofertas, 1000);
}

timer();

const relogioDiv = document.getElementById("relogio");

relogioDiv.style.display = "flex";
relogioDiv.style.gap = "6px";
relogioDiv.style.color = "red";
relogioDiv.style.fontSize = "40px";
relogioDiv.style.background = "yellow";
relogioDiv.style.marginTop = "37%";
relogioDiv.style.marginLeft = "43%";
relogioDiv.style.marginRight = "43%";
relogioDiv.style.borderRadius = "5px";

const promocaoDivs = document.querySelectorAll(".promocao");

promocaoDivs.forEach(div => {
    div.style.display = "flex";
    div.style.gap = "5px";
    div.style.color = "red";
    div.style.background = "yellow";
    div.style.marginLeft = "35%";
    div.style.marginRight = "35%";
    div.style.justifyContent = "center";
    div.style.borderRadius = "3px";
});