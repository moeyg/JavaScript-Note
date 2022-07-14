// 화살표 함수 (Arrow Function)
// 익명함수일 때 사용이 가능 -> 변수에 저장하여 사용
// let variable = (parameter) => {}

// 기존 함수 표현법 (sum 이라는 이름이 지어진 함수)
function sum(x, y) {
  return x + y;
}
console.log(sum(1, 5)); // 6

// 익명 함수를 변수(add)에 넣는 표현법
const add = function (x, y) {
  return x + y;
};
console.log(add(2, 5)); // 7

// 화살표 함수
const addNumber = (x, y) => {
  return x + y;
};
console.log(addNumber(3, 5)); // 8

const square = (x) => {
  return x * x;
};
console.log(square(8)); // 64

// parameter가 없는 화살표 함수
const dice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(dice()); // 1 ~ 6

// 암시적 반환 -> 반환할 값이 1개만 있는 경우 사용 가능
const multiply = (x, y) => x * y;
console.log(multiply(3, 3)); // 9

const rollDice = () => Math.floor(Math.random() * 10) + 1;
console.log(rollDice()); //
