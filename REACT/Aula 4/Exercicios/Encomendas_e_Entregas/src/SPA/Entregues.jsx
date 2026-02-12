function Entregues() {
    const Entregue = [
        {id: 3, nome: "Produto4"},
        {id: 4, nome: "Produto5"},
        {id: 5, nome: "Produto6"}
    ]
    
    return (
        <div>
            {Entregue.map((item) => (
                <p key={item.id}>{item.nome}</p>
            ))}
        </div>
    )
};

export default Entregues;