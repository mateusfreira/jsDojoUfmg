function retorna_cedulas(custo, pagou) {
  var troco = pagou - custo;
  if (troco < 0) {
    return -1;
  }

  var cedula_cem = parseInt(troco / 100, 10);
  troco = troco - cedula_cem * 100;
  var cedula_cinquenta = parseInt(troco / 50, 10);
  troco = troco - cedula_cinquenta * 50;
  var cedula_dez = parseInt(troco / 10, 10);
  troco = troco - cedula_dez * 10;
  var cedula_cinco = parseInt(troco / 5, 10);
  troco = troco - cedula_cinco * 5;
  var cedula_um = parseInt(troco / 1, 10);
  troco = troco - cedula_um * 1;
  var moeda_cinquenta = parseInt(troco / 0.5, 10);
  troco = troco - moeda_cinquenta * 0.50;
  var moeda_dez = parseInt(troco / 0.1, 10);
  troco = troco - moeda_dez * 0.10;
  var moeda_cinco = parseInt(troco / 0.05, 10);
  troco = troco - moeda_cinco * 0.05;
  var moeda_um = parseInt(troco / 0.01, 10);
  return {
    100: cedula_cem,
    50: cedula_cinquenta,
    10: cedula_dez,
    5: cedula_cinco,
    1: cedula_um,
    0.50: moeda_cinquenta,
    0.10: moeda_dez,
    0.05: moeda_cinco,
    0.01: moeda_um
  };
}
