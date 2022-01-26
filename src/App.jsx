import './App.css';
import pokemons from './data.jsx';
import Pokecard from './components/Pokecard';

function App() {
  return (
    <div className="App">
      {pokemons.map((pokemon, idx) => <Pokecard key={idx} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />)}
    </div>
  );
}

export default App;
