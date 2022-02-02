function numberOfVowel(str) {
  const count = str.match(/[aeiou]/gi);
  console.log(count);

  return count.length;
}

const string = "This is very popular among programmers";

console.log(numberOfVowel(string));