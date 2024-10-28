let numero = parseInt(prompt("Digite um número inteiro maior que zero:"));
let contador = 0;

while (contador <= numero) {
  if (contador % 2 === 0) {
    console.info(contador);
  }
  contador++;
}
