function filtrarPares(numeros){
    let pares = [];
    for(let i=0; i<numeros.length; i=i+1){
        if(numeros[i]%2===0 ){
            pares.push(numeros[i]);
        }
    }
    return pares;    
}
console.log(filtrarPares([3, 8, 15, 22, 42, 7]));

