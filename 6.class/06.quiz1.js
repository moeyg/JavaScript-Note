// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  // 현재 값을 읽음
  get value() {
    return this.#value;
  }

  // 현재 값을 증가시킴
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment(); // 1
console.log('count', counter.value); // count 1 // 현재 값 확인
counter.increment(); // 2
console.log('count', counter.value); // count 2 // 현재 값 확인
