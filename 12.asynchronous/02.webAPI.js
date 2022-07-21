// Web API
// 브라우저에는 Web API가 있다.
// 일반적으로 시간이 걸리는 일들을 JavaScript에서 호출하여 브라우저로 전달하는 방법이다. -> 브라우저에게 대신 처리하도록 하는 것
// Web API 함수는 setTimeout이나 request 등이 있다.
// 동작하는 방식은 JavaScript의 Call Stack이 Web API 함수를 인식하고 브라우저에 전달하는 것이다.
// 브라우저에서는 받은 함수를 처리하고 Callback queue로 보내고 다시 Call Stack에 추가한다.
// JavaScript는 처리된 함수를 이어받아 적절한 코드를 실행한다.

console.log('Sending request to server');
setTimeout(() => {
  console.log('Save to server ...');
}, 3000);
console.log('Done');

// 출력 결과

// Sending request to server
// Done
// (... 3s)
// Save to server ...

// 실행 순서는 스레드에 작성된 순서대로 실행한다.
console.log('Sending request to server');
// setTimeout -> Web API 함수 -> 브라우저로 전달
setTimeout(() => {
  console.log('Save to server ...');
}, 3000);
console.log('Done');
