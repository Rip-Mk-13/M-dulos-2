import React from "react"
import "./Paginas.css"

class Paginas extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            pagina: 1
        }
    }

    MenosPag = () => {
        this.setState(prevState => ({
            pagina: prevState.pagina - 1
        }));
    }

    MaisPag = () => {
        this.setState(prevState => ({
            pagina: prevState.pagina + 1
        }));
    }
    

    render() {
        return(
            <div>
                <button onClick={this.MenosPag} disabled={this.state.pagina === 1}> Anterior </button>
                
                <span className="texto-pagina">
                    Página {this.state.pagina}
                </span>
                
                <button onClick={this.MaisPag} disabled={this.state.pagina === 10}> Próximo </button>
            </div>
        )
    }
}

export default Paginas;