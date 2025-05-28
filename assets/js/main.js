const pokemonsOl = document.getElementById('pokemons');
const loadMoreButton = document.getElementById('loadMoreButton')
let limit = 12;
let offset = 0;

function convertPokemonToHtml(pokemon) {

    return `
    <li class="pokemon ${pokemon.type}">
        <div class="poke-id">
            <span class="name">${pokemon.name}</span>
            <span class="number">#00${pokemon.number}</span>
        </div>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
    </li>
    `
}

function loadMorePokemons(offset, limit) {

    pokemonsApi.getPokemons(offset, limit).then((pokemons = {}) => {

        const newList = pokemons.map(convertPokemonToHtml).join('');
        pokemonsOl.innerHTML += newList

    })
}

loadMorePokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {

    offset += limit;
    limit = 12;
    loadMorePokemons(offset, limit)
});