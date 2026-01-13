const itens = ["Maçã","Banana","Cereja","Damasco","Figo","Goiaba","Kiwi","Laranja","Pera","Uva"];
const lista = document.getElementById("lista");

itens.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = item;

    li.style.backgroundColor = i % 2 === 0 ? "red" : "blue";

    lista.appendChild("li");
});