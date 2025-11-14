function lista(){
    var listaTenis = ["Adidas Breaknet", "All Star", 8, "Adidas Superstar", true, "Adidas Stan Smith", "Air Force"]

    // Adiciona os dados a uma só string
    const texto = listaTenis.join(" ");
    const texto1 = listaTenis.join(" / ");
    const texto2 = listaTenis.join(" , ");

    console.log(texto);
    console.log(texto1);
    console.log(texto2);
    // console.log(typeof texto);
}

lista()