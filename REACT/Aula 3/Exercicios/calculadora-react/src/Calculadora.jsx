import "./Calculadora.css"

function Calculadora() {
    function resultado() {
        const valor = document.getElementById("conta").value;

        let calculo = 0;

        if (valor.includes("+")) {
            const partes = valor.split("+");
            calculo = Number(partes[0]) + Number(partes[1]);
        }

        if (valor.includes("-")) {
            const partes = valor.split("-");
            calculo = Number(partes[0]) - Number(partes[1]);
        }

        if (valor.includes("*")) {
            const partes = valor.split("*");
            calculo = Number(partes[0]) * Number(partes[1]);
        }

        if (valor.includes("/")) {
            const partes = valor.split("/");
            calculo = Number(partes[0]) / Number(partes[1]);
        }

        alert("A operação é " + calculo);
    }

    return (
        <div>
            <input id="conta" placeholder="Use +, -, *, /"/>
            <button onClick={resultado}>Calcular</button>
        </div>
    )
}

export default Calculadora;