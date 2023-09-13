import React from 'react';
import Pokecard from './Pokecard';

function Pokedex({ pokemonData }) {

  return (
    <div className="Pokedex">
      {pokemonData.map(({ id, name, type, base_experience }) => (
        <Pokecard key={id} pokemon={{ id, name, type, base_experience }} />
      ))}
    </div>
  );
}

export default Pokedex;
