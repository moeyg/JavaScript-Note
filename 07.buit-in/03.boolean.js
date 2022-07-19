// Boolean
const isTrue = new Boolean(true); // 객체는 메모리를 더 많이 차지하기 때문에 굳이 사용은 지양한다.
console.log(isTrue.valueOf());

// Falshy 값 : 0, -0, null, NaN, undefined, ''
// Truthy 값 : 1, -1, '0', 'false', [], {}
