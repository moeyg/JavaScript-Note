// 고차함수 (Higher Order Function)
// 다른 함수와 함께 작동하거나, 다른 함수에서 작동하는 함수
// 함수를 인자(argument)로 받을 수 있고, 함수의 형태로 리턴할 수 있는 함수

// 1. 함수를 인자로 받는 함수
function rollTwice(func) {
  func();
  func();
}
// 인자로 줄 함수
function dice() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}
// 함수 호출
rollTwice(dice);

/////////////////////////////////////////////////////////

// 2-1. 함수의 형태로 리턴
const rand = function makeRandomNumber() {
  const number = Math.random();
  if (number > 0.5) {
    return function () {
      console.log('number is greater than 0.5');
    };
  } else {
    return function () {
      console.log('number is less than or equal to 0.5');
    };
  }
};
// 함수 호출
rand();

// 2-2. 함수의 형태로 리턴
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isAdult = makeBetweenFunc(20, 65);
console.log(isAdult(30));
