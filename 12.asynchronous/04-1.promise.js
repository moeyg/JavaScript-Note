// Promise
// 어떤 연산, 비동기 연산이 최종적으로 완료 혹은 성공했는지 실패했는지 알려주는 객체
// Callback Hell 보다 깔끔한 처리가 가능하다.

// pending : 어떤 결과 값을 받는 중
// resolved : 성공시 나타남
// rejected : 실패시 나타남

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout.');
      } else {
        resolve(`Connection ${url}}`);
      }
    });
  });
};

// .then 에 resolved 되었을 때 나타날 값을 작성
// .catch 에 rejected 되었을 때 나타날 값을 작성

/*

requestPromise('www.non-existent-url.com/page1')
  .then(() => {
    console.log('SUCCESS request 🙌 / page 1');
    requestPromise('www.non-existent-url.com/page2')
      .then(() => {
        console.log('SUCCESS request 🙌 / page 2');
        requestPromise('www.non-existent-url.com/page3')
          .then(() => {
            console.log('SUCCESS request 🙌 / page 3');
          })
          .catch(() => {
            console.log('ERROR request failed ❌ / page 3');
          });
      })
      .catch(() => {
        console.log('ERROR request failed ❌ / page 2');
      });
  })
  .catch(() => {
    console.log('ERROR request failed ❌ / page 3');
  });

*/

// 실제 작성 방법

requestPromise('www.non-existent-url.com/page1')
  .then((url) => {
    console.log(`SUCCESS request 🙌 / page1 / ${url}`);
    return requestPromise('www.non-existent-url.com/page2');
  })
  .then((url) => {
    console.log(`SUCCESS request 🙌 / page1 / ${url}`);
    return requestPromise('www.non-existent-url.com/page3');
  })
  .then((url) => {
    console.log(`SUCCESS request 🙌 / page1 / ${url}`);
  })
  .catch((err) => {
    console.log(`ERROR request failed ❌ / ${err}`);
  });
