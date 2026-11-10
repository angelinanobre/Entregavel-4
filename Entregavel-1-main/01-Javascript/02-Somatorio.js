
function somatorio(numeros) {
  // Verifica se recebeu um array
  if (!Array.isArray(numeros)) {
    throw new Error("A entrada deve ser uma lista de números.");
  }

  // Verifica se todos os elementos são números válidos
  if (!numeros.every(numero => Number.isFinite(numero))) {
    throw new Error("A lista deve conter apenas números válidos.");
  }

  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

// Exporta a função para os testes
module.exports = somatorio;
