import React from "react";
import FilmeFilho from "./FilmeComp";

class Filme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      obra: {
        titulo: "Silent Hill",
        assistido: false,
        filmeAssistido: "Nunca",
        filmeOuSerie: "Filme"
      }
    };
  }

  filmeAssistido = () => {
    this.setState((state) => ({
      obra: {
        ...state.obra,
        assistido: !state.obra.assistido,
        filmeAssistido: state.obra.assistido ? "Nunca" : "Já"
      }
    }));
  };

  render() {
    return (
      <div>
        <FilmeFilho
          titulo={this.state.obra.titulo}
          assistido={this.state.obra.assistido}
          filmeAssistido={this.state.obra.filmeAssistido}
          filmeOuSerie={this.state.obra.filmeOuSerie}
          filmeAssistidoFunction={this.filmeAssistido}
        />
      </div>
    );
  }
}

export default Filme;