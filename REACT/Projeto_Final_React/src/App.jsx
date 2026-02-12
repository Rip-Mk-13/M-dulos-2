import Cartao from "./Componentes";

function LojaDoces() {
    const doces = [
        { nome: "Brigadeiro", preco: 3.50 },
        { nome: "Beijinho", preco: 3.00 },
        { nome: "Pudim", preco: 6.00 }
    ];

    return (
        <>
            {doces.map((doce, index) => (
                <Cartao
                    key={index}
                    nome={doce.nome}
                    preco={doce.preco}
                />
            ))}
        </>
    );
}

export default LojaDoces;