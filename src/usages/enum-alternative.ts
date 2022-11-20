const arr = [1, 2, 3] as const;
type ArrType = typeof arr[number];

const testFun = (param: { [k in ArrType]: number }) => {
  console.log(param);
};

const testFun1 = (param: ArrType) => {
  console.log(param);
};

testFun1(1);
// testFun1(10); - Error
