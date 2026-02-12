import React from 'react';

class SetArray extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            carros: [
                {
                    id: 1,
                    marca: "Volkswagen",
                    modelo: "Gol"
                },
                {
                    id: 2,
                    marca: "Ford",
                    modelo: "Ka"
                }
            ]
        }
    }

    adicionarCarro = () => {
        const novoCarro = {
            id: 3,
            marca: "Fiat",
            modelo: "Argo"
        }

        this.setState({carros: [ ...this.state.carros, novoCarro]})
    }

    alterarCarro = () => {
        const carros = [ ...this.state.carros]
        const index = carros.findIndex(carro => carro.id === 2)

        if (indice !== -1) {
            carros[indice] = {
                ...carros[indice],
                modelo: "Onix Plus"
            }
        }

        this.setState({carro: {...this.state.carros, marca: "Fiat"}})
    }

    // alterarCarro = () => {
    //     this.setState((state) => ({carro: {...state.carro, marca: "Fiat"}}))
    // }

    render() {
        return(
            <div>
                <button onClick={this.adicionarCarro}>Adicionar</button>
                <button onClick={this.alterarCarro}>Alterar</button>
                <ul>
                    {this.state.carros.map(carro => (
                        <li key={carro.id}>{carro.marca} - {carro.modelo}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SetArray