const string = 'Mr Red has a red house and a red car';

//replaces only the first instance of the string
let text = string.replace('red', 'blue');

console.log(text);

///g refers to global. It means that all the matching characters in the string are replaced.
let regex = /red/g;

text = string.replace(regex, 'blue');

console.log(text);

// to perform case-insensitive replacement using /gi, where i represents case-insensitive.

let reg = /red/gi;

text = string.replace(reg, 'blue');

console.log(text);
