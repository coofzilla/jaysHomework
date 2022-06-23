// how to set default value for an argument?
function defaultValue(x, y = 2) {
  return {
    x,
    y,
  };
}

console.log(defaultValue(1));

/** callback Function?
 * 함수 안에서 실행하는 또 다른 함수
 */

function introduce(lastName, firstName, callback) {
  var fullName = lastName + firstName;

  callback(fullName);
}

introduce('홍', '길동', function (name) {
  console.log(name);
});
// 결과 -> 홍길동

//익명의 함수 사용
let number = [1, 2, 3, 4, 5];

number.forEach(function (x) {
  console.log(x * 2);
});
