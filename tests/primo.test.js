
const numPrimo = require("../Entregavel-1-main/01-Javascript/01-Primo");

describe("Testes do algoritmo Número Primo", () => {

  test("Deve identificar 7 como número primo", () => {
    expect(numPrimo(7)).toBe(true);
  });

  test("Deve identificar 10 como número não primo", () => {
    expect(numPrimo(10)).toBe(false);
  });

  test("Deve rejeitar números negativos", () => {
    expect(numPrimo(-5)).toBe(false);
  });

  test("Deve apresentar erro para valores inválidos", () => {
    expect(() => numPrimo("abc")).toThrow();
  });

});
