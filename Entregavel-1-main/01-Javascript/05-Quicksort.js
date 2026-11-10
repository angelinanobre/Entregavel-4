
function quicksort(arr) {
  // Verifica se recebeu uma lista
  if (!Array.isArray(arr)) {
    throw new Error("A entrada deve ser uma lista.");
  }

  // Verifica se todos os elementos são números válidos
  if (!arr.every(numero => Number.isFinite(numero))) {
    throw new Error("A lista deve conter apenas números válidos.");
  }

  if (arr.length <= 1) {
    return arr;
  }

  const pivo = arr[arr.length - 1];
  const menores = [];
  const maiores = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivo) {
      menores.push(arr[i]);
    } else {
      maiores.push(arr[i]);
    }
  }

  return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

// Exporta a função para os testes
module.exports = quicksort;
