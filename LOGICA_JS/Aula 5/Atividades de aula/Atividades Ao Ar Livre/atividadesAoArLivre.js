function atividadesAoArLivre(){
    const tempIdeal = 31
    var temp = prompt("Digite a temperatura atual: ")
    var chuva = prompt("Está chovendo? \n Responda com (Sim) ou (Não)")

    if(temp <= tempIdeal && chuva === "Não"){
        alert("Está um tempo agradavel para atividades ao ar livre!")
    } else { if(40 > temp >= tempIdeal){
            alert("Está quente, mas nada que um protetor solar, cuidado moderado e uma bebida gelada não resolvam!")
        } else {
            alert("É recomendado não realizar atividades ao ar livre.")
        }
    }
}