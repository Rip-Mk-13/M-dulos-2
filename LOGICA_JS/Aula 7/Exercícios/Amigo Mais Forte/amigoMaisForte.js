function amigoMaisForte(){
    var nome1 = prompt("Digite o nome do primeiro amigo")
    var altura1 = Number(prompt("Digite a altura alcançada pelo primeiro amigo"))
    var nome2 = prompt("Digite o nome do segundo amigo")
    var altura2 = Number(prompt("Digite a altura alcançada pelo segundo amigo"))
    var nome3 = prompt("Digite o nome do terceiro amigo")
    var altura3 = Number(prompt("Digite a altura alcançada pelo terceiro amigo"))

    if(altura1 > altura2 && altura1 > altura3){
        alert(nome1 + " é o mais forte!")
        console.log(nome1 + " é o mais forte!")
    } else {
        if(altura2 > altura1 && altura2 > altura3){
            alert(nome2 + " é o mais forte")
            console.log(nome2 + " é o mais forte")
        } else if(altura3 > altura2 && altura3 > altura1){
                alert(nome3 + " é o mais forte")
                console.log(nome3 + " é o mais forte")
            } else {
                alert("Todos têm a mesma força")
                console.log("Todos têm a mesma força")
        }
    }
}