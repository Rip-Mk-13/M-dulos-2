function PropsChildren({children}) {
    return (
        <div>
            <h2>Lista de Filmes (children)</h2>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default PropsChildren;