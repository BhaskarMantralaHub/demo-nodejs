const arrayWithDuplicates = [1, 1, 2, 3, 4, 2];

const uniqueArr = [...new Set(arrayWithDuplicates)];

console.log(uniqueArr);
