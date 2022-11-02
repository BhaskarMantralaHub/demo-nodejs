function plusMinus(arr: number[]): void {
  console.log(findRatioOfNumbers(getPositiveNumbers(arr), arr));
  console.log(findRatioOfNumbers(getNegativeNumbers(arr), arr));
  console.log(findRatioOfNumbers(getVoidNumbers(arr), arr));
}

function plusMinusAlternative(arr: number[]): void {
  let positiveNumberCnt = 0;
  let negativeNumberCnt = 0;
  let voidNumberCnt = 0;
  const arrLen = arr.length;

  arr.forEach((num) => {
    if (num == 0) voidNumberCnt++;
    else if (num > 0) positiveNumberCnt++;
    else negativeNumberCnt++;
  });

  console.log((positiveNumberCnt / arrLen).toFixed(6));
  console.log((negativeNumberCnt / arrLen).toFixed(6));
  console.log((voidNumberCnt / arrLen).toFixed(6));
}

const signOfNumber = (num: number) => Math.sign(num);

function isPositiveNumber(num: number) {
  return signOfNumber(num) == 1;
}

function isNegativeNumber(num: number) {
  return signOfNumber(num) == -1;
}

function getPositiveNumbers(arr: number[]) {
  return arr.filter((num) => isPositiveNumber(num));
}

function getNegativeNumbers(arr: number[]) {
  return arr.filter((num) => isNegativeNumber(num));
}

function getVoidNumbers(arr: number[]) {
  return arr.filter((num) => !isNegativeNumber(num) && !isPositiveNumber(num));
}

const findRatioOfNumbers = (resultArr: number[], inputArr: number[]) =>
  (resultArr.length / inputArr.length).toFixed(6);

plusMinusAlternative([1, 1, 0, -1, -1]);
