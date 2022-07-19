// try / catch
// 에러를 잡기 위해 사용
// 에러가 발생시 catch 실행하여 파일이 실행 중단되는 것을 막음

// try에서 실행한 구문이 요류가 날 경우 -> catch 에서 실행
try {
  hello.toUpperCase();
} catch {
  // catch 실행
  console.log('ERROR!!');
}
// 에러가 발셍헤도 실행
console.log('Hello World');

// 예시
function str(msg) {
  try {
    let message = msg.toUpperCase().repeat(3);
    console.log(message);
  } catch (e) {
    console.log('문자를 넣으세요.');
  }
}

str('Hello 👍 '); // HELLO 👍 HELLO 👍 HELLO 👍
str(1); // 문자를 넣으세요.
str(true); // 문자를 넣으세요.
str(NaN); // 문자를 넣으세요.
str(undefined); // 문자를 넣으세요.
