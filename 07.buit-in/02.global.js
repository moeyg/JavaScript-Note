console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// eval : ('') 안의 (문자열 형태의) 값을 JS 코드로 평가해서 출력
eval('const num = 2; console.log(num)'); // 2

console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

// parseFloat : 문자열 내용이 소수라면, 숫자로 변환
console.log(parseFloat('12.43')); // 12.43
// parseInt : 문자열 내용이 숫자라면, 정수로 변환
console.log(parseInt('12.43')); // 12

// URL (URI, Uniform Resource Identifier 하위 개념)
// URI : 어떤 리소스를 나타낼 수 있는 고유한 주소나 아이디
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야 한다
const URL = 'https://파도.com'; // -> 인코딩 해야함
const encoded = encodeURI(URL); // encodeURI를 사용하면, 아스키 문자로 인코딩
console.log(encoded); // https://%ED%8C%8C%EB%8F%84.com

const decoded = decodeURI(encoded); // 인코딩 된 값을 다시 디코드
console.log(decoded); // https://파도.com

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '파도.com';
const partEncoded = encodeURIComponent(part); // 부분적으로 인코딩
console.log(partEncoded); // %ED%8C%8C%EB%8F%84.com
