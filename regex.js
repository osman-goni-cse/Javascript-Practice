// count letter using Regex

function countLetter(str, letter) {
  const reg = new RegExp(letter, 'g');//must be need g here
  return str.match(reg).length;
}

const str = "Green green green gg";
const ltr = 'e';

console.log(countLetter(str, ltr));

// count number of vowel in a string using Regex

function numberOfVowel(str) {
  const count = str.match(/[aeiou]/gi);
  console.log(count);

  return count.length;
}

const string = "This is very popular among programmers";

console.log(numberOfVowel(string));

// check string starts and ends with certain characters using Regex

function startOrEndWith(str) {
  if( (/^S/i.test(str)) && (/G$/i.test(str)) ) {
    console.log(`${str} starts with S and ends with G`);
  }
  else if( (/^S/i.test(str))) {
    console.log(`${str} starts with S and does not ends with G`);
  }
  else if( (/G/i.test(str))) {
    console.log(`${str} does not start with S and ends with G`);
  }
  else {
    console.log(`${str} does not start with S and does not ends with G`);
  }
}

const text = "Stringa";
startOrEndWith(text);