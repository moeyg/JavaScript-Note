// forEach
// 주어진 함수를 배열 요소 각각에 대해 실행한다.
// 주로 array.forEach(function () {}) 형태로 내부에 함수가 들어간다.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (element) {
  if (element % 2 === 0) {
    console.log(element); // 2 4 6 8 10
  }
});

// // 하지만 for...of 를 더 자주 사용
for (let number of numbers) {
  if (number % 2 === 0) {
    console.log(number); // 2 4 6 8 10
  }
}

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
    score: 9.0,
  },

  {
    title: 'Black Widow',
    score: 8.5,
  },
];

// forEach
movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score} / 10`);
});

// for ... of
for (let article of movies) {
  console.log(`${article.title} - ${article.score} / 10`);
}

// 결과
// Spider Man - 8.5 / 10
// Iron Man - 9.5 / 10
// Thor - 9 / 10
// Black Widow - 8.5 / 10
