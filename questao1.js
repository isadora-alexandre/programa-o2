/*
Nas listas de exercícios e nas aulas de nossa disciplina você teve 
contato com o método (função) “slice()” que extrai uma subarray a partir de um 
determinado ponto inicial (chamaremos de “inicio”) até um ponto final 
(chamaremos “fim”), sem incluir o valor localizado neste índice. Se colocarmos 
um valor negativo como parâmetro para este método, teremos como resultado 
uma posição relativa ao parâmetro, decrescida do valor absoluto do parâmetro, 
ou seja, se passarmos como parâmetro “-2”, isso equivale à posição final do 
Array, menos o valor “2” (“fim - 2”). Vejamos um exemplo: 
let arr = [1,2,3,4,5]; 
let resultado = arr.slice(-2); // inicio = fim-2 e fim=arr.length 
console.log(resultado); 
> [4,5] //Retornou os valores iniciados na posição 2 (4 - 2) e 
terminados em 3 (arr.length) 
No exemplo acima, se colocarmos “arr.slice(0,2)”, ele retorna o Array “[1,2]”. Note 
que o valor que está no índice “2”, não foi colocado no resultado retornado pela 
função.  
Se passarmos parâmetros com reais (como “1.5”), ele usa o valor inteiro mais 
próximo do valor real (no caso de “1.5”, seria “1”), sendo este valor inteiro menor 
que o valor real. Se passarmos como parâmetro um valor diferente Number, ele 
retorna um Array vazio “[]”.  
Faça uma função Javascript, chamada “minhaSlice(arr,inicio,fim)”, que receba 
como parâmetros um arr de valores numéricos (você deve testar se são 
numéricos, caso contrário, a função deve retornar null); o valor de início (“inicio”) e de final (“fim”), ambos do tipo Number e inteiros. A função deve se comportar 
como a função “slice()” descrita anteriormente, inclusive, testando os valores 
diferentes de inteiro, retornando “[]”, para estes casos, e aceitando como 
parâmetro os valores inteiros negativos como parâmetro.  
Faça um programa que teste essa função criada com valores válidos e inválidos, 
mostrando que seu código funciona conforme os requisitos da função 
(funcionalidades ou “coisas que se deseja que a função faça”), descritos aqui. 
 */

function minhaSlice(arr, inicio, fim) {
    if (!Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            return null; 
        }
    }
    if (typeof inicio !== 'number' || isNaN(inicio)) {
        return [];
    }
    if (fim === undefined) {
        fim = arr.length;
    } else if (typeof fim !== 'number' || isNaN(fim)) {
        return [];
    }
    let inicioInteiro = Math.floor(inicio);
    let fimInteiro = Math.floor(fim);

//console.log(`[DEBUG] O início original era: ${inicio} e virou o índice: ${inicioInteiro}`);
//console.log(`[DEBUG] O fim original era: ${fim} e virou o índice: ${fimInteiro}`);

    let posInicio = inicioInteiro < 0 ? arr.length + inicioInteiro : inicioInteiro;
    let posFim = fimInteiro < 0 ? arr.length + fimInteiro : fimInteiro;

    posInicio = Math.max(0, posInicio);
    posFim = Math.min(arr.length, posFim);

    if (posInicio >= posFim) {
        return [];
    }

    let resultado = [];
    for (let i = posInicio; i < posFim; i++) {
        resultado.push(arr[i]);
    }

    return resultado;
}

console.log(" - TESTES DA FUNÇÃO MINHASLICE - ");
let meuArray = [1, 2, 3, 4, 5];
console.log("Array base para os testes:", meuArray);
// Teste 1:
console.log("Teste 1 (Índices válidos 0 a 2)        ->", minhaSlice(meuArray, 0, 2)); 

// Teste 2:
console.log("Teste 2 (Parâmetro real 1.5 a 4)       ->", minhaSlice(meuArray, 1.5, 4)); 

// Teste 3:
console.log("Teste 3 (Índice inicial negativo -2)   ->", minhaSlice(meuArray, -2)); 

// Teste 4: 
console.log("Teste 4 (Parâmetro inválido tipo String) ->", minhaSlice(meuArray, 0, "2")); 

// Teste 5:
let arrayInvalido = [1, 2, "texto", 4, 5];
console.log("Teste 5 (Array com string dentro)       ->", minhaSlice(arrayInvalido, 0, 2)); 