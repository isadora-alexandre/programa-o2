class ContaBancaria {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log(`Saldo insuficiente para o saque de R$ ${valor}`);
        }
    }
}
const minhaConta = new ContaBancaria("Pedro");
minhaConta.depositar(100);
minhaConta.sacar(150); 