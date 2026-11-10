
const mdc = require("../Entregavel-1-main/01-Javascript/04-Mdc.js");

describe("Testes do algoritmo MDC", () => {

  test("Deve calcular o MDC de 24 e 36", () => {
    expect(mdc(24, 36)).toBe(12);
  });

  test("Deve calcular o MDC de 10 e 5", () => {
    expect(mdc(10, 5)).toBe(5);
  });

  test("Deve aceitar números negativos", () => {
    expect(mdc(-24, 36)).toBe(12);
  });

  test("Deve apresentar erro para valores não inteiros", () => {
    expect(() => mdc(10.5, 5)).toThrow();
  });

});
