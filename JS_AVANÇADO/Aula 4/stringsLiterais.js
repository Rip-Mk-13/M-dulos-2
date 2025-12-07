const texto = `Posso escrever
                um texto
    com quebra de linha`

console.log(texto);

////////////////////////////////////////////////////////////////////////////////////////////////

const soma = `Soma: ${texto}`;
// São iguais
const soma1 = "Soma: " + texto;
console.log(soma);

////////////////////////////////////////////////////////////////////////////////////////////////

// const nome = "Maria"
// const dizer = `Eu amo ${nome}`

////////////////////////////////////////////////////////////////////////////////////////////////

const hora = 20;
const frase = `Tenha uma boa ${(() => {
    // if(hora > 18){
    //     return "noite";
    // } else{
    //     return "tarde"
    // }

    return hora > 18 ? "noite" : "tarde";
})()}`

console.log(frase);