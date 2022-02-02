function factorial(num) {
  let total = 1;
  for(var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

var number = 10;

console.log("Factorial of " + number + " is " + factorial(number));