import React from "react"

// ATENÇÃO, NECESSÁRIO ABRIR 2 TERMINAIS PARA RODAR REACT COM JSON, UM PARA CADA!

class FilmesEmCartaz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filmes: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/filmes")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({
                filmes: dados.slice(0, 10)
            });
        });
    }

    render() {
        return (
            <div>
                <h2>Top 10 Filmes da Semana</h2>

                <ul>
                    {this.state.filmes.map(filme => (
                        <li key={filme.id}>
                            {filme.titulo} — {filme.nota} - {filme.ano}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilmesEmCartaz;