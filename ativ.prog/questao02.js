function inverterArray(lista) {
    for (let i = 0; i < lista.length / 2; i++) {
        let temp = lista[i];

        lista[i] = lista[lista.length - 1 - i];
        lista[lista.length - 1 - i] = temp;
    }

    return lista;
}

console.log(inverterArray([10, 20, 30, 40]));


