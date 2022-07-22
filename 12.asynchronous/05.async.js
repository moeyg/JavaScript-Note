// async
// 함수 앞에 async를 붙이면 Promise로 전환된다.

// Promise
const promiselogin = (id, password) => {
  return new Promise((resolve, reject) => {
    if (!id || !password) reject('Missing Credentials');
    if (password === 'password') resolve(`${id}, Logged In Success!`);
    else reject('Invalid Password');
  });
};

// async
const login = async (id, password) => {
  if (!id || !password) throw 'Missing Credentials';
  if (password === 'password') return `${id}, Logged In Success!`;
  throw 'Invalid Password';
};

// INCORRECT ACCESS : Missing Credentials
login('idIsIdontKnow')
  .then((resolve) => {
    console.log(`Hello ${id} :`, resolve);
  })
  .catch((reject) => {
    console.log('INCORRECT ACCESS :', reject); //
  });

// INCORRECT ACCESS : Invalid Password
login('idIsIdontKnow', '123')
  .then((resolve) => {
    console.log(`Hello ${id} :`, resolve);
  })
  .catch((reject) => {
    console.log('INCORRECT ACCESS :', reject);
  });

// Hello idIsIdontKnow, Logged In Success!
login('idIsIdontKnow', 'password')
  .then((resolve) => {
    console.log('Hello', resolve);
  })
  .catch((reject) => {
    console.log('INCORRECT ACCESS :', reject);
  });
