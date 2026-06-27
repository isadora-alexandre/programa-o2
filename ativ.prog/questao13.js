let usuarios = [
    { id: 1, nome: "Pedro", ativo: true },
    { id: 2, nome: "Joana", ativo: false },
    { id: 3, nome: "Tiago", ativo: true }
];
usuarios.forEach((usuario) => {
    if (usuario.ativo) {
        console.log(`Usuário Ativo: ${usuario.nome} (ID: ${usuario.id})`);
    }
});