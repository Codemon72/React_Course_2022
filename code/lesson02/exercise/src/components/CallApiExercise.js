import { useState, useEffect } from 'react';

const CallApiExercise = () => {
  const [isCallingAPI, setIsCallingAPI] = useState(false);
  const [randomPokemon, setRandomPokemon] = useState({});

  useEffect(() => {
    if (isCallingAPI) {
      const id = Math.round(Math.random() * 898) + 1;
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

      fetch(url)
        .then((response) => response.json())
        .then((pokemon) => setRandomPokemon(pokemon))
        .then(() => setIsCallingAPI(false));
    }
  }, [isCallingAPI]);

  return (
    <div className='component'>
      <h2>CallAPIExercise</h2>
      <button
        onClick={() => {
          setIsCallingAPI(true);
        }}
      >
        {' '}
        Call to API for random Pokemon
      </button>
      <br />
      {isCallingAPI && !randomPokemon.hasOwnProperty('name') && (
        <i>Loading...</i>
      )}
      {Object.keys(randomPokemon).length > 0 && (
        <div className='pokemon_result'>
          <h3>{randomPokemon?.name?.toUpperCase()}</h3>
          {/* conditional rendering with ternary operator: */}
          {isCallingAPI ? (
            <i className='pokemon_img'>Loading...</i>
          ) : (
            <img
              src={randomPokemon?.sprites?.front_default}
              alt={randomPokemon?.name}
              className='pokemon_img'
            />
          )}
          <span>ID: {randomPokemon?.id}</span>
          <br />
          <strong>Ablities:</strong>
          {randomPokemon?.abilities?.map((index) => (
            <span key={index.ability.name}>{index.ability.name}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CallApiExercise;
