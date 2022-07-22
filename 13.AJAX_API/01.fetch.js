// fetch('https://api.chucknorris.io/jokes/random')
//   .then((response) => {
//     console.log('RESPONSE. Wating to parse...', response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log('Data parsed...');
//     console.log(data.value);
//   })
//   .catch((e) => {
//     console.log('ERROR :', e);
//   });

const randomJokes = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data.value);
  } catch (e) {
    console.log('ERROR is', e);
  }
};

randomJokes();
