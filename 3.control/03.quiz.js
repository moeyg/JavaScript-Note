// let num = 2;
// num의 숫자가 짝수면 👍, 홀수면 👎

// if
let num = 2;
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
} // 👍

// 삼항 조건 연산자
num % 2 === 0 ? console.log('👍') : console.log('👎');
// 👍

let even = num % 2 === 1 ? '👍' : '👎';
console.log(even); // 👎
