let numeros = Array.from({ length: 5 }, () => Math.floor(Math.random() * 101));
alert(numeros);

while (confirm("Deseja continuar?")) {
  numeros.push(
    ...Array.from({ length: 5 }, () => Math.floor(Math.random() * 101))
  );
  alert(numeros);
}
