// Array com dias da semana
let dias_da_semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
let dia = prompt("Informe um dia da semana:");

if (dias_da_semana.indexOf(dia) !== -1) {
  console.info("Dia da semana válido");
} else {
  console.info("Dia da semana inválido");
}
