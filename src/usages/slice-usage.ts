const inputArr = [1, 2, 3, 4, 5];
//            1   2   3   4   5
//Index:      0   1   2   3   4
//-Ve Index:  -5 -4  -3  -2  -1

console.log(inputArr.slice(-1)); // output 5
console.log(inputArr.slice(0)); // output 1,2,3,4,5

console.log(inputArr.slice(-2)); // output 4, 5
console.log(inputArr.slice(2)); // output 3,4,5
