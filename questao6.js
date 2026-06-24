/*
No JavaScript moderno, existe o método “flat()”, que cria um novo 
array concatenando todos os elementos de subarrays aninhados dentro dele. 
Faça uma função em Javascript chamada "minhaFlat(arr)" que receba como 
parâmetro um Array que pode conter outros Arrays aninhados em múltiplos níveis 
(ex: [1, [2, [3, 4], 5], 6]). A sua função deve retornar um único Array unidimensional 
contendo todos os elementos originais (ex: [1, 2, 3, 4, 5, 6]), "achatando" a 
estrutura. 
Regras e Restrições: a) Você não pode utilizar o método nativo 
“Array.prototype.flat()”;  
b) A função deve testar se o parâmetro recebido é realmente um Array (use o 
método “Array.isArray()”). Caso não seja, a função deve retornar “null”;  
c) Sua solução deve ser capaz de lidar com qualquer nível de profundidade de 
aninhamento (Dica: pense em como uma chamada recursiva da própria função 
pode resolver o problema de estruturas dentro de estruturas). 
Faça um programa que teste a sua função com parâmetros válidos (vetores com 
diferentes profundidades de aninhamento) e parâmetros inválidos, mostrando os 
resultados no console.
*/

function minhaFlat(arr) {
    // Regra b): Verificar se o parâmetro recebido é realmente um Array
    if (!Array.isArray(arr)) {
        return null;
    }

    let resultado = [];

    // Percorre cada elemento do array atual
    for (let i = 0; i < arr.length; i++) {
        let elementoAtual = arr[i];

        // Regra c): Se o elemento for outro array, chama a função recursivamente
        if (Array.isArray(elementoAtual)) {
            // A chamada recursiva vai "desvendar" o subarray e retornar ele já achatado
            let subArrayAchatado = minhaFlat(elementoAtual);
            
            // Adiciona todos os elementos desse subarray achatado ao nosso resultado principal
            for (let j = 0; j < subArrayAchatado.length; j++) {
                resultado.push(subArrayAchatado[j]);
            }
        } else {
            // Se for um elemento comum (número, string, etc.), apenas adiciona ao resultado
            resultado.push(elementoAtual);
        }
    }

    return resultado;
}

// --- PROGRAMA DE TESTES ---
console.log("- PROGRAMA DE TESTES -");

// Teste 1: Nível de aninhamento muito profundo
let arrayProfundo = [1, [2, [3, [4, [5, [6]]]]]];
console.log("Teste 1 (Aninhamento super profundo):");
console.log("Original: ", JSON.stringify(arrayProfundo));
console.log("Resultado:", minhaFlat(arrayProfundo)); 

// Teste 2: Array que já é unidimensional
let arraySimples = [10, 20, 30];
console.log("Teste 2 (Array já unidimensional):");
console.log("Original: ", JSON.stringify(arraySimples));
console.log("Resultado:", minhaFlat(arraySimples)); 

// Teste 3: Parâmetro inválido (passando um número em vez de um array)
let parametroInvalido1 = 12345;
console.log("Teste 3 (Parâmetro inválido - Número):");
console.log("Original: ", parametroInvalido1);
console.log("Resultado:", minhaFlat(parametroInvalido1)); 

// Teste 4: Parâmetro inválido (passando uma string em vez de um array)
let parametroInvalido2 = "[1, 2, 3]";
console.log("Teste 4 (Parâmetro inválido - String):");
console.log("Original: ", parametroInvalido2 = "string");
console.log("Resultado:", minhaFlat(parametroInvalido2)); 
