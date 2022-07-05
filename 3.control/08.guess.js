// 숫자를 추측하는 게임

// 최대 숫자 입력
// parseInt로 값을 숫자로 변환
let maximum = parseInt(prompt('Enter the maximum number!'));

// 최대 숫자가 NaN일 경우 무한 루프로 유효값 설정
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid number!'));
}

// 맞춰야 할 숫자 난수로 생성 -> 1 ~ maximum
const targerNum = Math.floor(Math.random() * maximum) + 1;
console.log(targerNum);

// 추측 숫자 입력
// parseInt로 숫자로 변경
let guessNum = parseInt(prompt('Enter your first guess'));
// 추측 시도 카운트
let attemps = 1;

while (parseInt(guessNum) !== targerNum) {
  if (guessNum === 'q') break;
  attemps++;
  if (guessNum > targerNum) {
    guessNum = prompt('Too High! Enter a new guess');
  } else {
    guessNum = prompt('Too Low! Enter a new guess');
  }
}

// q 를 입력했을 때 중지
if (guessNum === 'q') {
  console.log('OK, You Quit');
}
// 숫자를 맞췄을 때 중지
else {
  console.log(`You Got It! It took you ${attemps} guesses`);
}
