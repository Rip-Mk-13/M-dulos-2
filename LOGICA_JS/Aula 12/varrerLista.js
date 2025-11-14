function varrerLista() {
    var nomes = ["Papai Noel", "Vovó Mafalda", "Coelinho da Páscoa", "Lobo Mal", "Fada Madrinha"];
    var listaNomes = [];
    var posicaoListaNome = [];
    var indexListaNome = [];

    for(i = 0; i < nomes.length; i++){
        // console.log(nomes[i]);

        // if(nomes[i] === "Vovó Mafalda" || nomes[i] === "Lobo Mal" || nomes[i] === "Branca de Neve"){
        //     listaNomes.push(nomes[i]);
        //     posicaoListaNome.push(nomes[i]);
        // }

        if(nomes[i] === "Vovó Mafalda"){
            listaNomes.push(nomes[i]);
            posicaoListaNome.push(nomes[i]);
            break;
        }
    }
}
    console.log("Lista: " + listaNomes);
    console.log("Posição dos nomes da lista: " + posicaoListaNome);
    console.log("Posição dos nomes da lista: " + posicaoListaNome);

varrerLista();