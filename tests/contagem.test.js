
const contarInteirosEntrePrimeiroEN = require("../Entregavel-1-main/01-Javascript/06-Contagem.js");

describe("Testes do algoritmo Contagem", () => {

  test("Deve contar os inteiros dentro do intervalo", () => {
    expect(
      contarInteirosEntrePrimeiroEN([3, 1.5, 7, 4, 10, 8, 2], 8)
    ).toBe(4);
  });

  test("Deve retornar zero para uma lista vazia", () => {
    expect(contarInteirosEntrePrimeiroEN([], 8)).toBe(0);
  });

  test("Deve considerar os limites do intervalo", () => {
    expect(contarInteirosEntrePrimeiroEN([5, 3, 7, 9], 7)).toBe(2);
  });

  test("Deve apresentar erro quando receber uma entrada inválida", () => {
    expect(() => contarInteirosEntrePrimeiroEN("abc", 8)).toThrow();
  });

});
