import { useEffect, useState } from 'react';

const DynamicPokemonCard = ({ name }) => {
  const [dynamicPokemon, setDynamicPokemon] = useState({});
  const [apiCallFinished, setApiCallFinished] = useState(false);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
        setDynamicPokemon(pokemon);
      })
      .then(() => setApiCallFinished(true));
  }, [name]);

  return (
    <div className='component'>
      <h2>DynamicPokemonCard</h2>
      {apiCallFinished && (
        <div className='pokemon_result'>
          <h3>{dynamicPokemon.name.toUpperCase()}</h3>
          <img
            src={dynamicPokemon.sprites.other['official-artwork'].front_default}
            alt={dynamicPokemon.name}
            className='pokemon_img'
          />

          <strong>Types:</strong>
          {dynamicPokemon.types.map((index) => (
            <span key={index.type.name}>{index.type.name}</span>
          ))}
          <br />
          <strong>Ablities:</strong>
          {dynamicPokemon.abilities.map((index) => (
            <span key={index.ability.name}>{index.ability.name}</span>
          ))}
          {dynamicPokemon?.held_items.length > 0 && (
          <>
          <br />
          <strong>Items held:</strong>
          {dynamicPokemon.held_items.map((index) => (
            <span key={index.item.name}>{index.item.name}</span>
          ))}
          </>)}
        </div>
      )}
    </div>
  );
};

export default DynamicPokemonCard;
