// const nome1 = {nome: "Mateus"}
// const nome = '{nome: "Mateus"}'

// console.log(nome1);
// console.log(nome);

// Para transformar um objeto em JS em JSON
const carro = {
    modelo: "Brasília",
    ano: 1967
}

console.log(carro);
console.log(typeof carro);

const carroJson = JSON.stringify(carro);

console.log(carroJson);
console.log(typeof carroJson);

// Para transformar um JSON em objeto
const carroJson1 = '{"modelo": "Brasília", "ano":"1967"}'

console.log("carroJson1");
console.log(carroJson1);
console.log(typeof carroJson1);

const carroObj = JSON.parse(carroJson1)

console.log(carroObj);
console.log(typeof carroObj);