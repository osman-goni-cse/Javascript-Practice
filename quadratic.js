// ax^2 + bx + c

// var a = 1, b = -3, c = 10;
// var a = 1, b = -6, c = 9;
var a = 1, b = 6, c = 5;
let root1, root2;

const discr = ((b*b) - (4*a*c));

if(discr > 0) {
  root1 = (-b+Math.sqrt(discr)) / (2*a);
  root2 = (-b-Math.sqrt(discr)) / (2*a);

  console.log(`The roots of quadratic equation are: ${root1} ${root2}`);
}
else if(discr == 0) {
  root1 = root2 = (-b / (2*a));
  console.log(`The roots of quadratic equation are: ${root1} ${root2}`);
}
else {
  let realPart = (- b / (2*a)).toFixed(2);
  let imgPart = (Math.sqrt(-discr) / (2*a)).toFixed(2);

  console.log(`The roots of the equations are: ${realPart} + ${imgPart}i and ${realPart} - ${imgPart}i`);
}