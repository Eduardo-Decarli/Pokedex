function convertPokemonToHtml(pokemon) {

    const pokemonsOl = document.getElementById('pokemons');

    const pokemonHtml =  `<li class="pokemon">
        <div class="poke-id">
            <span class="name">${pokemon.name}</span>
            <span class="number">#00${pokemon.id}</span>
        </div>
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>`

    pokemonsOl.innerHTML += pokemonHtml;
}

pokemonsApi.getPokemons(0, 10).then((pokemons = {}) => {

    const newList = pokemons.map(convertPokemonToHtml).join("")

});
