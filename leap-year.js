function isLeapYear(year) {
  if(year % 400 == 0) return true;
  else if(year % 100 == 0) return false;
  else if(year % 4 == 0) return true;
  else return false;
}

var year = 2015;

if(isLeapYear(year) == true) {
  console.log(year + " is Leap Year");
}
else {
  console.log(year + " is not a Leap Year");
}