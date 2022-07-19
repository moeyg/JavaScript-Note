// 원시 타입은 값이 복사되어 전달됨

let a = 1;
let b = a; // 1, 변수 a의 값 1이 b에 복사됨
b = 2; // b의 값만 변경 ⭕️, a의 값은 변화 ❌

console.log(a); // 1
console.log(b); // 2

// 객체 타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달됨

let apple = {
  name: '사과',
};
let orange = apple; // 객체 타입 변수 apple의 메모리 주소가 orange에 복사됨
orange.name = '오렌지'; // 변수 apple과 orange의 메모리 주소 내 .name key의 값이 변경됨

console.log(apple.name); // 오렌지
console.log(orange.name); // 오렌지
