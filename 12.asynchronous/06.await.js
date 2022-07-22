// await
// Promise가 해결될 때까지 기다려주는 키워드

const colorChange = (color, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await colorChange('red', 1000);
  await colorChange('orange', 1000);
  await colorChange('yellow', 1000);
  await colorChange('green', 1000);
  await colorChange('blue', 1000);
  await colorChange('indigo', 1000);
  await colorChange('purple', 1000);
}

async function printRainbow() {
  await rainbow();
  alert('DONE');
}

printRainbow();
