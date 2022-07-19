// 객체(Object)
// let variable = {key: value}
// {key: value}를 object라고 한다.
// value는 원시 타입과 객체 타입이 들어갈 수 있다.
// 객체 타입({key: value})은 Heap이라는 메모리 공간에 할당되고, 할당된 공간의 시작하는 메모리 주소(참조값)를 변수가 가리킨다.
// cf) let variable = value의 원시 타입은 변수(variable)가 값의 메모리 주소(value의 주소)를 가리킨다.
// variable.key -> variable이 가리키는 메모리 주소를 찾아 key의 값을 찾는다.

let apple = {
  name: '사과',
  color: 'red',
  display: '🍎',
};
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊',
};
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);
