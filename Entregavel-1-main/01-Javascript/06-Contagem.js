
function contarInteirosEntrePrimeiroEN(conjunto, n) {
  // Verifica se recebeu uma lista
  if (!Array.isArray(conjunto)) {
    throw new Error("A entrada deve ser uma lista.");
  }

  // Verifica se N é um número válido
  if (!Number.isFinite(n)) {
    throw new Error("N deve ser um número válido.");
  }

  // Verifica se todos os elementos são números válidos
  if (!conjunto.every(valor => Number.isFinite(valor))) {
    throw new Error("A lista deve conter apenas números válidos.");
  }

  if (conjunto.length === 0) return 0;

  const primeiro = conjunto[0];

  // Define os limites do intervalo
  const min = Math.min(primeiro, n);
  const max = Math.max(primeiro, n);

  let contador = 0;

  for (let i = 0; i < conjunto.length; i++) {
    const valor = conjunto[i];

    // Conta apenas inteiros dentro do intervalo
    if (Number.isInteger(valor) && valor >= min && valor <= max) {
      contador++;
    }
  }

  return contador;
}

// Exporta a função para os testes
module.exports = contarInteirosEntrePrimeiroEN;
