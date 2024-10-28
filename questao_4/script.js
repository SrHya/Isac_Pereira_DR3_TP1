// Recebe 3 nomes do usuário e os armazena em um array
let nomes = [];
for (let i = 0; i < 3; i++) {
  nomes.push(prompt("Digite um nome:"));
}

// Ordena e imprime o array
nomes.sort();
console.info(nomes);
