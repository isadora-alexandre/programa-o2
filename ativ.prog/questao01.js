function contarDivisoresBruto(n) {
    let quantidade = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            quantidade++;
        }
    }
    return quantidade;
}
function contarDivisores(n) {
    let quantidade = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                quantidade += 1;
            } else {
                               quantidade += 2;
            }
        }
    }
    return quantidade;
}
const numero = 999999999;
console.time("Força Bruta");
const resultado1 = contarDivisoresBruto(numero);
console.timeEnd("Força Bruta");
console.log("Quantidade de divisores (bruto):", resultado1);
console.time("Otimizada");
const resultado2 = contarDivisores(numero);
console.timeEnd("Otimizada");
console.log("Quantidade de divisores (otimizada):", resultado2);
