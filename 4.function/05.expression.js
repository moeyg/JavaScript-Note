// 함수 선언문 : function name(매개변수) {}
// 함수 표현식 : varName = function (매개변수) {} -> 함수도 객체이기 때문에 가능!
// 화살표 함수 : varName = (매개변수) => {}
// 생성자 함수 : const object = new Function();
// 따라서, 함수 자체는 선언문일 때는 문이지만, 값으로 계산될 수 있는 표현식!

// 함수 표현식 : varName = function (매개변수) {}
// 함수 메모리 주소가 varName에 할당
// 무명 함수 : 함수 이름이 없음
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2)); // 3

// 화살표 함수 varName = (매개변수) => {}
add = (a, b) => {
  return a + b;
};
console.log(add(3, 4)); // 7

// 값만 return 하는 경우
// return과 {} 생략하고 값만 작성할 수 있다.
add = (a, b) => a + b;
console.log(add(5, 6)); // 11

// 생성자 함수 : const object = new Function(); -> 뒤 객체편에서 다룸!

// IIFE (Immediately-Invoked Function Expressions)
// 함수를 정의하면서 바로 호출하고 싶을 때, 함수를 ()로 묶어 (함수)(); 로 표현하면 값으로 변환되어 실행 된다.
(function disappear() {
  console.log('🫥');
})();
