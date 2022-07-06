// for .. in : 객체에서 반복문 사용

const months = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

// Object 의 key 출력
for (let month in months) {
  console.log(month);
}
// Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec

// Object 의 value 출력
for (month in months) {
  console.log(`${month} : ${months[month]}`);
}
// Jan : 1 Feb : 2 Mar : 3 Apr : 4 May : 5 Jun : 6 Jul : 7 Aug : 8 Sep : 9 Oct : 10 Nov : 11 Dec : 12

// 배열로 key 만들기 -> for .. of 로 접근
let monthsKeys = Object.keys(months);
console.log(monthsKeys);
// [
//   'Jan', 'Feb', 'Mar',
//   'Apr', 'May', 'Jun',
//   'Jul', 'Aug', 'Sep',
//   'Oct', 'Nov', 'Dec'
// ]

// 배열로 value 만들기 -> for .. of 로 접근
let monthsValue = Object.values(months);
console.log(monthsValue);
// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
// ]

// 배열로 key, value 만들기
let monthsEntries = Object.entries(months);
console.log(monthsEntries);
// [
//     [ 'Jan', 1 ],  [ 'Feb', 2 ],
//     [ 'Mar', 3 ],  [ 'Apr', 4 ],
//     [ 'May', 5 ],  [ 'Jun', 6 ],
//     [ 'Jul', 7 ],  [ 'Aug', 8 ],
//     [ 'Sep', 9 ],  [ 'Oct', 10 ],
//     [ 'Nov', 11 ], [ 'Dec', 12 ]
// ]
