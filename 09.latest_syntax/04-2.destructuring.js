// 구조 분해 할당 (Destructuring)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 한다.
// 값을 해체하고 꺼내고 선정하는 방식이다.

// 객체 구조 분해 -> 순서에 기반 ❌
const spiderMan = {
  email: 'peterParker@gmail.com',
  firstName: 'Peter',
  lastName: 'Parker',
  born: 1962,
  birthday: 0605,
  job: 'Spider-Man',
};

// 객체를 분해하여 개별 변수를 만들 수 있다.
const { job, firstName, lastName } = spiderMan;
console.log(job); // Spider-Man
console.log(firstName); // Peter
console.log(lastName); // Parker

// 변수의 이름을 지정할 수도 있다.
const { born: birthYear } = spiderMan;
// console.log(born); // ReferenceError -> born으로 변수를 읽을 수 없다.
console.log(birthYear); // 1962

// 만약 값이 없을 경우에는 기본값을 지정할 수 있다.
const { birthday, city = 'NewYork' } = spiderMan;
console.log(city); // NewYork

// 다른 객체
const captainAmerica = {
  email: 'SteveRogers@gmail.com',
  firstName: 'Steve',
  lastName: 'Rogers',
  born: 1920,
  birthday: 0704,
  cityOfOrigin: 'Brooklyn',
  job: 'Captain America',
};

// 만약 값이 있다면, 기본값을 지정해도 값이 변하지 않는다.
const { cityOfOrigin = 'Honolulu' } = captainAmerica;
console.log(cityOfOrigin); // Brooklyn
