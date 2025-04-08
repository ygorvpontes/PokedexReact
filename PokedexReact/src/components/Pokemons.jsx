import { useEffect, useState } from 'react';

function Pokemons() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getPokemon = async () => {
      const promises = [];
      for (let i = 1; i <= 898; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
      }

      const results = await Promise.all(promises);
      const pokemonData = results.map(data => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: data.type,
      }));

      setAllPokemon(pokemonData);
    };

    getPokemon();
  }, []);

  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 p-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">Pokédex</h1>
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-8"
        />
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredPokemon.map(pokemon => (
            <li key={pokemon.id} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform">
              <img src={pokemon.image} alt={pokemon.name} className="w-20 h-20 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{pokemon.id}. {pokemon.name}</h3>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pokemons