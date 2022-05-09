// 산술 연산자 (Arithmetic Operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수 (거듭제곰)
// Math.pow(n, n) 거듭제곱

console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(5 ** 2); // 25
console.log(Math.pow(5, 2)); // 25

// + 연산자 주의점!
let text = '여러 개의 ' + '문자를 ' + '더할 때 ' + '사용 가능';
console.log(text);

// 숫자와 문자열을 더하면 문자열로 변환됨
text = '1' + 1;
console.log(text); // 11 -> 문자열 11
