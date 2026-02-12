import React from "react"

class ExState extends React.Component{
    // nome = "Mateus"

    constructor(props){
        super(props)

        this.state = {
            nome: "Mateus"
        }
    }

    alterarNome = () => {
        console.log("Antes " + this.state.nome);
    
        // this.nome = "Daniel"
        this.setState({nome: "Daniel"})

        console.log("Depois " + this.state.nome)
    }

    render = () => {
        return (
            <div>
                <button onClick={this.alterarNome}>Alterar nome</button>

                <p>
                    {this.state.nome}   
                </p>
            </div>
        )
    }
    
}

export default ExState;