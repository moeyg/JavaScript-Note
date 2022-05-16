const textObj = new String('Hello World!');
const text = 'Hello World!';

console.log(textObj); // [String: 'Hello World!']
console.log(text); // Hello World!

console.log(text[0]); // H
console.log(text.charAt(0)); // H
console.log(text[7]); // o
console.log(text.charAt(7)); // o

console.log(text.length); // 12 -> 문자열 길이 반환

console.log(text.indexOf('l')); // 2 -> 문자가 들어있는 첫 인덱스 위치 반환
console.log(text.lastIndexOf('l')); // 9 -> 문자가 들어있는 마지막 인덱스 위치 반환

console.log(text.includes('x')); // false -> 문자열에 문자가 포함되어 있는지 확인
console.log(text.includes('hELLO')); // false -> 대소문자 구분
console.log(text.includes('Hello')); // true

console.log(text.startsWith('H')); // true -> 문자열의 시작 문자 확인
console.log(text.startsWith('hE')); // false -> 대소문자 구분
console.log(text.endsWith('H')); // false -> 문자열의 끝 문자 확인
console.log(text.endsWith('!')); // true

console.log(text.toUpperCase()); // HELLO WORLD! -> 모두 대문자로 변환
console.log(text.toLowerCase()); // hello world! -> 모두 소문자로 변환

console.log(text.substring(0, 2)); // He -> 0 부터 2 이전 문자까지 가져옴
console.log(text.slice(2)); // llo World! -> 인덱스 앞에서 2까지 잘라내어 뒷부분 반환
console.log(text.slice(-2)); // d! -> 인덱스 뒤에서 2부터 잘라내어 반환

const space = '              space           ';
console.log(space.trim()); // space -> 공백을 제거하고 문자열만 반환

const longText = 'Hello World! How are you?';
console.log(longText.split(' ')); // [ 'Hello', 'World!', 'How', 'are', 'you?' ] -> ' ' 기준으로 끊어 배열로 반환
console.log(longText.split(' ', 2)); // [ 'Hello', 'World!' ] -> ' ' 기준으로 끊어 앞에 2개만 배열로 반환
