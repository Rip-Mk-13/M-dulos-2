import React from "react"

class App extends React.Component{
    nome = "Mateus"

    alterarNome = () => {
        console.log("Antes " + this.nome);
    
        this.nome = "Daniel"

        console.log("Depois " + this.nome);
    }

    render = () => {
        return (
            <div>
                <button onClick={this.alterarNome}>Alterar nome</button>

                <p>
                    {this.nome}   
                </p>
            </div>
        )
    }
    
}

export default App;