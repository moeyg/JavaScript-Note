// setTimeout
// 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것
// setTimeout(function, ms(timer), func_argument)

console.log('1️⃣ 첫번째로 출력됩니다.');

setTimeout(() => {
  console.log('3️⃣ 2초 뒤 ... 세번째로 출력됩니다.');
}, 2000);

console.log('2️⃣ 두번째로 출력됩니다.');

// 1️⃣ 첫번째로 출력됩니다.
// 2️⃣ 두번째로 출력됩니다.
// 3️⃣ 2초 뒤 ... 세번째로 출력됩니다.
