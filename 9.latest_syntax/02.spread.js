// 전개 구문 (Spread)
// 객체나 배열에 있는 요소를 각각의 인자로 받아 출력할 수 있게 한다.

// 배열에서 전개 구문
// 배열을 Math.max를 이용해 최대값을 구하면,
nums = [1, 5, 6, 3, 10, 12, 30, 99];
console.log(Math.max(nums)); // NaN
// ...배열 을 넣으면 각각의 요소를 인자로 받아 최대값을 출력할 수 있다.
console.log(Math.max(...nums)); // 99

// 배열로 출력
console.log(nums); // [1, 5, 6, 3, 10, 12, 30, 99]
// 인자로 받아 각각 출력
console.log(...nums); // 1 5 6 3 10 12 30 99

// 배열의 요소로 사용할 수도 있다.
const food = ['pizza', 'burger', 'cookie'];
const fruit = ['apple', 'banana', 'peach'];

const refrigerator = [...food, ...fruit];
console.log(refrigerator); // [ 'pizza', 'burger', 'cookie', 'apple', 'banana', 'peach' ]
console.log(refrigerator[0]); // pizza
console.log(refrigerator[5]); // peach

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// 객체에서 전개 구문 -> 값을 복사할 수 있다
const redApple = {
  color: 'red',
};
console.log(redApple); // { color: 'red' }

const apple = {
  ...redApple,
  price: 1000,
};
console.log(apple); // { color: 'red', price: 1000 }
// key에 접근할 수 있다
console.log(apple.color); // red

const peach = {
  display: '🍑',
};

let applePeach = { ...apple, ...peach };
console.log(applePeach); // { color: 'red', price: 1000, display: '🍑' }
// 원래 있는 키값을 변경하면 변경된다.
applePeach = { ...apple, ...peach, price: 2000 };
console.log(applePeach); // { color: 'red', price: 2000, display: '🍑' }

// 값을 복사한 것이기 때문에 기존의 객체에는 변화가 없다.
console.log(apple); // { color: 'red', price: 1000 }

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// 사용 예제
const userForm = {
  email: 'moooeyg@gmail.com',
  password: '1234',
  username: 'moeyg',
};

const userFormAdmin = { ...userForm, isAdmin: false };
console.log(userFormAdmin);
// {
//     email: 'moooeyg@gmail.com',
//     password: '1234',
//     username: 'moeyg',
//     isAdmin: false
// }
