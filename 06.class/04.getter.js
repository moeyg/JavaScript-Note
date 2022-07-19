// 접근자 프로퍼티 (Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // fullName에 접근할 때, get 사용하면 함수지만 호출하는 시점에 데이터를 만들어서 리턴을 하는데, 이것을 속성에 한 부분으로 간주하여 속성 접근처럼 사용
  get fullName() {
    return `get -> ${this.lastName} ${this.firstName}`;
  }
  // fullName에 값을 할당하고 싶을 때, set 사용하면 함수에 새로운 인자를 할당할 수 있음
  set fullName(value) {
    console.log('set ->', value);
  }
}

const student = new Student('Kimmm', 'Kim');
// console.log(student.firstName);
// console.log(student.fullName()); // get을 사용하지 않았을 때 사용
console.log(student.fullName); // get -> Kim Kimmm

student.fullName = 'Lee'; // set -> Lee
