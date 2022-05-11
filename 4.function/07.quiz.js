// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행
// function iterate(max, action)

function iterate(max, action) {
  let i = 0;
  while (i <= max) {
    action(i);
    i++;
  }
}

// 숫자 5를 전달하고, 순회하는 숫자를 다 출력하고 싶음
function number(num) {
  console.log(num);
}
iterate(5, number);

// 숫자 5를 전달하고, 순회하는 숫자의 2배 값을 출력하고 싶음
function double(num) {
  console.log(num * 2);
}
iterate(5, double);

// 화살표 함수를 사용해 표현할 수도 있다.
// iterate(5, (num) => console.log(num));
// iterate(5, (double) => console.log(double));

// 콜백함수 예제
setTimeout(() => {
  console.log('3초가 지났습니다.');
}, 3000);
