// 문자열 데이터 타입
// let variableName = 'string';

let string1 = 'Hello World!';
console.log(string1); // Hello World!

let string2 = `Hello World!`;
console.log(string2); // Hello World!

let string3 = '"Hello World!"';
console.log(string3); // "Hello World!"

// 특수문자 출력하는 법!
// \n : 개행
// \t : 탭
// \\ : 백슬래쉬
// \u : 유니코드
let specialCharacters = 'Hello\nWorld!\t\tMy name \\is \u0917';
console.log(specialCharacters);
// Hello
// World!       My name \isग

// 템플릿 리터럴 (Template Literal)
// 여러 가지 문자열과 변수를 합하고 싶을 때, + (문자열 연결 연산자) 보다 `` (백틱)을 사용하여 연결하는 방법
let id = 'World';

// + (문자열 연결 연산자) 사용 방법
let greetings1 = "'Hello! " + id + "👋\n Have a Good Day!'";
console.log(greetings1);

// 템플릿 리터럴 사용 방법 ✨
let greetings2 = `'Hello! ${id}👋
 Have a Good Day!'`;
console.log(greetings2);
