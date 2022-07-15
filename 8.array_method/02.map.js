// map
// 기존 배열을 변경하지 않고, 새로운 배열을 만들어 변수에 저장한다.
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
// let variable = array.map(function () {})

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let double = numbers.map(function (number) {
  return number * 2;
});

// console.log(double); // [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]

// 예시
let movies = [
  {
    title: 'Spider Man',
    score: 8.5,
  },

  {
    title: 'Iron Man',
    score: 9.5,
  },

  {
    title: 'Thor',
    score: 9,
  },

  {
    title: 'Black Widow',
    score: 8.5,
  },
];

let movieTitle = movies.map(function (movie) {
  return movie.title.toUpperCase();
});

let movieScore = movies.map(function (movie) {
  return movie.score;
});

console.log(movieTitle); // [ 'SPIDER MAN', 'IRON MAN', 'THOR', 'BLACK WIDOW' ]
console.log(movieScore); // [ 8.5, 9.5, 9, 8.5 ]
