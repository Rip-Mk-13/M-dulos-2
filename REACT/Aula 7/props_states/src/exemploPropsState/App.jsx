import React from "react";
import Nome from "./Nome.jsx";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: "Mateus"
        };
    };

    alterarNome = () => {
        this.setState({nome: "Augusto"})
    };

    render() {

        return(
            <div>
                <button onClick={this.alterarNome}>Alterar Nome</button>
                {/* <p>{this.state.nome}</p> */}
                <Nome nome={this.state.nome}></Nome>
            </div>
        );

    };
};

export default App;