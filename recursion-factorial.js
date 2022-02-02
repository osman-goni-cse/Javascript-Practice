function factorial(num) {
  if(num <= 1) return 1;

  return num*factorial(num-1);
}

var num = 110;

console.log(`Factorial of ${num} is ${factorial(num)}`);