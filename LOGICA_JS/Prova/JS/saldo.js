function Cliente(nome, saldo) {
    this.nome = nome;
    this.saldo = saldo;
}

function saldo() {
    var clientes = [
        new Cliente("Ana", 1500.50),
        new Cliente("Bruno", 0.00),
        new Cliente("Carlos", -250.75),
        new Cliente("Daniela", 320.00),
        new Cliente("Eduardo", -50.00)
    ];

    var nomeBusca = prompt("Digite o nome do cliente para consultar o saldo:").trim().toLowerCase();

    var clienteEncontrado = clientes.find(c => c.nome.toLowerCase() === nomeBusca)

    if(clienteEncontrado){
        console.log("O cliente " + clienteEncontrado.nome + " possuí R$ " + clienteEncontrado.saldo.toFixed(2) + " em sua conta");
    } else{
        console.log("Cliente não encontrado");
    }
}