// 연산자 우선 순위

let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 14

result = (a + b) * 4;
console.log(result); // 20

result = a++ + b * 4;
console.log(result); // 14
console.log(a); // 3
