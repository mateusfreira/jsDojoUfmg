describe("teste troco", function () {


  //This ensures that the board has the proper dimensions.
  it("custa 50 pagou 100 retorn 1 nota 50", function () {
    expect(retorna_cedulas(50, 100)).toEqual({
      100: 0,
      50: 1,
      10: 0,
      5: 0,
      1: 0,
      0.50: 0,
      0.10: 0,
      0.05: 0,
      0.01: 0
    });

  });
  it("custa 40 pagou 100 retorna 1 nota 50 e 1 de 10", function () {
    expect(retorna_cedulas(40, 100)).toEqual({
      100: 0,
      50: 1,
      10: 1,
      5: 0,
      1: 0,
      0.50: 0,
      0.10: 0,
      0.05: 0,
      0.01: 0
    });
  });

  it("custa 34,50 pagou 100 retorna 1:50 e 1:10 1:5 1:0,.50", function () {
    expect(retorna_cedulas(34.5, 100)).toEqual({
      100: 0,
      50: 1,
      10: 1,
      5: 1,
      1: 0,
      0.50: 1,
      0.10: 0,
      0.05: 0,
      0.01: 0
    });
  });
  it("custa 0,01 pagou 200 retorna 1:100, 1:50 e 4:10 1:5 1:4,.50", function () {
    expect(retorna_cedulas(0.01, 200)).toEqual({
      100: 1,
      50: 1,
      10: 4,
      5: 1,
      1: 4,
      0.50: 1,
      0.10: 4,
      0.05: 1,
      0.01: 4
    });
  });
  it("custa 0,01 pagou 200 retorna 1:50 e 1:10 1:5 1:0,.50", function () {
    expect(retorna_cedulas(0.01, 200)).toEqual({
      100: 1,
      50: 1,
      10: 4,
      5: 1,
      1: 4,
      0.50: 1,
      0.10: 4,
      0.05: 1,
      0.01: 4
    });
  });
  it("se pagar menos", function () {
    expect(retorna_cedulas(100, 50)).toEqual(-1);
  });
});
