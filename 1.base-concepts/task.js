"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentRateMonthly = percent / 100 / 12;
  let creditBody = amount - contribution;
  let paymentMonthly =
    creditBody *
    (percentRateMonthly +
      percentRateMonthly / (Math.pow(1 + percentRateMonthly, countMonths) - 1));
  let totalMortgage = paymentMonthly * countMonths;
  return Number(totalMortgage.toFixed(2));
}
