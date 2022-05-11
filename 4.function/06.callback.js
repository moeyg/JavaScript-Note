// 일급 함수(First-class Object)
// : 함수가 일반 객체처럼 모든 연산이 가능한 것!
// 1. 함수를 함수의 매개변수로 전달이 가능
// 2. 함수를 함수의 반환값으로 사용 가능
// 3. 함수를 할당 명령문으로 사용 가능
// 4. 함수를 동일 비교 대상으로 사용 가능

// 고차함수 (Higher-order Function)
// : 인자를 함수로 받거나 (콜백함수) 함수를 반환하는 고차함수

// 콜백함수 (Callback Function)
// = 외부로부터 주어지는 함수를 콜백함수라고 한다
// 전달 당시에 바로 호출하는 것이 아니라 함수의 레퍼런스만 외부로부터 전달받아 나중에 호출
// 예를 들어, 특정한 일을 수행하는 action 함수를 전달받아 수행

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 2, add);
calculator(3, 4, multiply);

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라, 함수를 가리키고 있는 함수의 참조값이 전달
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨
// 어떤 것을 전달하느냐에 따라서 action이 달라짐

function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  result = action(a, b);
  console.log(result);
  return result;
}

calculator(-1, 2, add); // if문에 걸려서 콜백 ❌
calculator(5, -3, multiply); // if문에 걸려서 콜백 ❌
