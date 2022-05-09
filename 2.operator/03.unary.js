// 단항 연산자 (Unary Operators)
// + 양
// - 음
// ! 부정 연산자

let a = 5;
a = -a; // -1 * a(5)
console.log(a); // -5

a = -a; // -1 * a(-5)
console.log(a); // 5

a = +a; // +1 * a(5)
console.log(a); // 5

a = -a; // -1 * a(5)
a = +a; // +1 * a(-5)
console.log(a); // -5

let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true

console.clear();
// + 연산자를 사용해 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는 지 확인할 수 있음
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

console.log(!1); // false -> 한 번 부정하면(!) 부정연산자가 되고,
console.log(!!1); // true -> 불리언이 아닌 데이터 타입을 불리언으로 변환하고 싶다면 두 번 부정하면(!!) 된다.
