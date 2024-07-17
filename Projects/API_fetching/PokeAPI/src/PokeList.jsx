import React, { useEffect } from 'react';
import PokeCard from './PokeCard';

const PokeList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((results, index) => (
        <PokeCard key={index} name={results.name} url = {results.url} />
      ))}
    </div>
  );
};

export default PokeList;