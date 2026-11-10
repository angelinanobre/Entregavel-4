
const fibonacci = require("../Entregavel-1-main/01-Javascript/03-Fibonacci.js");

describe("Testes do algoritmo Fibonacci", () => {

  test("Deve gerar a sequência com 8 elementos", () => {
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("Deve retornar [0] quando receber zero", () => {
    expect(fibonacci(0)).toEqual([0]);
  });

  test("Deve apresentar erro para números negativos", () => {
    expect(() => fibonacci(-3)).toThrow();
  });

  test("Deve apresentar erro para valores não inteiros", () => {
    expect(() => fibonacci(2.5)).toThrow();
  });

});

