import { useState, useEffect } from 'react'

const CallApiExercise = () => {

  const initialCodemonObject = {
    name: '',
    img_src: ''
  }
  const [callAPI, setCallAPI] = useState(false)
  const [randomPokemon, setRandomPokemon] = useState(initialCodemonObject)

useEffect(() => {

  if (callAPI) {
    const id = Math.round(Math.random() * (898)) + 1
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
  
      fetch(url)
        .then((response) => response.json())
        .then((pokemon) => setRandomPokemon({name: pokemon.name, img_src: pokemon.sprites.front_default}))
        .then(() => setCallAPI(false))
  }
}, [callAPI]);


  return (
    <div className='component'>
      <button
        onClick={() => {
          setCallAPI(true);
        }}
      >
        {' '}
        Call to API for random Pokemon
      </button>
      <br />
      {callAPI && <i>Loading...</i>}
      {randomPokemon.img_src !== '' && (
        <div className='pokemon_result'>
        <h3>{randomPokemon.name.toUpperCase()}</h3>
        <img
          src={randomPokemon.img_src}
          alt={randomPokemon.name}
          className='pokemon_img'
        />
      </div>
      )}
    </div>
  );
}

export default CallApiExercise
