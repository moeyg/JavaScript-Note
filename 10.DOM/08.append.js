// createElement : 요소 생성
let rabbits = document.createElement('img');
rabbits.src = 'https://t1.daumcdn.net/cfile/tistory/26738A4558F70D0814';

// 이미지 추가 -> 자식 요소로 삽입
document.body.appendChild(rabbits);
// 이미지 크기 조정
rabbits.classList.toggle('image');

// h2 요소 생성
let subTitle = document.createElement('h2');
subTitle.innerText = 'Rabbits is So Cute!';

// h2 추가
document.body.appendChild(subTitle);
subTitle.innerHTML = '<i>Rabbits are SO CUTE</i>';

// append, prepend -> 자식 요소로 삽입
const greet = document.createElement('strong');
greet.append('Hi there! 🙌');
document.querySelector('p').prepend(greet);
document.querySelector('h2').append(' 🐰');

// 형제 요소로 삽입하는 방법
const h2 = document.createElement('h2');
h2.append('🍀 CUTE ANIMAL 🍀');
// 형제 요소로 h1 뒤에 삽입
document.querySelector('h1').after(h2);

const star = document.createElement('star');
star.innerText = '⭐️';
// 형제 요소로 h1 앞에 삽입
document.querySelector('h1').before(star);

// 반복해서 추가할 경우
for (let i = 0; i < 10; i++) {
  const btn = document.createElement('button');
  btn.innerText = 'HEY!';
  document.querySelector('body').appendChild(btn);
}

for (let i = 0; i < 5; i++) {
  const btn = document.createElement('button');
  btn.innerText = '🍎';
  const bold = document.querySelector('#bold');
  bold.prepend(btn);
}
