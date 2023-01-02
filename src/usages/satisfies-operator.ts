interface ILoanTerms {
  apr: string;
  amount: string;
}

interface ILoan {
  terms: string | ILoanTerms;
}

//without satisfies operator
const withOutSatisfiesOperator: ILoan = {
  terms: 'String value',
};

// console.log(withOutSatisfiesOperator.terms.toLowerCase()); //cannot access string props and methods

//**************************************************************************************

//with satisfies operator
const withSatisfiesOperator = {
  terms: 'String value',
} satisfies ILoan;

const withSatisfiesOperator1 = {
  terms: {
    apr: '10',
    amount: '2000',
  },
} satisfies ILoan;

console.log(withSatisfiesOperator.terms.length);

console.log(withSatisfiesOperator1.terms.amount);
