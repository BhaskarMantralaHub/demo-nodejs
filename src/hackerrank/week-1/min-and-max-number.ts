function minAndMax(arr: number[]) {
  const sortedArray = arr.sort();
  const minValue = arrReduce(sortedArray.slice(0, 4), sumNumbers);
  const maxValue = arrReduce(sortedArray.slice(1, 5), sumNumbers);
  console.log(`${minValue} ${maxValue}`);
}

function sumNumbers(first: number, second: number) {
  return first + second;
}

function arrReduce(
  sortedArray: number[],
  callBackFuc: (arg0: number, arg1: number) => number
) {
  return sortedArray.reduce((a, b) => callBackFuc(a, b));
}

minAndMax([1, 2, 3, 4, 5]);
