function testScore(studentName, age, gpa) {
  //parameters
  console.log(studentName, age, gpa);
}

testScore("daniel", 25, 4.0); //arguments

//Q : Difference between parameter and argument?
//The parameters are the aliases for the values that will be passed to the function.
//The arguments are the actual values.

var foo = function (a, b, c) {}; // a, b, and c are the parameters

foo(1, 2, 3); // 1, 2, and 3 are the arguments

function doubleIt($number) {
  //parameter is $number
  return ($number *= 2);
}

$price = 50;
$inflated_price = doubleIt($price); // 100
