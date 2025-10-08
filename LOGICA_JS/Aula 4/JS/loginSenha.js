// Entregar no console true ou false
// Senha = abc123
// senhaUsuario ?

function login(){
    const senha = "abc123";
    const senhaUsuario = prompt("Digite sua senha: ");
    var resultadoSenha = senha === senhaUsuario

    console.log(senha);
    console.log(senhaUsuario);
    
    console.log("Resultado da senha: " + resultadoSenha);
}