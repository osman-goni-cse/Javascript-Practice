function decimalToBinary(num) {
  let binaryString = "";
  var value = num;
  while(num) {
    if(num % 2) binaryString = "1" + binaryString;
    else binaryString = "0" + binaryString;
    num /= 2;
    num = parseInt(num);
  }
  
  console.log(`Decimal ${value} Binary ${binaryString}`);
}

decimalToBinary(111);

// Using Built-in Function

const number = 111;
console.log("Binary representation: "+number.toString(2));
console.log("Octal representation: "+number.toString(8));
console.log("Hexadecimal representation: "+number.toString(16));
console.log("Ternary Representation: "+number.toString(3));