import './App.css';
import React, { useState } from 'react';
import Pokedex from './components/Pokedex';

function App() {
  const pokemonData = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ];

  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');
  const [hand1Total, setHand1Total] = useState(0);
  const [hand2Total, setHand2Total] = useState(0);

  const playGame = () => {
    // Shuffle the array of pokemon data
    const shuffledPokemon = [...pokemonData].sort(() => Math.random() - 0.5);
    // Divide the shuffled array into two hands
    const [hand1Data, hand2Data] = [
      shuffledPokemon.slice(0, 4),
      shuffledPokemon.slice(4, 8)
    ];
    setHand1(hand1Data);
    setHand2(hand2Data);
    setGameOver(true);
    // Determine the winner based on total base experience
    const [hand1Exp, hand2Exp] = [
      hand1Data.reduce((acc, { base_experience }) => acc + base_experience, 0),
      hand2Data.reduce((acc, { base_experience }) => acc + base_experience, 0)
    ];
    setHand1Total(hand1Exp);
    setHand2Total(hand2Exp);
    setWinner(hand1Exp > hand2Exp ? 'Player 1' : 'Player 2');
  }

  return (
    <div className="App">
      <h1>Pokemon Battle</h1>
      <button onClick={playGame}>Play</button>
      {gameOver && <h2>{winner} wins with {winner === 'Player 1' ? hand1Total : hand2Total} experience!</h2>}

      <Pokedex pokemonData={hand1} isWinner={hand1Total > hand2Total} totalExp={hand1Total} />
      <Pokedex pokemonData={hand2} isWinner={hand2Total > hand1Total} totalExp={hand2Total} />
    </div>
  );
}

export default App;
