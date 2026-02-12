import PropsChildren from "./FilmesChildren.jsx"
import PropsObjetos from "./FilmesObjeto.jsx"

function ListaFilmes() {

    let filmes = [
        {id: 1, genero: "Terror", titulo: "Silent Hill"},
        {id: 2, genero: "Ação", titulo: "Mortal Kombat"},
        {id: 3, genero: "Comédia", titulo: "Noite de Jogos"}
    ];

    return(
        <div>
            <PropsChildren>
                <li>Silent Hill</li>
                <li>Mortal Kombat</li>
                <li>Noite de Jogos</li>   
            </PropsChildren>

            <PropsObjetos filmes={filmes} />
        </div>  
    );
}

export default ListaFilmes;