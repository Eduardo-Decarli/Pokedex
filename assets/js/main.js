const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

async function buscarPokemon() {
    const response = await fetch(url);
    const data = await response.json();
    console.log('oi ' + data.results[0].name)
}

buscarPokemon();


