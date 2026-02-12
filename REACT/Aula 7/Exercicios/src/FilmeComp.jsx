function FilmeFilho(props) {
  return (
    <div>
      <p>
        Título: <strong>{props.titulo}</strong>
      </p>

      <p>
        Status:{" "}
        <strong>
          {props.assistido ? "Assistido" : "Não assistido"}
        </strong>
      </p>

      <p>Já assistiu esse {props.filmeOuSerie}?</p>

      <input
        type="checkbox"
        id="filme"
        name="filme"
        checked={props.assistido}
        onChange={props.filmeAssistidoFunction}
      />
      <span>{props.assistido ? " Sim" : " Não"}</span>

      <p>
        Você <strong>{props.filmeAssistido}</strong> assistiu o{" "}
        <strong>{props.filmeOuSerie}</strong>.
      </p>
    </div>
  );
}

export default FilmeFilho;