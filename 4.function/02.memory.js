// 함수 이름 자체는, 함수를 가리키고 있는 메모리 주소를 복사해서 할당하는 것과 같다.

function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}

const sum = add;

console.log(sum(1, 2)); // 1 2 3
console.log(add(1, 2)); // 1 2 3 

// 아무 값도 전달하지 않으면
// a와 b는 undefined이고, result는 NaN이 된다.
console.log(add()); // undefined undefined NaN
