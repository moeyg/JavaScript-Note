// 숫자 데이터 타입
// let variableName = number;
// JavaScript에서는 숫자 관련 데이터 타입이 세부적으로 나뉘어 있지 않기 때문에 정수, 음수, 실수 모두 동일한 데이터 타입으로 담을 수 있다.

let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수

console.log(integer); // 123
console.log(negative); // -123
console.log(double); // 1.23

// JavaScipt에서는 2진수, 8진수, 16진수도 동일한 데이터 타입에 담을 수 있다.
let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(binary); // 123
console.log(octal); // 123
console.log(hex); // 123

// 주의! 숫자를 나눌 떼 발생할 수 있는 데이터 값
console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'string'); // NaN (Not a Number)

// bigInt : 끝에 n을 붙이면 (int 보다) 큰 수를 표현할 수 있다.
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
