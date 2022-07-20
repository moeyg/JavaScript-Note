const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

function pickColor() {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}

const buttons = document.querySelectorAll('button');

for (button of buttons) {
  button.addEventListener('click', pickColor);
}
