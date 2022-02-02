const person = {
  id: 170132,
  Name: 'Osman Goni',
  age: 23
}

var hasName = 'name' in person;
var hasage = person.hasOwnProperty('age');

if(hasName) {
  console.log('Key exists');
}
else {
  console.log('Key Does not exists');
}

if(hasage) {
  console.log('age exists');
}
else {
  console.log('age does not exists');
}