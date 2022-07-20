// 이벤트 버블링
// 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작한다.
// 가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작한다.

const container = document.querySelector('#container');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
  const color = makeRandomColor();
  container.style.backgroundColor = color.rgb;

  if (color.rgbSum < 300) {
    container.style.color = 'white';
  } else {
    container.style.color = 'black';
  }

  // 이벤트 버블링을 막아줌
  e.stopPropagation();
});

container.addEventListener('click', () => {
  // 이벤트 버블링으로 색이 변하는 것을 확인하지 못 하고 숨김 처리됨
  container.classList.toggle('hide');
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
