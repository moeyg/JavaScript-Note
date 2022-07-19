// 동등 비교 관계 연산자 (Equlity Operators)
// == 값이 같음
// != 값이 다름
// === 깂과 타입이 둘 다 같음
// !== 값과 타입이 둘 다 다름

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true // 암묵적 변환
console.log(2 === '2'); // false

console.log(true == 1); // true
console.log(true === 1); // false

console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

// object 비교

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false -> 다른 메모리 주소를 가지고 있기 때문 (개별적인 object)
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true -> 동일한 'js'를 가지고 있기 때문
console.log(obj1.name === obj2.name); // true

const obj3 = obj2;

console.log(obj2 == obj3); // true -> 같은 메모리 주소를 가지고 있기 때문
console.log(obj2 === obj3); // true
