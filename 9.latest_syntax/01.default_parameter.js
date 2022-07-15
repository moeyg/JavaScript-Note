// 기본 매개 변수 (Default Parameter)

function greet(name, msg = 'Hello') {
  console.log(`${msg}, ${name}`);
}

greet('Kim'); // Hello, Kim
greet('Lee', 'Hi'); // Hi, Lee
