// 메서드 (Method)
// key: value 에서 value를 함수로 사용할 수 있다.

// this.keyName : 자기 자신의 속성에 접근하고 싶을 때는 this 사용
const apple = {
  name: '사과',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display(); // 사과: 🍎

const myMath = {
  PI: 3.14,
  add(num1, num2) {
    console.log(num1 + num2);
  },
  square(num) {
    console.log(num * num);
  },
  cube(num) {
    console.log(num ** 3);
  },
};

console.log(myMath.PI); // 3.14
myMath.add(2, 5); // 7
myMath.square(7); // 49
myMath.cube(8); // 512
