// static : 정적 프로퍼티, 메서드

class Fruit {
  static MAX_FRUITS = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드 : static 함수 사용
  static makeRandomFruit() {
    // 클래스 레벨의 메서드(= static이 붙은 메서드)에서는 템플릿이기 때문에 this를 참조할 수 없음!!!
    return new Fruit('watermelon', '🍉');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// Fruit.display(); // 인스턴스 레벨에 있는 함수는 호출이 불가능 ❌❌

const watermelon = Fruit.makeRandomFruit();
console.log(watermelon); //  Fruit { display: [Function: display], name: 'watermelon', emoji: '🍉' }
console.log(Fruit.MAX_FRUITS); // 4
console.log(Fruit); // [class Fruit] { MAX_FRUITS: 4 }

// Fruit { display: [Function: display], name: '사과', emoji: '🍎' } 를 봤을 때,
// static 함수로 만들어진 함수는 인스턴스 내에 들어 있지 않다.
// 즉, 인스턴스를 호출해도 static으로 작성된 부분(MAX_FRUITS, makeRandomFruit)은 출력되지 않는다.
// static 함수는 class 이름을 통해서만 접근이 가능하다.
const apple = new Fruit('사과', '🍎');
console.log(apple); // Fruit { display: [Function: display], name: '사과', emoji: '🍎' }

// static 예제
Math.pow();
Number.isFinite(1);
