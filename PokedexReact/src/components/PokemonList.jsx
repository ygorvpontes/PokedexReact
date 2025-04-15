import PokemonPreview from "./PokemonPreview"

function PokemonList({pokemons}){
    return(
        <section>
            {
                pokemons.map((pokemon) => (<PokemonPreview key={pokemon.url} pokemonURL={pokemon.url}/>)
                )
            }
        </section> 
    )

}export default PokemonList