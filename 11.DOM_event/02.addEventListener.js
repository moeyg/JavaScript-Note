// 콜백 함수를 넣어 실행하는 방법

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
  console.log('click btn1 🥝');
});

// 함수를 정의하고 인자에 함수를 넣는 방법
function clickBtn2() {
  console.log('click btn2 🍓');
}

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', clickBtn2);

// addEventListener를 사용하는 이유
// 함수를 여러번 호출할 수 있다.
function hello() {
  console.log('HELLO');
}
function world() {
  console.log('WORLD');
}

const greet = document.querySelector('#greet');
greet.addEventListener('click', hello);
greet.addEventListener('click', world);
