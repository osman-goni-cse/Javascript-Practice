const num = 2;

function primeCheck(number) {
  if(number < 2) return false;

  for(let i = 2; i < number; i++) {
    if(number % i == 0) return false;
  }

  return true;
}

if(primeCheck(num)) {
  console.log(`${num} is a Prime Number`);
}
else {
  console.log(`${num} is not a Prime Number`);
}