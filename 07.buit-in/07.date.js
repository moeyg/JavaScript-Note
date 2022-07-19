// UTC 기준 (협정 세계시, 1070년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 2022-05-16T01:11:46.651Z -> 현재 시간 출력
console.log(new Date('Jun 6, 2022')); // 2022-06-05T15:00:00.000Z -> 지정한 날짜 출력
console.log(new Date('2022-05-05T12:12:12')); // 2022-05-05T03:12:12.000Z -> 지정한 시간 출력

console.log(Date.now()); // 1652663506655 -> 현재 시간을 밀리초 단위로 표현
console.log(Date.parse('2022-12-12T12:12:12')); // 1670814732000 -> 밀리초 단위로 표현 가능

const now = new Date();
now.setFullYear(2023); // 2023년도로 변환
now.setMonth(0); // 0: 1; -> 1월로 변환
now.setDate(1); // 1일로 변환

console.log(now.getFullYear()); // 2023
console.log(now.getDate()); // 1
console.log(now.getDay()); // 0: 1일
console.log(now.getTime()); // 1672536647722
console.log(now); // 2023-01-01T01:16:38.041Z -> 2023년 1월 1일로 출력되는 것을 확인 가능

// 문자열로 표현
console.log(now.toString()); // Sun Jan 01 2023 10:51:44 GMT+0900 (대한민국 표준시)
console.log(now.toDateString()); // Sun Jan 01 2023
console.log(now.toTimeString()); // 10:51:44 GMT+0900 (대한민국 표준시)
console.log(now.toISOString()); // 2023-01-01T01:51:44.372Z
console.log(now.toLocaleDateString('en-US')); // 1/1/2023
console.log(now.toLocaleDateString('ko-KR')); // 2023. 1. 1.
