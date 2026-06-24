/*
Faça um programa que leia dois Arrays de valores numéricos 
(Number) fornecido pelo usuário, no formato “[n,n,n]”, testando se os valores do 
Arrays digitados são realmente numéricos (Number), retornando uma mensagem 
de erro caso os valores não sejam válidos. Caso sejam válidos, você deverá 
executar uma operação de produto escalar dos Arrays fornecidos. Note que você 
deverá criar uma função de multiplicação de vetores (que pode chamar de 
“produtoEscalarVet(a,b)”).  
O Produto escalar de dois vetores é dado por: 
Por exemplo: [1,2,3,4] . [2,5,6,7] = (1 x 2) + (2 x 5) + (3 x 6) + (4 x 7) = 2 + 10 + 18 + 28 = 58 
Use como base para sua função de leitura dos Arrays de entrada, o código 
presente 
no 
endereço 
https://github.com/wwagner33/prog2-2026-1-codigos/blob/main/aulas/matematicos
/leNumeroInt.js.  
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processarEValidarArray(texto) {

    texto = texto.trim();
    if (!texto.startsWith('[') || !texto.endsWith(']')) {
        return null;
    }

    let conteudo = texto.slice(1, -1).trim();
    
    if (conteudo === "") {
        return [];
    }

    let partes = conteudo.split(',');
    let arrayValido = [];

    for (let i = 0; i < partes.length; i++) {
        let item = partes[i].trim();
        let numero = Number(item);

        if (item === "" || isNaN(numero)) {
            return null; 
        }
        arrayValido.push(numero);
    }

    return arrayValido;
}


function produtoEscalarVet(a, b) {
    if (a.length !== b.length) {
        return "Erro: Os arrays devem possuir o mesmo tamanho para o cálculo do produto escalar.";
    }

    if (a.length === 0) {
        return 0;
    }

    let somaAculumada = 0;

    for (let i = 0; i < a.length; i++) {
        somaAculumada += a[i] * b[i];
    }

    return somaAculumada;
}

// - TESTES -
console.log(" - CÁLCULO DE PRODUTO ESCALAR DE VETORES - ");
console.log("    Formato aceito: [1,2,3,4]");

// Primeiro vetor
rl.question("Digite o primeiro Array (A): ", (entradaA) => {
    let vetorA = processarEValidarArray(entradaA);

    if (vetorA === null) {
        console.log("Erro: O primeiro array é inválido ou contém caracteres não numéricos.");
        rl.close();
        return;
    }
    // Segundo vetor
    rl.question("Digite o segundo Array (B): ", (entradaB) => {
        let vetorB = processarEValidarArray(entradaB);

        if (vetorB === null) {
            console.log("Erro: O segundo array é inválido ou contém caracteres não numéricos.");
            rl.close();
            return;
        }
        let resultado = produtoEscalarVet(vetorA, vetorB);
        
        console.log(` > Vetor A processado: [${vetorA.join(', ')}]`);
        console.log(` > Vetor B processado: [${vetorB.join(', ')}]`);
        console.log(` > Resultado do Produto Escalar: ${resultado}`);
        rl.close(); 
    });
});