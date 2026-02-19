function EmTransporte() {
    const Transporte = [
        {id: 0, nome: "Produto1", recepcao: "destinatario"},
        {id: 1, nome: "Produto2", recepcao: "outros"},
        {id: 2, nome: "Produto3", recepcao: "outros"}
    ]

    return (
        <div>
            {Transporte.map((item) => (
                <p key={item.id}>{item.nome} - {item.recepcao}</p>
            ))}
        </div>
    )
}

export default EmTransporte;