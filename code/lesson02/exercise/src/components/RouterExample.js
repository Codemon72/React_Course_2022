import { Link, Route } from 'wouter';

const RouterExample = () => {
  return (
    <div className='component'>
      <h2>RouterExample</h2>
      <Link href='/about'>
        <span>Profile</span>
      </Link>

      <Route path='/about'>About Us</Route>
      <Route path='/inbox'>INbox</Route>
      
    </div>
  )
}

export default RouterExample
