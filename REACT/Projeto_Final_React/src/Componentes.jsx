import React from "react";

class Cartao extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.nome}</li>
                    <li>R$ {this.props.preco}</li>
                </ul>
            </div>
        );
    }
}

export default Cartao;