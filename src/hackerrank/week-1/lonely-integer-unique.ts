function lonelyInteger(a: number[]): number {
  const integerMap = new Map();
  for (let i = 0; i < a.length; i++) {
    if (integerMap.has(a[i])) integerMap.delete(a[i]);
    else integerMap.set(a[i], a[i]);
  }
  return parseInt(integerMap.keys().next().value as unknown as string);
}

function lonelyInteger1(a: number[]) {
  for (let i = 0; i < a.length; i++) {
    const filteredIntegers = a.filter((val) => val == a[i]);
    if (filteredIntegers.length == 1) return filteredIntegers[0];
  }
  return 0;
}

const start = performance.now();
console.log(lonelyInteger1([1, 2, 3, 4, 3, 2, 1]));
const end = performance.now();
console.log(end - start);

const start1 = performance.now();
console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
const end1 = performance.now();
console.log(end1 - start1);
