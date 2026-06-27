function verificarAcesso(senhaDigitada, senhaCadastrada) {

    let senha1 = senhaDigitada.trim().toLowerCase();
    let senha2 = senhaCadastrada.trim().toLowerCase();

    return senha1 === senha2;
}

console.log(verificarAcesso(" Secreta123 ", "secreta123"));

