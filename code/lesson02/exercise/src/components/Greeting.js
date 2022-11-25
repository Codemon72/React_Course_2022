const Greeting = ({user, children}) => {
  return (
    <div className='component'>
      <h2>Greeting</h2>
    <h1>Hello, {user.userName} from {user.userLocation}!</h1>
    {children}
    </div>
  )
}

export default Greeting
