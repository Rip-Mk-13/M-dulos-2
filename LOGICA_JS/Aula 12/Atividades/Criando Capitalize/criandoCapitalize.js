function criandoCapitalize(){
    var frase = "hoje é um ótimo dia para aprender javascript com café!";
    frase = frase
        .split(" ")
        // .map serve para mapear e alterar cada palavra/elemento individualmente
        .map(p => p[0].toUpperCase() + p.slice(1).toLowerCase())
        .join(" ")

    console.log(frase)
}

criandoCapitalize();