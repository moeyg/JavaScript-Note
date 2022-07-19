// innerHTML
// 모든 태그와 요소 내부의 모든 것들이 포함된 전체 콘턴츠가 출력된다.
// 보통 태그를 조작할 때 사용된다.

// innerText로 출력할 경우
const isInnerText = document.querySelector('body').innerText;
console.log(isInnerText);
/*
Lorem
ipsum dolor sit amet consectetur elit. Illum expedita dolores
doloremque consequatur natus aliquam repellat,
itaque sint excepturi voluptatem ipsam quae quibusdam quisquam
dolorem ab. Rem, placeat. Quia, modi?
*/

// innerHTML으로 출력할 경우
const isInnerHTML = document.querySelector('body').innerHTML;
console.log(isInnerHTML);
/*
<h1>Lorem</h1>
ipsum dolor sit amet <a>consectetur</a> elit. <a>Illum</a> expedita
<b>dolores</b> <span style="display: none">HELLO🙌</span>
<ul>
  <li>doloremque consequatur natus aliquam repellat,</li>
  <li>itaque sint excepturi voluptatem ipsam quae quibusdam quisquam</li>
</ul>
<a>dolorem ab</a>. Rem, placeat. <b>Quia, modi?</b>

<script src="./04.innerHTML.js"></script>
*/

// 따라서 DOM에 접근해 조작이 가능하다. 이탤릭체로 변경하고 싶다면, 기존 태그에 감싸져서 변경
document.querySelector('h1').innerHTML = '<i>HOLA!</i>';
console.log(document.querySelector('body').innerHTML);
/*
    <h1><i>HOLA!</i></h1>
    ipsum dolor sit amet <a>consectetur</a> elit. <a>Illum</a> expedita
    <b>dolores</b> <span style="display: none">HELLO🙌</span>
    <ul>
      <li>doloremque consequatur natus aliquam repellat,</li>
      <li>itaque sint excepturi voluptatem ipsam quae quibusdam quisquam</li>
    </ul>
    <a>dolorem ab</a>. Rem, placeat. <b>Quia, modi?</b>

    <script src="./04.innerHTML.js"></script>
*/

// 또한 옆에 요소를 추가할 수 있다.
document.querySelector('h1').innerHTML += ' 👋';
