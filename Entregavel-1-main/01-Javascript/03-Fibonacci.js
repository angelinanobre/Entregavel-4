
function fibonacci(n) {
  // Verifica se recebeu um número inteiro válido
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Digite uma quantidade inteira não negativa.");
  }

  if (n <= 1) return [0];

  const sequencia = [0, 1];

  for (let i = 2; i < n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }

  return sequencia;
}

// Exporta a função para os testes
module.exports = fibonacci;
