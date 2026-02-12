import React from "react";

class CompSeletor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      corSelecionada: "white"
    };
  }

  render() {
    return (
      <div>
        {/* Paleta */}
        <div style={{ display: "flex", gap: "10px" }}>
          {["red", "green", "blue"].map((cor) => (
            <div
              key={cor}
              onClick={() => this.setState({ corSelecionada: cor })}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: cor,
                cursor: "pointer",
                border:
                  this.state.corSelecionada === cor
                    ? "3px solid black"
                    : "2px solid transparent"
              }}
            />
          ))}
        </div>

        {/* Painel */}
        <div
          style={{
            width: "200px",
            height: "200px",
            marginTop: "20px",
            borderRadius: "5px",
            backgroundColor: this.state.corSelecionada
          }}
        />
      </div>
    );
  }
}

export default CompSeletor;