const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filterPerson = {id: person.id, age: person.age};
const json = JSON.stringify(filterPerson)
console.log(json); // Should return: { id: 1, age: 25 }