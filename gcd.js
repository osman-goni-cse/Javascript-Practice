function GCD(a, b) {
  while(a != b) {
    if(a > b) a -= b;
    else b -= a;
  }
  return a;
}

var x = 60, y = 72;

console.log(`GCD of ${x} and ${y} is ${GCD(x, y)}`);
