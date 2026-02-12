import Entregues from "./Entregues";
import EmTransporte from "./EmTransporte";
import Recebidas from "./Recebidas";

function Encomendas() {
    return (
        <div>
            <h1>Encomendas</h1>
            <ol>
                <li>
                    <h3>Entregues</h3>
                    <Entregues/>
                </li>
            </ol>

            <ol>
                <li>
                    <h3>Recebidas</h3>
                    <Recebidas/>
                </li>
            </ol>
            
            <ol>
                <li>
                    <h3>Em Transporte</h3>
                    <EmTransporte/>
                </li>

            </ol>
        </div>
    );
}

export default Encomendas;