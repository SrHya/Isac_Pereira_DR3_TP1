let fibonacci = [0, 1];
let i = 2;

while (true) {
  let nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
  if (nextNumber > 55) break;
  fibonacci.push(nextNumber);
  i++;
}

console.info(fibonacci);
