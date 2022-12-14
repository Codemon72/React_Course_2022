import { useEffect, useState } from 'react';

const PokemonProfileMiniCard = ({ id: pokemonId }) => {
  const [pokemon, setPokemon] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const pokemonFromStorage = JSON.parse(
      window.localStorage.getItem(pokemonId)
    );

    if (!pokemonFromStorage) {
      const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

      fetch(endpoint)
        .then((result) => result.json())
        .then((resultJson) => {
          if (resultJson) {
            const pokemonObject = {
              name: resultJson?.name,
              sprite: resultJson?.sprites?.front_default,
              types: resultJson?.types?.map((data) => data.type.name),
              abilities: resultJson?.abilities?.map(
                (data) => data.ability.name
              ),
            };
            setPokemon(pokemonObject);
            window.localStorage.setItem(
              pokemonId,
              JSON.stringify(pokemonObject)
            );
          }
        })
        .catch((error) => {
          console.error('Something went wrong: ', error);
          setFetchError(true);
        });
    } else {
      console.log('Found Pokemon in localStorage');
      setPokemon(pokemonFromStorage);
    }
  }, [pokemonId]);

  return (
    !fetchError && (
      <div className='component__mini'>
        <img src={pokemon?.sprite} alt={pokemon?.name} className='w-36' />
        <h4>{pokemon?.name?.toUpperCase()}</h4>
        <div>
          <strong>Abilities:</strong>
          <br />
          {pokemon?.abilities?.join(', ')}
        </div>
        <br />
        <div>
          <strong>Type:</strong>
          <br />
          {pokemon?.types?.join(', ')}
        </div>
      </div>
    )
  );
};

export default PokemonProfileMiniCard;
