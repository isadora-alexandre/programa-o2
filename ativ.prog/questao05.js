function extrairDominio(email){
    let posicaoArroba = email.indexOf("@");

    let dominio = email.slice(posicaoArroba + 1);

    return dominio;
}
console.log(extrairDominio("joaozinhopereira@alu.ufc.br"));