document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  const thePokemonContainer = document.querySelector('#pokemon-container');
  const thePokemonSearchContainer = document.querySelector('#pokemon-search-form');

  thePokemonContainer.innerHTML = renderAllThePokemon(POKEMON);

  thePokemonContainer.addEventListener('click', (event) => {
    // console.log(event);
    if (event.target.dataset.action === 'flip') {
      // console.log('working');
      // console.log(event);
      
      //now need to find the id of the pokemon that was clicked
      //and the syntax is different than in ruby fml
      const clickedPokemon = POKEMON.find(function(pokemon) {
        return pokemon.id == event.target.dataset.id
      })
      console.log(clickedPokemon);
      //need to check which image it is in order to change the sprites.front to sprites.back
      if (event.target.src === clickedPokemon.sprites.front) {
        console.log(event.target.src);
        event.target.src = clickedPokemon.sprites.back;
      } else {
        event.target.src = clickedPokemon.sprites.front;
      }
    }
  })

  let searchString = [];

  thePokemonSearchContainer.addEventListener('input', function(event) {
    // console.log(event.key);
    searchString.push(event.key);
    searchString.join('');
    console.log(searchString.join(''));
    const filteredPokemonList = POKEMON.filter(function(pokemon) {
      return pokemon.name.includes(event.target.value.toLowerCase());
    });
    console.log(filteredPokemonList);
    
    
  });

  function renderAllThePokemon(fullPokemonArray) {
    return fullPokemonArray.map(renderSinglePokemon).join('');
  };

  function renderSinglePokemon(singlePokemon) {
    console.log(singlePokemon.sprites.front);
    // console.log("----------------------");
    
    return (`
      <div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${singlePokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${singlePokemon.id}" data-action="flip" class="toggle-sprite" src="${singlePokemon.sprites.front}">  
          </div>
        </div>
      </div>
    `)
  };
});
