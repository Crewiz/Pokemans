import React from 'react';
import '../App.css';


function Pokecard({ pokemon: { id, name, type, base_experience } }) {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h4 className="Pokecard-title">{name}</h4>
      <img src={imgUrl} alt={name} className="Pokecard-image" />
      <div className="Pokecard-details">
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    </div>
  );
}

export default Pokecard;
