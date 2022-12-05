function birthday(
  inputSegmentsArr: number[],
  birthDay: number,
  birthMonth: number
): number {
  let occurrences = 0;
  if (inputSegmentsArr.length <= 2) {
    const arrReduceValue = inputSegmentsArr.reduce((a, b) =>
      sumNumbers123(a, b)
    );
    if (arrReduceValue == birthDay) {
      return 1;
    }
  }
  for (let i = 0; i < inputSegmentsArr.length - birthMonth; i++) {
    const slicedArr = inputSegmentsArr.slice(i, i + birthMonth);
    const arrReduceValue = slicedArr.reduce((a, b) => sumNumbers123(a, b));
    console.log(`Array is ${slicedArr}`);
    console.log(`Iteration ${i + 1}. Array reduced value is ${arrReduceValue}`);
    if (arrReduceValue == birthDay) {
      occurrences++;
    }
  }

  return occurrences;
}

function sumNumbers123(first: number, second: number) {
  return first + second;
}

console.log(
  birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
);

// const numbersArr: number[] = [2, 7, 1, 3, 2];
// console.log(numbersArr.slice(1, 3).reduce((a, b) => sumNumbers(a, b)));
// console.log(numbersArr.slice(0, 2).reduce((a, b) => sumNumbers(a, b)));
// console.log(numbersArr.slice(2, 4).reduce((a, b) => sumNumbers(a, b)));

// Lily decides to share a contiguous segment of the bar selected such that:
//   The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birthday.
//   Determine how many ways she can divide the chocolate.
//   Example
//  s= [2,2,1,3,2]
//  d = 4, m = 2 (length of output array)
//  output = [2,2], [1,3]
//
// Lily wants to find segments summing to Ron's birthday,  with a length equalling his birth month,
// In this case, there are two segments meeting her criteria: and .
// Function Description
// Complete the birthday function in the editor below.
//   birthday has the following parameter(s):
// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birthday
// int m: Ron's birth month
// Returns
// int: the number of ways the bar can be divided
