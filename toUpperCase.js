function capitalizeFirstLetter(str) {
  const text = str.charAt(0).toUpperCase() + str.slice(1);
  return text;
}

const str = "javascript";
console.log(capitalizeFirstLetter(str));