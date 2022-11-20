const numArr = [1, 2, 3] as const;
type ArrType = typeof numArr[number];

const testFun1 = (param: ArrType) => {
  console.log(param);
};

testFun1(1);
// testFun1(10); - Error

const arr1 = ['Bhaskar', 'Sarma'] as const;

type CustomType = typeof arr1[number];

const nameObj: { [k in CustomType]: string } = {
  Bhaskar: '',
  Sarma: '',
};

console.log(typeof nameObj);
