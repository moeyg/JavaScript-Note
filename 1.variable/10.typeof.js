// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
// JavaScript는 동적으로 실행이 될 때, 할당된 값에 따라 타입이 결정된다.
// = Dynamic, Weakly typed programming language

let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123;
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol
