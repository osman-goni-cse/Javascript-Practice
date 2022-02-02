
val = 2634;
str = val.toString();

var num_of_digit = str.length;

let sum = 0;
for(let i = 0; i < num_of_digit; i++) {
  sum += Math.pow(str[i], num_of_digit);
}

if(sum == val) {
  console.log(`${val} is an armstrong number`);
}
else {
  console.log(`${val} is not an armstrong number`);
}


