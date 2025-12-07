function contagem() {
    let tempo = 4 * 60;

    const timer = setInterval(() => {
        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;

        console.log(
            `${String(minutos).padStart(2, "0")}:${String(segundos.padStart(2, "0"))}`
        );

        tempo--;

        if(tempo < 0) {
            clearInterval(timer);
            alert("Você perdeu o tempo de promoção do leite")
        }
    }, 1000)
}