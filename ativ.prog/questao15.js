class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    obterDescricao() {
        return `Este carro é um ${this.marca} ${this.modelo} ano ${this.ano}`;
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2024);
const carro2 = new Carro("Honda", "Civic", 2023);

console.log(carro1.obterDescricao()); 
console.log(carro2.obterDescricao()); 