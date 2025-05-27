const pokemonsApi = {};

function convertPokeApiDetailToPokemon(pokeDetails) {
    const pokemon = new Pokemon()

    pokemon.name = pokeDetails.name;
    pokemon.number = pokeDetails.order;

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type1] = types;

    pokemon.types = types;
    pokemon.type = type1;

    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default

    return pokemon;

}

pokemonsApi.getPokemons = function(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemon => pokemon.map(pokemonsApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
}

pokemonsApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}