// 반복문 (Loop Statement)
// while (조건) {}
// 조건이 false가 될 때까지 {}(코드 블럭)을 반복 실행

let num = 5;

while (num >= 0) {
  console.log(num);
  num--;
}

// while은 조건이 맞아야 실행
let isActive = true;
let i = 0;

while (isActive) {
  console.log('아직 살아있다!');
  if (i === 10) {
    break;
  }
  i++;
}

// do{} while{}
// do while은 일단 do{}를 실행하고 while{} 조건을 검사
isActive = false;

do {
  console.log('do-while!!');
} while (isActive);
