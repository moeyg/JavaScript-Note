// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
  // return a + b;
}

const result = add(1, 2);
console.log(result); // undefined

// 예제 : 조건이 맞지 않는 경우 함수 도입 부분에서 함수를 일찍이 종료함!!
// return을 함수 중간에 하게 되면 함수가 종료됨
function printNumber(num) {
  if (num < 0) {
    return; // = return undefined
  }
  console.log(num);
}

printNumber(1); // 1
printNumber(-1); // 출력 ❌
