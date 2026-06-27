let valorProduto = 150;
let porcentagemDesconto = 20;
function calcularPrecoFinal(valorProduto, porcentagemDesconto){
    let Desconto = valorProduto*porcentagemDesconto/100;
    let ValorFinal = (valorProduto - Desconto);
    return ValorFinal;
}
let resultado = calcularPrecoFinal(valorProduto, porcentagemDesconto);
console.log(resultado);
