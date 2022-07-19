// setInterval
// 함수는 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
// setInterval(function, ms(timer), func_argument)

// 2초의 간격을 두고 1~6의 랜덤 숫자를 출력한다.
setInterval(() => {
  console.log(Math.floor(Math.random() * 6) + 1);
}, 2000);

// id 넣어 clearInterval(id) 로 중단시킬 수 있다.
const id = setInterval(() => {
  console.log(Math.floor(Math.random() * 6) + 1);
}, 2000);

// clearInterval(id) -> 터미널창에 입력해 중단
