const fruits = [20];

fruits[0] = "apple";
fruits[1] = "orange";
fruits[2] = "banana";

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// console.log(fruits.toString( ));
// console.log(fruits.join("***"));

// fruits.shift();

// for(var i = 0; i < fruits.length ; i++) {
//   console.log("i " + fruits[i]);
// }

// fruits.unshift("Lemon");

// for(var i = 0; i < fruits.length ; i++) {
//   console.log("i " + fruits[i]);
// }

const cars = ["volvo", "premio", "allion", "prado"];
cars.splice(2, 0, "hyundai");
cars.splice(4, 0, "alaska");

fruits.sort();
cars.sort();

console.log(fruits);
console.log(cars);

console.log(cars.reverse());

const points = [40, 100, 1, 5, 25, 10];
points.sort();

console.log(points);
console.log(points.sort(function(a, b) {return a-b}));
console.log(points.sort(function(a, b) {return b-a}));
console.log(points.filter(function(value){return value > 18}));