// reduce
// 배열을 점차 줄여 나가며 마지막엔 하나의 값만 남게 한다.
// array.reduce((accumulater, currentValue) => {})
// accumulater : 총 합계로 배열이 순회하면서 return 값이 저장된다 -> 줄여나갈 대상
// currentValue : 배열의 개별 요소

let prices = [100.99, 88.8, 20.0, 1.99, 3.5, 10.99, 4.59, 10.5];

let totalPrice = prices.reduce((total, price) => total + price);
console.log(totalPrice); // 241.36

let minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});
console.log(minPrice); // 1.99

// accumulater에 함수를 넣을 수 있고, 초기값을 설정할 수 있다.
let numbers = [2, 4, 6, 8];

let addNum = numbers.reduce((add, num) => add + num);
console.log(addNum); // 20

let initalNum = numbers.reduce((add, num) => add + num, 100);
console.log(initalNum); // 120

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

let highScoreMovie = movies.reduce((highScoreMovie, movie) => {
  if (movie.score > highScoreMovie.score) {
    return movie;
  }
  return highScoreMovie;
});
console.log(highScoreMovie); // { title: 'Iron Man', score: 9.5, yearOfRelease: 2008 }
console.log(highScoreMovie.title); // Iron Man
