// let 재할당이 가능
let a = 1;
a = 2;
console.log(a); // 2

// const 재할당이 불가능 -> 재할당이 불필요한 변수에 사용!
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'Hello World!';
console.log(text); // Hello World!
// text = 'Hi World!' // 재할당 불가능

// 1. 상수 : 대문자 사용
const MAX_FRUITS = 5;

// 2. 재할당이 불가능한 상수변수 또는 변수
// -> 메모리 셀 안의 메모리 주소는 변경 불가능!
// -> 하지만, object가 보관된 메모리 주소의 key: value는 변경 가능!
const apple = {
  name: '사과',
  color: 'red',
  display: '🍎',
};
console.log(apple);
// 다른 값으로 할당이 불가능! = apple 안에 다른 메모리 주소값을 할당 불가능

// 하지만 메모리 주소의 object 내용은 변경 가능
apple.color = 'green';
apple.display = '🍏';
console.log(apple);
