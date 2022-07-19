// 매개 변수의 기본값은 무조건 undefined
// arguments : 매개 변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
function add1(a, b) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(arguments); // [Arguments] {'0' : 1, '1' : 2}
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
}
add1(1, 2); // 함수 호출

// 매개 변수 기본값 (Default Parameters) : a = 2, b = 3과 같이 직접 값을 지정할 수 있음
function add2(a = 2, b = 3) {
  console.log(a); // 2
  console.log(b); // 3
  console.log(arguments); // [Arguments] {}
  console.log(arguments[0]); // undefined
  console.log(arguments[1]); // undefined
  return a + b;
}
add2(); // 함수 호출

// Rest 매개 변수 (Rest Parameters)
// 인자를 받을 개수가 정해지지 않았을 때 사용하면 배열 받아 표기
function sum(a, b, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // [3, 4, 5, 6, 7, 8]
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
