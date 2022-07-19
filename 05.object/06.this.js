const cat = {
  name: '파도',
  color: 'Black',
  meow() {
    return `${this.name} says meowwwwwwwww!`;
  },
};

const meow2 = cat.meow;

console.log(cat.meow()); // 파도 says meowwwwwwwww! -> this가 cat을 가리키고 있기 때문에 cat.name 출력
console.log(meow2()); // undefined says meowwwwwwwww! -> this가 windows를 가리키고 있기 때문에 undefined

// this 사용법
let hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg(eggCount) {
    this.eggCount++;
    return 'EGG';
  },
};

console.log(hen.name); // Helen
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg()); // EGG
console.log(hen.layAnEgg()); // EGG
console.log(hen.eggCount); // 2
console.log(hen.layAnEgg()); // EGG
console.log(hen.layAnEgg()); // EGG
console.log(hen.layAnEgg()); // EGG
console.log(hen.layAnEgg()); // EGG
console.log(hen.eggCount); // 6
