// 조건문 (Conditional Statement)
// switch
// 정해진 범위 안의 값에 대해 특정한 일을 해야하는 경우

// if 조건문
// 0:월요일, 1:화요일, ... 6:일요일
let day = 6;
let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}
console.log(dayName); // 일요일

// switch 조건문
day = 3;
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('❌');
}
console.log(dayName); // 목요일
// 만약 day가 0~6 사이의 값이 아니라면, default 출력
// console.log(dayName); // ❌

let condition = 'okay'; // okay, good -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '👍';
    break;
  case 'bad':
    text = '👎';
    break;
}
console.log(text); // 👍
