// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다!');
//   }
//   play() {
//     console.log('놀자!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다!');
  }
}

// 공통된 개념이 있다면 extends 상속을 사용해 상속 관계를 지정해 전달받을 수 있다.
class Tiger extends Animal {}

const tiger = new Tiger('Yellow');
console.log(tiger); // Tiger { color: 'Yellow' }
tiger.sleep(); // 잔다!
tiger.eat(); // 먹자!

// 상속을 받아 공통적인 것을 상속받고 새로운 함수를 추가할 수 있다.
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // super : 상속 하고 있는 부모 클래스
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자!');
  }
  // 오버라이딩(overriding) : 자식 클래스에서 부모 클래스의 함수를 덮어 씌움
  eat() {
    super.eat();
    console.log('🐶');
  }
}

const dog = new Dog('Brown', 'Kim');
console.log(dog); // Dog { color: 'Brown', ownerName: 'Kim' }
dog.sleep(); // 잔다!
dog.eat(); // 먹자! 🐶
dog.play(); // 놀자!
