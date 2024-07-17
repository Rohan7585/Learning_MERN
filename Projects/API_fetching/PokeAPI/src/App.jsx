import { useEffect, useState } from 'react';
import PokeList from './PokeList';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'https://pokeapi.co/api/v2/pokemon?limit=100'; 

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        const response = await fetch(apiKey);
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoke();
  }, [apiKey]);

  return (
    <div>
      <h1>Pokemon</h1>
      {loading ? <p>Loading...</p> : <PokeList pokemon={pokemon} />}
    </div>
  );
};

export default App;