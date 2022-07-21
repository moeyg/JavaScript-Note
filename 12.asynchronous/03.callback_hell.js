// 콜백 지옥 (Callback Hell)
// 많은 양의 콜백을 전달하는 것
// 코드가 복잡하게 중첩되어 있고, 혼란스럽게 작성된 것

// 사례 1
const delayColorChage = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayColorChage('red', 1000, () => {
  delayColorChage('orange', 1000, () => {
    delayColorChage('yellow', 1000, () => {
      delayColorChage('green', 1000, () => {
        delayColorChage('blue', 1000, () => {});
        delayColorChage('purple', 1000, () => {});
      });
    });
  });
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// 사례 2
const requestCallback = (url, success, failure) => {
  // 요청 딜레이를 난수로 표현
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout.');
    } else {
      success(`Connection ${url}}`);
    }
  });
};

requestCallback(
  'www.non-existent-url.com/page1',
  (response) => {
    console.log('SUCCESS 0️⃣', response);
    requestCallback(
      'www.non-existent-url.com/page2',
      (response) => {
        console.log('SUCCESS 1️⃣', response);
        requestCallback(
          'www.non-existent-url.com/page3',
          (response) => {
            console.log('SUCCESS 2️⃣', response);
          },
          (err) => {
            console.log('ERROR ❌', err);
          }
        );
      },
      (err) => {
        console.log('ERROR ❌', err);
      }
    );
  },
  (err) => {
    console.log('ERROR ❌', err);
  }
);
