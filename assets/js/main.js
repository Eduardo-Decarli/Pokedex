function convertPokemonToHtml(pokemon) {

    return `<li class="pokemon">
        <div class="poke-id">
            <span class="name">${pokemon.name}</span>
            <span class="number">#00${pokemon.number}</span>
        </div>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map(type => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
    </li>`
}

const pokemonsOl = document.getElementById('pokemons');

pokemonsApi.getPokemons(0, 10).then((pokemons = {}) => {

    const newList = pokemons.map(convertPokemonToHtml).join("");
    pokemonsOl.innerHTML = newList

});