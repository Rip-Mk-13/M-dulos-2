function cidadaoEmancipado(){
    const sexo = prompt("Qual o seu sexo? \n (M para masculino e F para feminino) ")
    const idade = prompt("Qual a sua idade: ")

    var emancipado = sexo === "M" && idade >= 18 || sexo === "F" && idade >= 21
    
    console.log("É emancipado: " + emancipado)
}