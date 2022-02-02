
function primeCheck(number) {
  if(number < 2) return false;

  for(let i = 2; i < number; i++) {
    if(number % i == 0) return false;
  }

  return true;
}
var left = 1, right = 100;
console.log(`Prime between ${left} and ${right}:`);

for(let i = left; i <= right; i++) {
  if(primeCheck(i)) {
    console.log(`${i} `);
  }
}