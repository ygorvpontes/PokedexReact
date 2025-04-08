
import Pokemons from './components/pokemons'
import Cardright from './components/Cardright'

function App() {
  
return(
  <div className='max -w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen'>
  <Pokemons/>
  <Cardright/>
</div>
)
    
  
}
export default App