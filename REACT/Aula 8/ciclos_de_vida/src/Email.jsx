import React from "react";

class Email extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            titulo: "O Jardim Secreto",
            tipo: "Ação"
        }
    }

    tipo = this.state.tipo;

    componentDidMount() {
        console.log(this.state.titulo)

        this.setState({titulo: "As Branquelas"});
    }

// EXECUTAR ALGO QUANDO UMA VARIÁVEL É MODIFICADA
    componentDidUpdate(prevState, prevProps) {
        if (prevState.tipo !== this.state.tipo) {
            console.log("Tipo do filme alterado com sucesso!");
            // console.log("prevProps: ", prevProps);
            console.log("Tipo anterior: ", prevState.tipo);
            console.log("Novo tipo: ", this.state.tipo);
        }
    }

    componentWillUnmount() {
        console.log("Desmontagemm");
    }

    alterarTipoFilme = () => {
        this.setState({tipo: "comédia"})
    }

    render() {
        return(
            <div>
                <p>Título <strong>{this.state.titulo}</strong></p>
            </div>
        )
    }
}

export default Email;