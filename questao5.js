/*
Em projetos de Autoração Multimídia e desenvolvimento web, é 
comum criarmos ferramentas de busca que destacam visualmente termos 
específicos para o usuário. Pensando nisso, escreva uma função em JavaScript 
que receba dois parâmetros: um texto base (string) e uma substring de busca 
(string). 
A função deve localizar todas as ocorrências exatas da substring dentro do texto 
(a busca deve ser sensível a letras maiúsculas e minúsculas, ou seja, 
case-sensitive) e adicionar as tags HTML “<mark>” e “</mark>” imediatamente 
antes e depois de cada ocorrência encontrada.  
Após a formatação, a função deve retornar à nova string resultante. 
Além do comportamento padrão, sua função deve tratar as seguintes exceções: 
a) Busca sem Resultados: Caso nenhuma ocorrência da substring seja 
encontrada no texto, a função deve retornar o valor primitivo “null”. 
b) Validação de Tipos: Verifique se os dois parâmetros passados são 
estritamente do tipo string. Caso algum dos parâmetros seja de outro tipo 
de dado (como número, objeto ou indefinido), a função deve interromper a 
execução e retornar o valor numérico “-1”. 
Após implementar a função, construa um programa de testes chamando a função 
criada com diferentes argumentos. Seu programa deve exibir no console os 
resultados para comprovar o funcionamento correto nos seguintes cenários 
obrigatórios: 
● Parâmetros válidos onde o termo aparece múltiplas vezes no texto; 
● Parâmetros válidos onde o termo não existe no texto; 
● Parâmetros inválidos (onde pelo menos um dos valores enviados não é 
uma string). 
*/

function destacarTermo(texto, termo) {
    if (typeof texto !== 'string' || typeof termo !== 'string') {
        return -1;
    }

    if (termo === "") {
        return null;
    }

    if (!texto.includes(termo)) {
        return null;
    }

    const tagsAberturaEFechamento = `<mark>${termo}</mark>`;
    const textoFormatado = texto.split(termo).join(tagsAberturaEFechamento);

    return textoFormatado;
}

// - TESTES -
console.log("- PROGRAMA DE TESTES -");

//TESTE 1
const texto1 = "No design multimídia, o design de interface e o design de som importam.";
const termo1 = "design";
const resultado1 = destacarTermo(texto1, termo1);
console.log("Teste 1 (Múltiplas ocorrências):");
console.log(">>", resultado1);

//TESTE 2
const texto2 = "O JavaScript é uma linguagem fantástica.";
const termo2 = "javascript"; 
const resultado2 = destacarTermo(texto2, termo2);
console.log("Teste 2 (Termo não existe):");
console.log(">>", resultado2); 

//TESTE 3
const textoInvalido = "A tecnologia avança a cada dia.";
const termoInvalido = 42; 
const resultado3 = destacarTermo(textoInvalido, termoInvalido);
console.log("Teste 3 (Parâmetro Inválido - Número):");
console.log(">>", resultado3); 
