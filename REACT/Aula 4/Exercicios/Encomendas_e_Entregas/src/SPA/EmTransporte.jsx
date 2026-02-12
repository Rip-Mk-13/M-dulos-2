function EmTransporte() {
    const Transporte = [
        {id: 0, nome: "Produto1"},
        {id: 1, nome: "Produto2"},
        {id: 2, nome: "Produto3"}
    ]

    return (
        <div>
            {Transporte.map((item) => (
                <p key={item.id}>{item.nome}</p>
            ))}
        </div>
    )
}

export default EmTransporte;