function conta(){
    var sorvete = prompt("Você gostaria de um sorvete de baunilha, chocolate, menta ou morango?")
    var adicional1 = prompt("Gostaria de um adicional? \n(S para sim e N para não)")

    if(adicional1 === "S"){
        var sabor1 = prompt("Diga qual adicional gostaria?")
        var adicional2 = prompt("Gostaria de um segundo adicional? \n(S para sim e N para não")

        if(adicional2 === "S"){
            var sabor2 = prompt("Diga qual outro adicional você gostaria")

            alert("Sua conta deu R$ 9,90")
            console.log("Sua conta deu R$ 9,90")
        } else{
            alert("Sua conta deu R$ 7,90")
            console.log("Sua conta deu R$ 7,90")
        }
    } else {
        alert("Sua conta deu R$ 5,90")
        console.log("Sua conta deu R$ 5,90")
    }
}