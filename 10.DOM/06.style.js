// style에 접근하는 방법 1

let allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
  link.style.color = '#fff';
  link.style.textDecoration = '';
  link.style.textDecorationStyle = 'wavy';
}

// style에 접근하는 방법 2 - classList

let span = document.querySelector('span');
span.classList.remove('none');
span.classList.add('none');
span.classList.toggle('none'); // remove와 add 처럼 사용이 가능
