function temp(){
    var temperatura = Number(prompt("Digite sua temperatura"))
    var celsius = Number((temperatura - 32) * 5 / 9)
    var fahrenheit = Number((temperatura * 9 / 5) + 32)
    var escolha = prompt("Digite F para fahrenheit e C para Celsius")

    if(escolha = "F"){
        alert("Celsius: " + celsius + "° \n Fahrenheit: " + temperatura + "°")
    } else{
        alert("Celsius: " + temperatura + "° \n Fahrenheit: " + fahrenheit + "°")
        console.log("Celsius: " + temperatura + "° \n Fahrenheit: " + fahrenheit + "°");
    }

    switch(escolha){
        case "F":
            alert("Celsius: " + celsius + "° \n Fahrenheit: " + temperatura + "°");
            console.log("Celsius: " + celsius + "° \n Fahrenheit: " + temperatura + "°");
            break;
        case "C":
            alert("Celsius: " + temperatura + "° \n Fahrenheit: " + fahrenheit + "°");
            console.log("Celsius: " + temperatura + "° \n Fahrenheit: " + fahrenheit + "°");
            break;
        default:
            break;
    }
    
}