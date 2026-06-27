function formatarNome(nomeBaguncado) {
let primeiraLetra = nomeBaguncado[0].toUpperCase();
let restante = nomeBaguncado.slice(1).toLowerCase();

   return primeiraLetra + restante;
}
console.log(formatarNome("iSAdoRA"));




