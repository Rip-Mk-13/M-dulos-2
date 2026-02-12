function Recebidas() {
    const Recebido = [
        {id: 6, nome: "Produto7"},
        {id: 7, nome: "Produto8"},
        {id: 8, nome: "Produto9"}
    ]

    return (
        <div>
            {Recebido.map((item) => (
                <p key={item.id}>{item.nome}</p>
            ))}
        </div>
    )
};

export default Recebidas;