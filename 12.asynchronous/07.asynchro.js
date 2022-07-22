const request = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (delay < 4) {
        resolve(`SUCCESS request / ${url}`);
      } else {
        reject(`Connection Timeout.`);
      }
    }, 2000);
  });
};

async function sendRequest() {
  try {
    let data1 = await request('www.non-existent-url.com/page1');
    console.log(data1);
    let data2 = await request('www.non-existent-url.com/page2');
    console.log(data2);
  } catch (e) {
    console.log(`ERROR : ${e}`);
  }
}

sendRequest();
