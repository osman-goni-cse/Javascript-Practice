// console.log("Now we explore objects");

// const Person = {
//   firstName: "Osman",
//   lastName: "Goni",
//   age: 23,
//   salary: 500000,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(Person.firstName);
// console.log(Person.lastName);
// console.log(Person.age);
// console.log(Person["salary"]);

// console.log(Person.fullName());

// let x = 123;
// console.log(x);
// console.log(x.toString());
// console.log((123).toString());
// console.log((100+23).toString());

// let x = 6.656;
// console.log(x.toExponential(2));
// console.log(x.toExponential(4));
// console.log(x.toExponential(6));

var cnt = 0;

while(cnt < 5) {
  console.log("cnt is cnt");
  cnt++;
  console.log("cnt " + cnt);
}

for(var num = 0; num < 20; num += 2) {
  console.log("num is "+num);
}

var name = false;
console.log(typeof name);