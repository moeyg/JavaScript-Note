const button = document.querySelector('button');
const header = document.querySelector('h1');

button.addEventListener('click', () => {
  const color = makeRandomColor();
  document.body.style.backgroundColor = color.rgb;
  header.innerText = color.rgb;

  if (color.rgbSum < 300) {
    header.style.color = 'white';
  } else {
    header.style.color = 'black';
  }
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return {
    rgb: `rgb(${r}, ${g}, ${b})`,
    rgbSum: r + g + b,
  };
};
