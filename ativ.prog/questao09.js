function saudarUsuario(nome, idioma = "pt") {
  if (idioma === "pt") {
    return `Olá, ${nome}!`;
  } else if (idioma === "en") {
    return `Hello, ${nome}!`;
  } else if (idioma === "es") {
    return `¡Hola, ${nome}!`;
  }
}
console.log(saudarUsuario("Ana", "pt"));
