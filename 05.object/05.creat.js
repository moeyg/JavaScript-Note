// const apple = {
//   name: 'μ¬κ³Ό',
//   display: function () {
//     console.log(`${this.name}: π`);
//   },
// };

// const orange = {
//   name: 'μ€λ μ§',
//   display: function () {
//     console.log(`${this.name}: π`);
//   },
// };

// μμ±μ ν¨μ μ¬μ©
// μ²« κΈμλ₯Ό λλ¬Έμλ‘ μμ±
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; μλ΅ κ°λ₯
}

const apple = new Fruit('μ¬κ³Ό', 'π');
const orange = new Fruit('μ€λ μ§', 'π');

console.log(apple); // Fruit { name: 'μ¬κ³Ό', emoji: 'π', display: [Function (anonymous)] }
console.log(orange); // Fruit { name: 'μ€λ μ§', emoji: 'π', display: [Function (anonymous)] }

console.log(apple.name); // μ¬κ³Ό
console.log(apple.emoji); // π
apple.display(); // μ¬κ³Ό: π
