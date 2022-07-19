// 객체 (Object)
// Object literal {key: value}
// new Object()
// Object.creat();

// Object literal {key: value}
// key - 문자, 숫자, 문자열, 심볼
// value -> 원시값, 객체 (함수)
let apple = {
  name: '사과',
  'hello-bye': '🤚',
  0: 1,
  ['bye-hello']: '👋',
};
// key = name, 'hello-bye', 0, ['bye-hello']
// value = '사과', '🤚', 1, '👋'

// value(데이터)에 접근하기 위해서는
// varName.key -> value
console.log(apple.name); // 사과 // 마침표 표기법 (dot notation)
console.log(apple['bye-hello']); // 👋 // 대괄호 표기법 (bracket notation)
console.log(apple['name']); // 사과

// value(속성) 추가
apple.display = '🍎';
console.log(apple.display); // 🍎
console.log(apple['display']); // 🍎

// value(속성) 삭제
delete apple.display;
console.log(apple); // { '0': 1, name: '사과', 'hello-bye': '🤚', 'bye-hello': '👋' }
