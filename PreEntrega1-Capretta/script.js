let capitalDepositado = parseFloat(prompt("Ingrese su capital a depositar: "));
let duracion = parseFloat(prompt("Ingrese la duración del plazo en dias"));
let tasa = parseFloat(alert("La tasa nominal anual es de: 75.00% "));
function calculadorInteres() {
  tasa = (75 / 365) * duracion;
  let interesesGanados = parseFloat((tasa * capitalDepositado) / 100);
  let capitalAcumulado = parseFloat(
    interesesGanados + capitalDepositado
  ).toFixed(2);
  return capitalAcumulado;
}

alert("TOTAL: " + calculadorInteres());
