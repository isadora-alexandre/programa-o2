let produto = {
    nome: "Teclado Mecânico",
    preco: 250,
    emEstoque: true,

    calcularTotalEstoque: function(quantidadeDesejada) {
        return this.preco * quantidadeDesejada;
    }
};

let quantidade = 3;
console.log(`O valor para ${quantidade} unidades de ${produto.nome} é R$ ${produto.calcularTotalEstoque(quantidade)}`);