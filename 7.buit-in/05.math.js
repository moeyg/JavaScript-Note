// Math
// static properties, method

console.log(Math.E); // 2.718281828459045 -> 오일러의 상수, 자연 로그의 밑
console.log(Math.PI); // 3.141592653589793 -> 원주율 PI값

// static method
console.log(Math.abs(-10)); // 10 -> 절댓값
console.log(Math.ceil(1.1)); // 2 -> 소수점 이하를 올림
console.log(Math.floor(1.1)); // 1 -> 소수점 이하를 내림
console.log(Math.round(1.5)); // 2 -> 반올림
console.log(Math.trunc(10.810101)); // 10 -> 정수만 반환

// 최대, 최소값 찾기
console.log(Math.max(1, 0, 8, 7, 3, 10, 99)); // 99 -> 지정된 숫자 중 가장 큰 값을 반환
console.log(Math.min(1, 0, 8, 7, 3, 10, 99)); // 0 -> 지정된 숫자 중 가장 작은 값을 반환

// 거듭제곱
console.log(3 ** 2); // 9
console.log(Math.pow(3, 2)); // 9

// 제곱근
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(100)); // 10

// 0 ~ 1 사이의 숫자 중 랜덤한 값을 반환
console.log(Math.random()); // 0.xxxxxx
// 0 ~ 10 사이의 숫자 중 랜덤한 정수값을 반환
console.log(Math.round(Math.random() * 10 + 1));
