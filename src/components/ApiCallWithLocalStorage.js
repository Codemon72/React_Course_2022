import PokemonProfileMiniCard from './PokemonProfileMiniCard';

const ApiCallWithLocalStorage = () => {
  return (
    <div className='component'>
      <h2>ApiCallWithLocalStorage</h2>
      <div className='pokemon-mini-card-container'>
        {Array.from(Array(15)).map((_, i) => (
          <PokemonProfileMiniCard key={i + 1} id={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default ApiCallWithLocalStorage;
