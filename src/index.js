document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  const thePokemonContainer = document.querySelector('#pokemon-container');

  thePokemonContainer.innerHTML = renderAllThePokemon(POKEMON);

  thePokemonContainer.addEventListener('click', (event) => {
    console.log("clicked");
  })

  function renderAllThePokemon(fullPokemonArray) {
    return fullPokemonArray.map(renderSinglePokemon).join('');
  }

  function renderSinglePokemon(singlePokemon) {
    console.log(singlePokemon.sprites.front);
    // console.log("----------------------");
    
    return (`
      </div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${singlePokemon.name}</h1>
          <div class="pokemon-image>
            <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
            <img data-id="${singlePokemon.id}" data-action="flip" class="toggle-sprite" src="${singlePokemon.sprites.front}" />  
          </div>
        </div>
      </div>
    `)
  };
});
