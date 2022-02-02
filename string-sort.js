const str = "I am learning Javascript";
const ara = str.split(' ');

ara.sort();

for(const element of ara) {
  console.log(element);
}

ara.join(' ');
console.log(ara.toString());