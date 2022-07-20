const input = document.querySelector('input');

// input.addEventListener('keydown', () => {
//   console.log('Keydown');
// });

// input.addEventListener('keyup', () => {
//   console.log('Keyup');
// });

input.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(event.code);
});
