/*
Faça um programa que leia duas matrizes numéricas de entrada e 
realize o  dot product delas, testando se possuem, realmente, valores numéricos.  
Para entendermos melhor como funciona o produto de matrizes, vejamos o texto 
a seguir. 
Mostre que seu programa funciona para valores de matrizes válidos e inválidos. 
Lembre de fazer uma função que leia do usuário os valores das matrizes. 
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processarEValidarMatriz(texto) {
    texto = texto.trim();

    if (!texto.startsWith('[[') || !texto.endsWith(']]')) {
        return null;
    }

    try {
        
        let miolo = texto.slice(2, -2);
        let stringsLinhas = miolo.split(/\]\s*,\s*\[/);

        let matriz = [];

        for (let i = 0; i < stringsLinhas.length; i++) {
            let elementosLinha = stringsLinhas[i].split(',');
            let novaLinha = [];

            for (let j = 0; j < elementosLinha.length; j++) {
                let item = elementosLinha[j].trim();
                let numero = Number(item);

                if (item === "" || isNaN(numero)) {
                    return null; 
                }
                novaLinha.push(numero);
            }
            matriz.push(novaLinha);
        }

        let colunasPadrao = matriz[0].length;
        for (let i = 1; i < matriz.length; i++) {
            if (matriz[i].length !== colunasPadrao) {
                return null; 
            }
        }

        return matriz;
    } catch (e) {
        return null;
    }
}

function multiplicarMatrizes(A, B) {
    let linhasA = A.length;
    let colunasA = A[0].length;
    let linhasB = B.length;
    let colunasB = B[0].length;

    if (colunasA !== linhasB) {
        return "Erro: O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B.";
    }

    let C = [];
    for (let i = 0; i < linhasA; i++) {
        C[i] = new Array(colunasB).fill(0);
    }

    for (let i = 0; i < linhasA; i++) { 
        for (let j = 0; j < colunasB; j++) { 
            for (let k = 0; k < colunasA; k++) { 
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

function formatarMatriz(matriz) {
    if (typeof matriz === 'string') return matriz;
    return matriz.map(linha => `  [ ${linha.join(', ')} ]`).join('\n');
}

// - TESTE -
console.log(" - MULTIPLICAÇÃO DE MATRIZES - ");
console.log(" Formato aceito: [[1,2],[3,4]]")

rl.question("Digite a Matriz A: ", (entradaA) => {
    let matrizA = processarEValidarMatriz(entradaA);

    if (matrizA === null) {
        console.log("Erro: Matriz A inválida ou com dados não numéricos.");
        rl.close();
        return;
    }

    rl.question("Digite a Matriz B: ", (entradaB) => {
        let matrizB = processarEValidarMatriz(entradaB);

        if (matrizB === null) {
            console.log("Erro: Matriz B inválida ou com dados não numéricos.");
            rl.close();
            return;
        }

        let resultado = multiplicarMatrizes(matrizA, matrizB);

        console.log("\n---------------- RESULTADO ----------------");
        if (typeof resultado === 'string') {
            console.log(resultado);
        } else {
            console.log("Matriz C resultante:");
            console.log(formatarMatriz(resultado));
        }
        console.log("-------------------------------------------");

        rl.close();
    });
});