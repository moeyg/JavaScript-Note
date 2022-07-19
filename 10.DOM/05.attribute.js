// .id : id를 변경할 수 있다.
// 적용한 css는 모두 무효가 된다.
document.querySelector('#header').id; // header
document.querySelector('#header').id = h1; // id가 h1으로 변경

// .src : 출처를 보여준다.
document.querySelector('img').src; // 이미지의 출처를 보여준다.
document.querySelector('img').src =
  'https://www.rover.com/blog/wp-content/uploads/2019/12/cat-2902599_640.jpg'; // 출처를 변경

// .getAttribute
const img = document.querySelector('img').src;
img.getAttribute('src'); // 'https://cdn.images.express.co.uk/img/dynamic/11/590x/KKSS-699265.jpg'

// .setAttribute : 값을 변경
image.setAttribute(
  'src',
  'https://www.rover.com/blog/wp-content/uploads/2019/12/cat-2902599_640.jpg'
);
