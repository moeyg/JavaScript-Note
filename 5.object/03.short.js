const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y }; key와 value의 이름이 같다면 축약할 수 있다.
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
// 값을 전달받아 오브젝트를 만들 떼, return { name: name, age: age }; 를 축약하여 작성할 수 있다.
