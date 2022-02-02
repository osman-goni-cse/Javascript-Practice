function maximumOfTwo(a, b) {
  if(a > b) return a;
  return b;
}

function maximumOfThree(a, b, c) {
  if(a > b && a > c) return a;
  else if(b > a && b > c) return b;
  else return c;
}

let a = -100, b = -20, c = 30;

console.log("Maximum number is: " + maximumOfTwo(maximumOfTwo(a, b), c));

console.log("Maximum number using three: " + maximumOfThree(a, b, c));

console.log("Maximum number using Math Max: "+ Math.max(a, b, c));