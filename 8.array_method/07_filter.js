// Filter
// 배열에서 필터링을 하거나 부분 집합을 모아 새 배열을 만듦
// 콜백을 전달해서 콜백이 boolean값을 반환해야 한다.
// 콜백이 한 요소에 대해 true면 그 요소는 필터링된 배열에 추가된다.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddNumber = numbers.filter((num) => {
//   return num % 2 === 1;
// });
let oddNumber = numbers.filter((num) => num % 2 === 1);
console.log(oddNumber); // [1, 3, 5, 7, 9]

// let evenNumber = numbers.filter((num) => {
//   return num % 2 === 0;
// });
let evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber); // [2, 4, 6, 8, 10]

// 예시
let movies = [
  {
    title: 'Spider Man',
    score: 8.5,
    yearOfRelease: 2002,
  },

  {
    title: 'Iron Man',
    score: 9.5,
    yearOfRelease: 2008,
  },

  {
    title: 'Thor',
    score: 9.0,
    yearOfRelease: 2017,
  },

  {
    title: 'Black Widow',
    score: 8.5,
    yearOfRelease: 2021,
  },
];

let goodMovies = movies.filter((movie) => movie.score >= 9);
console.log(goodMovies);
// [
//     { title: 'Iron Man', score: 9.5, yearOfRelease: 2008 },
//     { title: 'Thor', score: 9, yearOfRelease: 2017 }
// ]

let badMovies = movies.filter((movie) => movie.score < 9);
console.log(badMovies);
// [
//     { title: 'Spider Man', score: 8.5, yearOfRelease: 2002 },
//     { title: 'Black Widow', score: 8.5, yearOfRelease: 2021 }
// ]
let recentMovies = movies.filter((movie) => movie.yearOfRelease > 2020);
console.log(recentMovies);
// [ { title: 'Black Widow', score: 8.5, yearOfRelease: 2021 } ]

// filter + map
let goodMoviesTitle = movies
  .filter((movie) => movie.score >= 9)
  .map((movie) => movie.title);

console.log(goodMoviesTitle); // [ 'Iron Man', 'Thor' ]

// 문제
function validUserNames(usernames) {
  let usernamesFilter = usernames.filter(function (name) {
    return name.length < 10;
  });
  return usernamesFilter;
}

// arrow function
function validUserNames(usernames) {
  return usernames.filter((name) => name.length < 10);
}
