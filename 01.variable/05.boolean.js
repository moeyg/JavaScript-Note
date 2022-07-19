// 불리언 데이터 타입
// 참(true), 거짓(false)을 다루는 데이터 타입
// !! 를 붙이면 값을 불리언으로 변환

let 참 = true;
let 거짓 = false;
console.log(참); // true
console.log(거짓); // false

// 활용 예제
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isFree); // true
console.log(isActivated); // false
console.log(isEnrolled); // true

console.clear();

// Falsy : 거짓인 값
// 0, -0, null, false, NaN, undefined, ''
console.log(!!0); // false
console.log(!!-0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

// Truthy : 참인 값
console.log(!!1); // true
console.log(!!-1); // true
console.log(!!'string'); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
