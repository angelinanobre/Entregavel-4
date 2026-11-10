
function mdc(a, b) {
  // Verifica se os valores são números inteiros
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Digite dois números inteiros válidos.");
  }

  // Trabalha com valores positivos
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }

  return a;
}

// Exporta a função para os testes
module.exports = mdc;
