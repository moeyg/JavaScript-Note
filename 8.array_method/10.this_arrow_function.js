// this와 arrow function
// 일반 함수와 달리 화살표 함수에서 this 키워드는 다르게 작동한다.
// 사용에 유의

let person = {
  firstName: 'Kimmmm',
  lastName: 'Kim',
  fullName: function () {
    console.log(this);
    return console.log(`${this.firstName} ${this.lastName}`);
  },
};

// this -> person Object 출력
console.log(person.fullName());
// {
//     firstName: 'Kimmmm',
//     lastName: 'Kim',
//     fullName: [Function: fullName]
// }
// Kimmmm Kim

// 화살표 함수로 작성할 경우
// 화살표 함수의 this는 window Object를 가리킨다.
person = {
  firstName: 'Leeeeee',
  lastName: 'Lee',
  fullName: () => {
    console.log(this);
    return console.log(`${this.firstName} ${this.lastName}`);
  },
};

// this -> windows Object 출력
console.log(person.fullName());
// {}
// undefined undefined
