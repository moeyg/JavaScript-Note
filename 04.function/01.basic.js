// 함수 (Function)

// 사용 예제 1
function add(num1, num2) {
  return num1 + num2;
}

const result = add(10, 20);
console.log(result);

// 사용 예제 2
// let lastName = 'Kim';
// let firstName = 'Kimmm';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName); // Kim Kimmm
let firstName;
let lastName;

function fullName(firstName, lastName) {
  return `${firstName} ${lastName} ✅`;
}

lastName1 = 'Kim';
firstName1 = 'Kimmm';
console.log(fullName(lastName1, firstName1)); // Kim Kimmm
// 한 번에 출력하기
console.log(fullName('Kimmm', 'Kim')); // Kim Kimmm

lastName2 = 'Lee';
firstName2 = 'Leeee';
console.log(fullName(lastName2, firstName2)); // Lee Leeee
// 한 번에 출력하기
console.log(fullName('Leeee', 'Lee')); // Lee Leeee
