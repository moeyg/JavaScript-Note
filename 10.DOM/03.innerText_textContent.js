// 조작 메서드 (Manipulate Method)
// HTML과 CSS 중간에 액세스 해서 항목을 이동하거나 이름을 재지정 하거나 스타일 업데이트, 항목을 나타내거나 숨기기 등을 한다.

// innerText vs textContent
const h1 = document.querySelector('h1');
console.log(h1.innerText); // Lorem
console.log(h1.textContent); // Lorem

// 두 메서드는 같은 활용을 하는 것 같지만, display: none; 의 경우 다름
const p = document.querySelector('p');

// innerText의 경우 display:none으로 설정한 '✨display_none✨' 부분이 표시 ❌,
// 내용이 한줄로 표시
console.log(p.innerText);
// Lorem ipsum, dolor sit amet dignissimos possimus tempora consequatur, tenetur fugiat sint, dolorum sunt.

// textContent의 경우 '✨display_none✨' 표시되고,
// HTML 파일에 작성된 기준으로 태그 앞에 공백이 생겨 표시된다.
console.log(p.textContent);
// Lorem ipsum, dolor sit amet dignissimos
// ✨display_none✨ possimus
// tempora consequatur, tenetur fugiat sint, dolorum sunt.

// 조작하기
const allLinks = document.querySelectorAll('a');
for (link of allLinks) {
  link.innerText = '🔗 LINK!';
}
// Lorem Lorem ipsum, dolor 🔗 LINK! amet dignissimos possimus 🔗 LINK! consequatur, tenetur fugiat sint, 🔗 LINK! sunt.
