const h1 = document.getElementById('h1');
console.log(h1.innerHTML); // Hello World!

const p = document.getElementsByTagName('p');
for (paragraph of p) {
  console.log(paragraph.innerHTML); // 1 2 3
}

const btn = document.getElementsByClassName('btn');
for (b of btn) {
  console.log(b.innerHTML); // click click click
}
