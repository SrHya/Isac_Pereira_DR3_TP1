let numero = parseInt(prompt("Digite um número inteiro maior que zero:"));
let isPrimo = true;
let i = 2;

do {
  if (numero % i === 0) {
    isPrimo = false;
    break;
  }
  i++;
} while (i < numero);

alert(isPrimo ? "Número é primo" : "Número não é primo");
