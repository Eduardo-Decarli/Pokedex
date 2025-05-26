function convertPokemonToHtml(pokemon) {

    return `<li class="pokemon">
        <div class="poke-id">
            <span class="name">${pokemon.name}</span>
            <span class="number">#00${pokemon.id}</span>
        </div>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}">
        </div>
    </li>`
}

const pokemonsOl = document.getElementById('pokemons');

pokemonsApi.getPokemons(0, 10).then((pokemons = {}) => {

    const newList = pokemons.map(convertPokemonToHtml).join("");
    pokemonsOl.innerHTML = newList

});

function convertPokemonTypesToLi(pokemonTypes) {

    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}