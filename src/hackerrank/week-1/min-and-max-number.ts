function minAndMax(arr: number[]) {
  const sortedArray = arr.sort();
  const minValue = sortedArray.slice(0, 4).reduce((a, b) => sumNumbers(a, b));
  const maxValue = sortedArray.slice(1, 5).reduce((a, b) => sumNumbers(a, b));
  console.log(`${minValue} ${maxValue}`);
}

function sumNumbers(first: number, second: number) {
  return first + second;
}

minAndMax([1, 2, 3, 4, 5]);
