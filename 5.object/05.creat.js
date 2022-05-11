// const apple = {
//   name: '사과',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: '오렌지',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 생성자 함수 사용
// 첫 글자를 대문자로 작성
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; 생략 가능
}

const apple = new Fruit('사과', '🍎');
const orange = new Fruit('오렌지', '🍊');

console.log(apple); // Fruit { name: '사과', emoji: '🍎', display: [Function (anonymous)] }
console.log(orange); // Fruit { name: '오렌지', emoji: '🍊', display: [Function (anonymous)] }

console.log(apple.name); // 사과
console.log(apple.emoji); // 🍎
apple.display(); // 사과: 🍎
