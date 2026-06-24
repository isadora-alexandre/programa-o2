/*
Em nossos exercícios, vimos o método “indexOf()” que recebe como 
parâmetro um valor a ser buscado no Array e o índice do Array a partir do qual 
deve ser procurado o valor buscado. Caso o segundo parâmetro seja omitido, é 
considerado o valor “0” (zero) como o índice inicial do vetor. Caso o valor seja 
encontrado no Array, o valor do índice onde ele está é retornado; caso contrário, é 
retornado o valor “-1”. Crie uma função em Javascript, chamada 
“minhaIndexOf(arr,valor,inicio)” que se comporte conforme o método descrito. 
Faça um programa que use esta função e que demonstre que ela se comporta 
como deveria, conforme receba parâmetros válidos ou inválidos. 
*/

function minhaIndexOf(arr, valor, inicio) {
    if (!Array.isArray(arr)) {
        return -1;
    }

    if (inicio === undefined || typeof inicio !== 'number' || isNaN(inicio)) {
        inicio = 0;
    }

    if (inicio < 0) {
        inicio = arr.length + inicio;
    }

    if (inicio < 0) {
        inicio = 0;
    }

    for (let i = inicio; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i; 
        }
    }

    return -1;
}

// Programa de Teste
console.log(" - TESTES DA FUNÇÃO minhaIndexOf - ");

let frutas = ["maçã", "banana", "morango", "laranja", "banana", "uva"];
console.log("Array base para os testes:", frutas);

// Teste 1: 
console.log("Teste 1 (Buscar 'banana' do início):", minhaIndexOf(frutas, "banana")); 

// Teste 2: 
console.log("Teste 2 (Buscar 'banana' a partir do índice 2):", minhaIndexOf(frutas, "banana", 2)); 

// Teste 3: 
console.log("Teste 3 (Buscar valor inexistente 'abacaxi'):", minhaIndexOf(frutas, "abacaxi")); 

// Teste 4: 
console.log("Teste 4 (Início maior que o array - índice 10):", minhaIndexOf(frutas, "maçã", 10)); 

// Teste 5: 
console.log("Teste 5 (Buscar 'uva' a partir do índice -2):", minhaIndexOf(frutas, "uva", -2)); 
