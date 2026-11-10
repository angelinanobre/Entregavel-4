
const quicksort = require("../Entregavel-1-main/01-Javascript/05-Quicksort.js");

describe("Testes do algoritmo Quicksort", () => {

  test("Deve ordenar uma lista de números", () => {
    expect(quicksort([10, 7, 8, 9, 1, 5]))
      .toEqual([1, 5, 7, 8, 9, 10]);
  });

  test("Deve ordenar uma lista já ordenada", () => {
    expect(quicksort([1, 2, 3, 4]))
      .toEqual([1, 2, 3, 4]);
  });

  test("Deve retornar uma lista vazia quando receber uma lista vazia", () => {
    expect(quicksort([])).toEqual([]);
  });

  test("Deve apresentar erro quando receber uma entrada inválida", () => {
    expect(() => quicksort("abc")).toThrow();
  });

});
