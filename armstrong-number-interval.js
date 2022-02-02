function isArmstrong(num) {
  let temp = num, sum = 0;
  var len = num.toString().length;
  while(temp > 0) {
    let now = temp % 10;
    sum += (now ** len);
    temp /= 10;
    temp = parseInt(temp);
  }
  //console.log(`${num} ${sum}`);
  return sum == num;
}

var low = 1, high = 2000;

for(let i = low; i <= high; i++) {
  if(isArmstrong(i)) {
    console.log(`${i} is an Armstrong number`);
  }
}