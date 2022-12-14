import { Link, Route } from 'wouter'
import DynamicPokemonCard from './DynamicPokemonCard'

const DynamicRouting = () => {
  return (
    <div className='component'>
      <h2>DynamicRouting</h2>
      <nav>
        <Link href='/pokemon/squirtle'>
          <span className='nav_link'>Squirtle</span>
        </Link>
        <Link href='/pokemon/audino'>
          <span className='nav_link'>Audino</span>
        </Link>
        <Link href='/pokemon/swoobat'>
          <span className='nav_link'>Swoobat</span>
        </Link>
        <Link href='/pokemon/spearow'>
          <span className='nav_link'>Spearow</span>
        </Link>
        <Link href='/pokemon/mudbray'>
          <span className='nav_link'>Mudbray</span>
        </Link>
        <Link href='/pokemon/poliwhirl'>
          <span className='nav_link'>Poliwhirl</span>
        </Link>
        <Link href='/pokemon/mantine'>
          <span className='nav_link'>Mantine</span>
        </Link>
        <Link href='/pokemon/comfey'>
          <span className='nav_link'>Comfey</span>
        </Link>
      </nav>

      <Route path='/pokemon/:name'>
        {params => <DynamicPokemonCard name={params.name} />}
      </Route>
    </div>
  );
};

export default DynamicRouting