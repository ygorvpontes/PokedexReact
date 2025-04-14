import { useEffect, useState } from 'react';
import axios from "axios";
import { IconSearch } from '@tabler/icons-react'

function Pokemons() {
  const [allPokemons, setAllpokemons] = useState([]); 
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?-limit=898")
    .then(({data})=>setAllpokemons(data.results))
    .catch((err)=>console.log(err));
  }, []);

  return (
    <section>
      <form>
        <div>
          <input type="text" placeholder="Search Pokemon"/>
          <button></button>
          <IconSearch/>
        </div>
        
      </form>
    </section>
  );
}

export default Pokemons