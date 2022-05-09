// 삼항 조건 연산자 (Ternary Operator)
// 조건식 ? 표현식(true인 경우 실행) : 표현식(false인 경우 실행)

let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('!!');
} // !!

fruit = 'apple';
fruit === 'apple' ? console.log('🍎') : console.log('!!');
// 🍎

let x = fruit === 'orange' ? '🍊' : '❌';
console.log(x); // ❌
