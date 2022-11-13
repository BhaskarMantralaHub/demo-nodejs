const person_name = 'Bhaskar';
const age = 30;

//Existing
console.log('person_name', person_name);
console.log('age', age);

//New way
console.log({ person_name, age });
console.table({ person_name, age });
console.table([{ person_name, age }], ['person_name', 'age']); //with column names
