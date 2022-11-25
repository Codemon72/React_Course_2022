import { useState, useEffect } from 'react'

const CallApiExercise = () => {

  const [callAPI, setCallAPI] = useState(false)

useEffect(() => {

  if (callAPI) {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon-species/7/';
  
    const resultSpan = document.getElementById('result');
  
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => (resultSpan.innerHTML = `${data.name}`))
        .then(() => setCallAPI(false))
  }
}, [callAPI]);


  return (
    <div className='component'>
      <button onClick={() => {setCallAPI(true)}}> Call to API for a Pokemon Name</button>

      <span id='result'></span>
    </div>
  );
}

export default CallApiExercise
