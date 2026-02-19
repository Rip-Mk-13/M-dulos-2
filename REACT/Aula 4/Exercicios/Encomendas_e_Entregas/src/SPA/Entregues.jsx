function Entregues() {
    const Entregue = [
        {id: 3, nome: "Produto4", recepcao: "destinatario"},
        {id: 4, nome: "Produto5", recepcao: "destinatario"},
        {id: 5, nome: "Produto6", recepcao: "outros"}
    ]
    
    return (
        <div>
            {Entregue.map((item) => (
                <p key={item.id}>{item.nome} - {item.recepcao}</p>
            ))}
        </div>
    )
};

export default Entregues;