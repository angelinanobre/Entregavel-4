
const somatorio = require("../Entregavel-1-main/01-Javascript/02-Somatorio.js");

describe("Testes do algoritmo Somatório", () => {

  test("Deve somar os números de uma lista", () => {
    expect(somatorio([5, 10, 15, 20])).toBe(50);
  });

  test("Deve retornar zero para uma lista vazia", () => {
    expect(somatorio([])).toBe(0);
  });

  test("Deve apresentar erro quando a entrada não for uma lista", () => {
    expect(() => somatorio(10)).toThrow();
  });

  test("Deve apresentar erro quando a lista tiver valores inválidos", () => {
    expect(() => somatorio([5, "abc", 10])).toThrow();
  });

});

