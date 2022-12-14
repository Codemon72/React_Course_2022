import { Switch, Link, Route } from 'wouter'
import CountingContainer from './CountingContainer'
import CallApiExercise from './CallApiExercise'

const RouterExample = () => {
  return (
    <div className='component' id='routerExample'>
      <h2>RouterExample</h2>
      <div>
        <Link href='/'>
          <span className='nav_link'>Home</span>
        </Link>
        <Link href='/about'>
          <span className='nav_link'>About</span>
        </Link>
        <Link href='/counting-container'>
          <span className='nav_link'>CountingContainer</span>
        </Link>
        <Link href='/pokemon'>
          <span className='nav_link'>Pokemon</span>
        </Link>
      </div>

      <Switch>
        <Route path='/'>
          <div className='component'>
            <h1>This would be the Homepage</h1>
          </div>
        </Route>
        <Route path='/about'>
          <div className='component'>About Codemon72</div>
        </Route>
        <Route path='/counting-container'>
          <CountingContainer />
        </Route>
        <Route path='/pokemon'>
          <CallApiExercise />
        </Route>
        <Route>
          <div className='component'>
            404 Error <br />
            This is probably not the page you was looking for ...😬🫢
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default RouterExample
