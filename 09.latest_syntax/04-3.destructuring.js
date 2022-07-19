// 구조 분해 할당 (Destructuring)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 한다.
// 값을 해체하고 꺼내고 선정하는 방식이다.

// 매개 변수 분해

const spiderMan = {
  email: 'peterParker@gmail.com',
  firstName: 'Peter',
  lastName: 'Parker',
  born: 1962,
  birthday: 0605,
  job: 'Spider-Man',
};

const captainAmerica = {
  email: 'SteveRogers@gmail.com',
  firstName: 'Steve',
  lastName: 'Rogers',
  born: 1920,
  birthday: 0704,
  cityOfOrigin: 'Brooklyn',
  job: 'Captain America',
};

// 이름만 출력하는 함수
// 마찬가지로 키값이 없으면 기본값을 줄 수 있다.
function fullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

fullName(spiderMan); // Peter Parker
fullName(captainAmerica); // Steve Rogers

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

// 배열 메서드를 사용할 때 매개변수를 구조 분해 하기

// 기존의 filter
let oldMovies = movies.filter((movie) => movie.yearOfRelease < 2010);
console.log(oldMovies);
// 구조 분해
oldMovies = movies.filter(({ yearOfRelease }) => yearOfRelease < 2010);
console.log(oldMovies);
// [
//     { title: 'Spider Man', score: 8.5, yearOfRelease: 2002 },
//     { title: 'Iron Man', score: 9.5, yearOfRelease: 2008 }
// ]

// 기존의 map
let movieList = movies.map((movie) => {
  return `${movie.title}(${movie.yearOfRelease} : ${movie.score})`;
});
console.log(movieList);
// 구조 분해
movieList = movies.map(({ title, yearOfRelease, score }) => {
  return `${title}(${yearOfRelease} : ${score})`;
});
console.log(movieList);
// [
//     'Spider Man(2002 : 8.5)',
//     'Iron Man(2008 : 9.5)',
//     'Thor(2017 : 9)',
//     'Black Widow(2021 : 8.5)'
// ]
