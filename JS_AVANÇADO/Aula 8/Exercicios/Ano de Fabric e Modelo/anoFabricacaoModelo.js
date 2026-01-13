let carro = (function () {
    let marca = "Toyota";
    let modelo = "Corolla";
    let anoFabricacao = 2018;
    let mesFabricacao = 7;
    let cor = "Prata";
    let mesmoAno = mesFabricacao >=7 ? "é" : "não é"

    console.log("O ano modelo " + mesmoAno + " o mesmo do ano de fabricação")

    return {
        marca,
        modelo,
        anoFabricacao,
        mesFabricacao,
        cor,
        mesmoAno
    };
})();