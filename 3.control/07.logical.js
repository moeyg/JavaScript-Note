// 논리 연산자 (Logical Operator)
// && 그리고 - 둘 다 true -> 실행
// || 또는 - 둘 중 하나만이라도 true -> 실행
// ! 부정 (단항 연산자에서 온 것)
// !! 불리언 값으로 변환 (단항 연산자 응용 버전)

let num = 20;

if (num >= 0 && num < 9) {
  console.log('🍏'); // 출력 안 됨 ❌
}

if (num >= 0 || num < 9) {
  console.log('🍎'); // 출력 ⭕️
}

if (!(num >= 0 || num < 9)) {
  console.log('🍊'); // 출력 안 됨 ❌ -> 부정 연산자(!)로 true가 false로 되었기 때문
}

if (!(num >= 0 && num < 9)) {
  console.log('🍋'); // 출력 ⭕️ -> 부정 연산자(!)로 false가 true로 되었기 때문
}

if (num != 9) {
  console.log('🍉'); // 출력 ⭕️
}

// true 와 false &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true); // false

// true 와 false ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 부정 연산자
console.log(!'text'); // false
console.log(!!'text'); // true
