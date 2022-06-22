// 2) explain what the difference between function declaration and function expression

//함수 선언식(Function delarations)
function functionDeclaration() {
  return "A function declaration";
}
functionDeclaration();

//함수 표현식(Function Expressions)
// 클로져로 사용, 콜백으로 사용(다른 함수의 인자로 넘길 수 있음)
var funcExpression = function () {
  return "A function expression";
};
funcExpression();

// 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.
