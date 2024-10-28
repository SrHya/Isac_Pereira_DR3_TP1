let raio = parseFloat(prompt("Digite o raio do círculo:"));
let circulo = {
  raio,
  circunferencia() {
    return 2 * Math.PI * this.raio;
  },
  area() {
    return Math.PI * this.raio ** 2;
  },
};

alert(`Circunferência: ${circulo.circunferencia()}`);
alert(`Área: ${circulo.area()}`);
