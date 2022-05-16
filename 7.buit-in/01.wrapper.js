// 래퍼 객체 (Wrapper Object)
// 원시 값을 필요에 따라서 관련된 빌트인 객체로 변환한다.

const number = 123; // number 원시 타입
console.log(number.toString()); // number 원시 타입을 감싸고 있는 Number 라는 클래스인 객체로 감싸지고, toString 함수 사용 가능
console.log(number); // number 원시 타입

const text = 'text';
console.log(text);
text.length; // String 이라는 클래스 객체로 만들어짐
text.trim(); // trim 이라는 함수 사용 가능
