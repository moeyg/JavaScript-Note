// 원시 타입
const primitiveTypeNum = 123;
console.log(primitiveTypeNum); // 123
console.log(typeof primitiveTypeNum); // number

// 객체 타입
const objectTypeNum = new Number(123);
console.log(objectTypeNum); // [Number: 123]
console.log(typeof objectTypeNum); // object

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

// 활용 예제
// Number 클래스의 isNaN 이라는 정적 메서드 활용
const number = 1;

if (number === Number.NaN) {
}
if (number < Number.MAX_SAFE_INTEGER) {
}
if (Number.isNaN(primitiveTypeNum)) {
}

// 지수 표기법(.toExponential) : 매우 크거나 작은 숫자를 표기할 때 사용, 10의 n제곱으로 표기
const exponentNumber = 101;
console.log(exponentNumber.toExponential()); // 1.01e+2 (e+2 = 10^2)

// 반올림하여 문자열로 변환
const floatToInteger = 101.102;
console.log(floatToInteger.toFixed()); // 101

// 숫자를 문자열로 변환
const numberToString = 101;
console.log('숫자형', numberToString); // 숫자형 101
console.log('문자열', numberToString.toString()); // 문자열 101

// 숫자를 국가 언어에 따라 표기로 변환
const numberLocalString = 101.234;
console.log(numberLocalString.toLocaleString('ar-EG')); // ١٠١٫٢٣٤ (아라비아 101.234)

// 원하는 자릿수까지 유효하도록 반올림
const significantFigure = 101.10101;
console.log(significantFigure.toPrecision(5)); // 101.10
console.log(significantFigure.toPrecision(3)); // 101
console.log(significantFigure.toPrecision(2)); // 1.0e+2 -> 전체 자릿수 표기가 안될 때는 지수표기법

// 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
console.log(Number.EPSILON); // 2.220446049250313e-16
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 2.220446049250313e-16
}

// 실수를 계산할 때 2진수로 변환해 계산하고 다시 10진수로 변환하기 때문에 오차가 발생
const calculate = 0.1 + 0.2 - 0.2;
console.log(calculate); // 0.10000000000000003 -> EPSILON

// Number.EPSILION 사용 예제
function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(calculate, 0.1)); // true
