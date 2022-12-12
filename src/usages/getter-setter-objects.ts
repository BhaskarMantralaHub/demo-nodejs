const obj = {
  firstName: 'Bhaskar',
  lastName: 'Sarma',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  isMinor: false,

  __age: 10,

  get age() {
    return this.__age;
  },

  set age(objAge: number) {
    if (this.isMinor && objAge > 18) {
      throw new Error('Minor age cannot be 18+');
    }
    if (!this.isMinor && objAge < 18) {
      throw new Error('Major age cannot be below 18');
    }
    this.__age = objAge;
  },
};

obj.age = 20;

console.log(JSON.parse(JSON.stringify(obj)));
