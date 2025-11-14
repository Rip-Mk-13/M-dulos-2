function listaConcat(){
    const verao = [" Sol", " Praia"];
    const inverno = [" Frio", " Ficar em casa"];

    const climas = verao.concat(inverno);
    const clima = verao.push(inverno);

    console.log("Verão: " + verao);

    console.log("Inverno: " + inverno);

    // Não modifica o array
    console.log("Climas Concat: " + climas);

    // Modifica o array
    console.log("Climas Push: " + clima);
}

listaConcat();