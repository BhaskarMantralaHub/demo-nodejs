interface ILoan {
  getLoanType(): string;
}

export class PersonalLoan implements ILoan {
  getLoanType(): string {
    return 'Personal Loan';
  }

  getApr(): number {
    return 10;
  }
}

export const personalLoan = new PersonalLoan();

export class SecuredPersonalLoan implements ILoan {
  getLoanType(): string {
    return 'Secured Personal Loan';
  }

  getApr(): number {
    return 15;
  }
}

export const securedPersonalLoan = new SecuredPersonalLoan();

export class Loan {
  isPersonalLoan(loanType: unknown): boolean {
    return loanType != 'undefined';
  }

  isSecuredPersonalLoan(loanType: unknown): loanType is SecuredPersonalLoan {
    return loanType != 'undefined';
  }
}

export const loan = new Loan();

const obj: unknown = {
  loanType: 'Personal Loan',
};
// console.log(obj.getApr()); //TS18046: 'obj' is of type 'unknown'.

if (loan.isPersonalLoan(obj)) {
  // obj.getLoanType(); //TS18046: 'obj' is of type 'unknown'.
}

if (loan.isSecuredPersonalLoan(obj)) {
  obj.getLoanType();
  obj.getApr();
}
