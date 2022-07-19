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

// .map

// 기존 방법
const movieChart = movies.map(function (movie) {
  return `${movie.title} (⭐️ ${movie.score} / 10)`;
});

// 화살표 함수 방법
const movieList = movies.map(
  (movie) => `${movie.title} (⭐️ ${movie.score} / 10)`
);

console.log(movieList);

// [
//     'Spider Man (⭐️ 8.5 / 10)',
//     'Iron Man (⭐️ 9.5 / 10)',
//     'Thor (⭐️ 9 / 10)',
//     'Black Widow (⭐️ 8.5 / 10)'
// ]

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// .forEach

// 기존 방법
movies.forEach(function (movie) {
  return `${movie.title} (🔥 ${movie.score} / 10)`;
});

// 화살표 함수 방법
movies.forEach((movie) =>
  console.log(`${movie.title} (🔥 ${movie.score} / 10)`)
);

// Spider Man (🔥 8.5 / 10)
// Iron Man (🔥 9.5 / 10)
// Thor (🔥 9 / 10)
// Black Widow (🔥 8.5 / 10)
