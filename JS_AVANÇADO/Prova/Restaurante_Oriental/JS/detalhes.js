//////////////////////////////////////////////////////////////////
// LEITURA DA URL (só funciona na página de detalhes)

const params = new URLSearchParams(window.location.search);
const nomePrato = params.get("nome");

//////////////////////////////////////////////////////////////////
// GET - API FAKE

const getPrato = async () => {
    const resposta = await fetch("http://localhost:3000/prato");
    return await resposta.json();
};

//////////////////////////////////////////////////////////////////
// CAPTURAR CLIQUE NO CARDÁPIO (somente no cardápio)

const capturarPrato = (event) => {
    event.preventDefault();
    const idPrato = event.currentTarget.id;
    window.location.href = `detalhes.html?nome=${idPrato}`;
};

const botoes = document.querySelectorAll(".button.is-info[id]");
botoes.forEach(botao => {
    botao.addEventListener("click", capturarPrato);
});

//////////////////////////////////////////////////////////////////
// CARREGAR DETALHES DO PRATO (somente no detalhes.html)

const carregarDetalhes = async () => {
    if (!nomePrato) return;

    const pratos = await getPrato();

    const pratoSelecionado = pratos.find(
        prato => prato.nome === nomePrato
    );

    if (!pratoSelecionado) return;

    document.querySelector(".produto-img").src = pratoSelecionado.imagem;
    document.querySelector(".produto-img").alt = pratoSelecionado.produto;
    document.querySelector(".produto-titulo").innerText = pratoSelecionado.produto;
    document.querySelector(".produto-desc").innerText = pratoSelecionado.descricao;
};

carregarDetalhes();

//////////////////////////////////////////////////////////////////
// PARTE DO E-MAIL

const inputEmail = document.querySelector(".email");
const checkbox = document.querySelector(".checkboxDeTermos");
const checkboxLabel = document.querySelector(".checkboxLabel");
const botaoEnviar = document.querySelector(".btnEnviar");
const mensagem = document.querySelector(".mensagem");

botaoEnviar.addEventListener("click", () => {
    let email = inputEmail.value.trim();

    if (email === "") {
        email = prompt("Digite seu e-mail:");

        if (!email || email.trim() === "") {
            mensagem.innerText = "Erro: e-mail não informado.";
            mensagem.classList.remove("success");
            return;
        }

        inputEmail.value = email;
    }

    if (email.length < 10) {
        mensagem.innerText = "E-mail inválido.";
        mensagem.classList.remove("success");
        return;
    }

    const partesEmail = email.split("@");
    if (partesEmail.length !== 2 || !partesEmail[1].includes(".")) {
        mensagem.innerText = "E-mail inválido.";
        mensagem.classList.remove("success");
        return;
    }

    if (!checkbox.checked) {
        checkboxLabel.style.backgroundColor = "#ffb3b3";
        mensagem.innerText = "Você precisa aceitar os termos de uso.";
        mensagem.classList.remove("success");
        return;
    } else {
        checkboxLabel.style.backgroundColor = "";
    }

    mensagem.innerText = `E-mail "${email}" cadastrado com sucesso!`;
    mensagem.classList.add("success");
});