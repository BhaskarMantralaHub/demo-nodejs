import * as fs from 'fs';
import * as path from 'path';

interface Person {
  name: string;
  age: number;
  role: string;
}

//Fetch needs live server to generate HTTP/s URL
// void fetch('./person.json')
//   .then((response) => {
//     return response.json() as unknown as Person;
//   })
//   .then((json) => console.log(json));

const person: Person = fs.readFileSync(
  path.resolve(__dirname, './person.json'),
  {
    encoding: 'utf8',
  }
) as unknown as Person;
console.log(person);
