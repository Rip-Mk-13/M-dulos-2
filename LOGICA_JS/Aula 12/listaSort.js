function lista(){
    const nomesOriginal = ["Flamengo", "Botafogo", "Vasco", "Fluminense"];
    const numerosOriginal = [ 5, 1, 10, 60, 70, 20];

    console.log(nomesOriginal);
    console.log(numerosOriginal);

    // spread, for de copiar os dados de um array
    // var nomesCopia = [... nomesOriginal];

    // nomesCopia.sort();
    numerosOriginal.sort();

    console.log(nomesOriginal);
    // console.log(nomesCopia);
    console.log(numerosOriginal)
}

lista();