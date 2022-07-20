const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const defaultMsg = h1.innerText;

input.addEventListener('input', (e) => {
  if (!e.target.value) {
    h1.innerText = defaultMsg;
  } else {
    h1.innerText = `Welcome, ${e.target.value}`;
  }
});
