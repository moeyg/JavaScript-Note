// 객체를 손쉽게 만들 수 있는 템플릿 : 생성자 함수(고전적), 클래스 ✨

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; 생략 가능
}

// 클래스 (Class)
// 객체를 생성할 수 있는 템플릿
// 객체지향 프로그래밍
// 클래스를 이용해서 만들어진 객체를 인스턴스(Instance) 라고 한다.

// 클래스 문법
// class ValeName {
//   constructor(key) {
//     this.key = value;
//   }
//   functionName() {};
// }

class FruitClass {
  // 생성자(constructor)
  // : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 프로토타입 메서드
  // class에 필요한 멤버 함수는 생성자 밖에서 함수를 정의하고 this.를 제외하고 바로 함수 이름만 작성한다.
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple과 orange는 FruitClass라는 클래스의 인스턴스(객체)이다.
const apple = new FruitClass('사과', '🍎');
const orange = new FruitClass('오렌지', '🍊');

console.log(apple); // FruitClass { display: [Function: display], name: '사과', emoji: '🍎' }
console.log(orange); // FruitClass { display: [Function: display], name: '오렌지', emoji: '🍊' }

console.log(apple.name); // 사과
console.log(apple.emoji); // 🍎
apple.display(); // 사과: 🍎

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'Kim' };
