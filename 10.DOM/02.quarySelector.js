const heading = document.querySelector('#heading');
console.log(heading.innerHTML);

// 선택시 맨 처음 요소가 선택된다.
const yellowCat = document.querySelector('.catImage');
console.log(yellowCat.alt); // Yellow Cat

// [타입="속성"]으로 구분할 수 있는 값을 주어 지정할 수 있다.
const blackCat = document.querySelector('.catImage[alt="Black Cat"]');
console.log(blackCat.alt); // Black Cat

// 일치하는 모든 요소를 반환하고 싶을 때는 All 사용
const cats = document.querySelectorAll('.catImage');
for (cat of cats) {
  console.log(cat.alt); // Yellow Cat Black Cat
}

const contentText = document.querySelector('div > strong');
console.log(contentText.innerHTML); // Cat is SO CUTE!
