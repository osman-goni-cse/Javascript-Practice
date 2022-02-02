const person = {
  name: 'Osman Goni',
  salary: 455555,
  id: 170132
};

const student = {
  gender: 'Male'
};

const newObj = Object.assign(person, student);
// const newObj = {...person, ...student};

console.log(newObj);

//to count the number of keys/properties in an object

var count = Object.keys(newObj).length;
console.log(count);

// Add key/value to object

newObj.height = 5.6;
console.log(newObj);

