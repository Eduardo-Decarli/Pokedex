const pokemonsApi = {};

pokemonsApi.getPokemons = function(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then(pokemonsList => pokemonsList.json())
        .then(jsonBody => jsonBody.results)
        .catch(error => console.log(`Houve um erro: ${error}`));
}