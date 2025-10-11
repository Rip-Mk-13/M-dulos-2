function centavos(){
    var valor = parseFloat(prompt("Digite seu valor em reais.\n Ex: 12.50"))
    var quantia = Math.round((valor * 100) % 100)

    alert("Você possui " + quantia + " centavos" )
}