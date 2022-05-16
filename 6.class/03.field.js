// 접근 제어자 -> 캡슐화
// : 한 번 만들고 외부에서 변경이 불가능하게 만들고 싶을 때 사용
// private(#), public(기본적으로 모두 접근 가능), protected

class Fruit {
  // #을 붙이면 내부에서는 사용이 가능하지만, 외부에서 접근이 불가능하게 만듦
  #name;
  #emoji;
  // 인스턴스를 만들 때 초기화가 되어야 한다면, 생성자 밖에서 선언 가능
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('사과', '🍎');
console.log(apple); // Fruit {}

// apple.#name = '오렌지';
// console.log(apple); // #field = 비공개 필드(#)인 이름은 클래스 안에서만 선언이 가능(접근이 가능), #field 내의 정보가 출력 ❌
// apple.display(); // 호출 불가능 ❌
