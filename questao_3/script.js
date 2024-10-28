// Criação do array de animais
let animais = [];
animais.push("Cachorro", "Gato", "Pássaro", "Cavalo", "Peixe");
console.info(animais);

// Apaga a 3ª posição
animais.splice(2, 1);
console.info(animais);

// Adiciona um animal na 7ª posição
animais[6] = "Leão";
console.info(animais);

// Remove o último elemento
animais.pop();
console.info(animais);
