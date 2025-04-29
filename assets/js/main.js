const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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

    pokemonsOl.innerHTML += pokemonHtml
}

async function getPokemons(url) {

    const response = await fetch(url);
    const data = await response.json();
    const pokemons = data.results;
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemon.id = i + 1;
        convertPokemonToHtml(pokemon);
    }
}

getPokemons(url)
