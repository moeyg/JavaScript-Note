// every
// 콜백을 전달해서 콜백이 boolean값을 반환해야 한다. (불리언 메서드)
// 함수가 true 값을 반환하면 호출된 전체 every 함수가 true 반환
// 각각의 요소가 "모두" true면 -> true 반환 // "최소 하나라도" false면 -> false 반환

// 모든 점수가 75점 이상이면
let examScore = [80, 90, 100, 77, 76, 89, 88, 97];
let examPass = examScore.every((score) => score >= 75);

console.log(examPass); // true

// 하나라도 75점 이상이 아니면
examScore = [80, 90, 100, 30, 76, 89, 88, 97];
examPass = examScore.every((score) => score >= 75);

console.log(examPass); // false

// some
// 콜백을 전달해서 콜백이 boolean값을 반환해야 한다. (불리언 메서드)
// 각각의 요소가 "최소 하나라도" true면 -> true 반환
examScore = [80, 90, 100, 30, 76, 89, 88, 97];
examPass = examScore.some((score) => score >= 75);

console.log(examPass); // true

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

// 2010년도 이후의 영화가 "하나라도" 존재하는가?
let oldMovies = movies.some((movie) => movie.yearOfRelease < 2010);
console.log(oldMovies); // true

// 모두 2020년 이후의 최신 영화인가?
let newMovies = movies.every((movie) => movie.yearOfRelease > 2020);
console.log(newMovies); // false

// 모두 평점이 8.0 이상의 영화인가?
let highScoreMovies = movies.every((movie) => movie.score > 8.0);
console.log(highScoreMovies); // true

// 배열의 모든 요소가 짝수이면 true를 반환하는 함수
function evenNumber(arr) {
  return arr.every((num) => num % 2 === 0);
}
