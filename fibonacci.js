function fibonacci(num) {
  if(num == 1) return 0;
  if(num <= 3) return 1;
  
  return fibonacci(num-1) + fibonacci(num-2);
}

for(let i = 1; i <= 20; i++) {
  console.log(`${i}th fibonacci number is ${fibonacci(i)}`);
}