
function numPrimo(n) {
  // Verifica se a entrada é válida
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Digite um número inteiro válido.");
  }

  // Números menores ou iguais a 1 não são primos
  if (n <= 1) return false;

  // Verifica se existe algum divisor
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Exporta a função para os testes
module.exports = numPrimo;
