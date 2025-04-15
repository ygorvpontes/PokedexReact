
import Pokemons from './components/pokemons'
import Cardright from './components/Cardright'

function App() {
  
return(
  <section className="bg-[#F6F8FC]"> 
  <div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen'>
  <Pokemons/>
  <Cardright/>
</div>
</section>
)
    
  
}
export default App