//Md. Tamim Hossen
//202-15-14414
// callbacks & forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);