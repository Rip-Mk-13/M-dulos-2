function votoFacultativo(){
    var idade = prompt("Digite sua idade: ")
    var voto = idade <= 17 || idade >= 70

    console.log("Seu voto é facultativo: " + voto)
}