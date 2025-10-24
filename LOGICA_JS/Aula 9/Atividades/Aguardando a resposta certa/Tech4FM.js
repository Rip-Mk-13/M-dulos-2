var pessoa = 0;
var fala;

function programa() {
    do {
        fala = prompt("Digite a frase: Tech4FM é show");

        if (fala === "Tech4FM é show" && pessoa === 0) {
            alert("Parabéns, você ganhou a camisa!");
            pessoa = pessoa + 1;
        } else {
            alert("Alguém já deve ter resgatado a camisa ou você digitou errado.");
        }

    } while (fala !== "Tech4FM é show" || pessoa === 0);
}

programa();