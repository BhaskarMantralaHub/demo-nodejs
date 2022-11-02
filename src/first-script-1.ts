interface User {
  name: string;
  age: string;
}

function printProperties(users: User[]) {
  users.forEach((user) => console.log(getUserPropertiesAsString(user)));
}

function getUserPropertiesAsString(user: User) {
  return `${user.name} ${user.age}`;
}

printProperties([
  {
    name: 'Bhaskar',
    age: '31',
  },
  {
    name: 'Mounika',
    age: '28',
  },
]);
