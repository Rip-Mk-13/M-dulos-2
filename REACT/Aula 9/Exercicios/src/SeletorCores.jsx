import { useState } from "react";
import "./SeletorDeCores.css";

function SeletorDeCores() {
    const [cor, setCor] = useState("white");

    function corVermelho() {
        setCor("red");
    }

    function corVerde() {
        setCor("green");
    }

    function corAzul() {
        setCor("blue");
    }

    return (
        <div className="container">
            <div className="botoes">
                <button className="btn vermelho" onClick={corVermelho}></button>
                <button className="btn verde" onClick={corVerde}></button>
                <button className="btn azul" onClick={corAzul}></button>
            </div>

            <div
                className="quadrado"
                style={{ backgroundColor: cor }}
            ></div>
        </div>
    );
}

export default SeletorDeCores;