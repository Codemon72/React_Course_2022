import { useEffect, useState } from "react"

const DynamicPokemonCard = ({name}) => {

  const [dynamicPokemon, setDynamicPokemon] = useState({})
  const [ApiCallFinished, setApiCallFiinished] = useState(false)

  useEffect(() => {
      let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

      fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
          setDynamicPokemon(pokemon);
        })
        .then(() => setApiCallFiinished(true))
  }, [name]);

  return (
    <div className="component">
      <h2>DynamicPokemonCard</h2>
      {ApiCallFinished && (
        <div className='pokemon_result'>
        <h3>{dynamicPokemon.name.toUpperCase()}</h3>
          {console.log('hubba', dynamicPokemon.sprites.front_default, 'blob')}
        <img
              src={dynamicPokemon.sprites.front_default}
              alt={dynamicPokemon.name}
              className='pokemon_img'
            />
          <br />
          <strong>Ablities:</strong>
          {dynamicPokemon?.abilities?.map((index) => (
            <span>{index.ability.name}</span>
          ))}
        </div>
      )}
      
      
    </div>
  )
}

export default DynamicPokemonCard
