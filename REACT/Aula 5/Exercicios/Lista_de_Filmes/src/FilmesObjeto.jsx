function PropsObjetos(filmes) {
    return (
        <div>
            <h2>Lista de Filmes (objeto)</h2>
            <ul>
                {filmes.map((filme) => (
                    <li key={filme.id}>
                        {filme.nome} {filme.genero}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PropsObjetos;