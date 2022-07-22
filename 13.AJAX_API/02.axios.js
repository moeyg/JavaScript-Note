// fetch 사용

fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => {
    console.log('RESPONSE. Wating to parse...', response);
    return response.json();
  })
  .then((data) => {
    console.log('Data parsed...');
    console.log(data.value);
  })
  .catch((e) => {
    console.log('ERROR :', e);
  });

// axios 사용

axios
  .get('https://api.chucknorris.io/jokes/random')
  .then((response) => {
    console.log(response.data.value);
  })
  .catch((error) => {
    console.log('ERROR :', error);
  });

// async 사용

const randomJokes = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data.value);
  } catch (e) {
    console.log('ERROR is', e);
  }
};

// async axios 사용

const randomJokesAxios = async () => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(response.data.value);
  } catch (e) {
    console.log('ERROR is', e);
  }
};
