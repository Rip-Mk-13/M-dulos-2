function login(){
    const senha = "abc123";
    const senhaUsuario = prompt("Digite sua senha: ");
    var resultadoSenha = senha === senhaUsuario

    alert("Está correta? " + resultadoSenha);
}