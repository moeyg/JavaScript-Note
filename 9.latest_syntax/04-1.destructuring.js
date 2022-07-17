// 구조 분해 할당 (Destructuring)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 한다.
// 값을 해체하고 꺼내고 선정하는 방식이다.

// 배열 구조 분해 -> 순서에 기반한다.
const students = ['Linda', 'Tim', 'Tommy', 'Scott', 'James', 'Chris'];
const [gold, silver, bronze, ...studentsElse] = students;

console.log(gold); // Linda
console.log(silver); // Tim
console.log(bronze); // Tommy
console.log(studentsElse); // [ 'Scott', 'James', 'Chris' ] -> 배열로 값을 준다.
// 배열 메서드를 사용할 수 있다.
console.log(studentsElse.pop()); // Chris
console.log(studentsElse.map((student) => `${student} 👍`)); // [ 'Scott 👍', 'James 👍' ]
