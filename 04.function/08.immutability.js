// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 ❌❌
// 상태 변경이 필요한 경우에는, 새로운 상태(오브젝트, 값)를 만들어서 반환해야 함 ✨
// 원시값 -> 값에 의한 복사
// 객체값 -> 참조(메모리 주소)에 의한 복사

// 잘못된 예제 1 ❌
function display(num) {
  num = 5; // 지역 변수로 내부에서 변경하는 것은 ❌❌
  console.log(num); // 5
}

const value = 4; // 전역 변수
display(value);
console.log(value); // 4

// 잘못된 예제 2 ❌
function displayObj(obj) {
  // -> 메모리 주소를 전달 받음
  obj.name = 'Lee'; // -> 따라서 실제 오브젝트의 값을 변경
  // ❌❌❌❌❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 절대 변경하면 안 됨 ❌❌
  console.log(obj); // Lee
}
const kim = { name: 'Kim' }; // -> 메모리 주소 전달
displayObj(kim);
console.log(kim); // Lee

// 만약 부득이하게 내부의 값을 변경해야 한다면,
// 함수의 이름부터 변경해야 한다는 느낌을 주도록 짓기!!
function changeName(obj) {
  return { ...obj, name: 'Park' }; // 반환할 때는 새로운 오브젝트를 만들기!!
}
