const student = {
  name: 'Osman',
  age: 23,
  salary: 5555555,
  hobbies: ['reading', 'swimming', 'praying']
};

// loop through object

for(let key in student) {
  console.log("Key: " + key + " Value: "+ student[key]);
}

// another way
console.log("\n\n");
for(let [key, value] of Object.entries(student)) {
  console.log("Key: " + key + " Value: " + value);
}