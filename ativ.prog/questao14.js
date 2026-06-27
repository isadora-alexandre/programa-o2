let alunos = [
    { nome: "Pedro", nota: 8.5 },
    { nome: "Joana", nota: 9.0 },
    { nome: "Tiago", nota: 6.5 }
];
function calcularMediaTurma(listaAlunos) {
    let somaNotas = 0; 
    listaAlunos.forEach((aluno) => {
        somaNotas += aluno.nota; 
    });
    let media = somaNotas / listaAlunos.length;
    return media.toFixed(1);
}
let mediaFinal = calcularMediaTurma(alunos);
console.log(mediaFinal); 