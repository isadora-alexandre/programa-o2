function gerarCracha(nome, departamento, ID){
    return(`[${ID}] - ${nome.toUpperCase()}: ${departamento}`);
}
console.log(gerarCracha("João", "TI", 404));
