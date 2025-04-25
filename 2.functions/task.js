function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = 0;

  avg = Number(
    (arr.reduce((accum, item) => accum + item, avg) / arr.length).toFixed(2)
  );

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  
  let sum = arr.reduce((accum, item) => accum + item, 0);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let item of arr) {
    item % 2 ? (sumOddElement += item) : (sumEvenElement += item);
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let value of arr) {
    if (!(value % 2)) {
      sumEvenElement += value;
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;

  // let evenElementsArray = [];

  // for (let item of arr) {
  //   if (!(item % 2)) evenElementsArray.push(item);
  // }

  // sumEvenElement = evenElementsArray.reduce((accum, currentValue) => accum + currentValue, 0);

  // return sumEvenElement / evenElementsArray.length;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
