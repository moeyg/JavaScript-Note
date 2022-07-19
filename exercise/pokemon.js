const pokedex = document.querySelector('#pokedex');
const pokeURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i < 152; i++) {
  const monsterball = document.createElement('div');
  monsterball.classList.toggle('monsterball');

  const pokemonNum = document.createElement('span');
  pokemonNum.innerText = `#${i}`;

  const pokemon = document.createElement('img');
  pokemon.classList.toggle('pokemon');
  pokemon.src = `${pokeURL}${i}.png`;

  monsterball.append(pokemon);
  monsterball.append(pokemonNum);
  pokedex.append(monsterball);
}
