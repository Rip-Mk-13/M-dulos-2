function Recebidas() {
    const Recebido = [
        {id: 6, nome: "Produto7", recepcao: "destinatario"},
        {id: 7, nome: "Produto8", recepcao: "outros"},
        {id: 8, nome: "Produto9", recepcao: "destinatario"}
    ]

    return (
        <div>
            {Recebido.map((item) => (
                <p key={item.id}>{item.nome} - {item.recepcao}</p>
            ))}
        </div>
    )
};

export default Recebidas;