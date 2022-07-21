// new Promise (resolve, reject)

const request = (url) => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (randomNum > 4) {
        resolve(`SUCCESS request / ${url}`);
      } else {
        reject(`Connection Timeout.`);
      }
    }, 2000);
  });
};

request('www.non-existent-url.com/page1')
  .then((url) => {
    console.log('🙌 / page1', url);
    return requestPromise('www.non-existent-url.com/page2');
  })
  .then((url) => {
    console.log('🙌 / page2', url);
    return requestPromise('www.non-existent-url.com/page3');
  })
  .then((url) => {
    console.log('🙌 / page3', url);
  })
  .catch((err) => {
    console.log(`ERROR request failed ❌ / ${err}`);
  });
