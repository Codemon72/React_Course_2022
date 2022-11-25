const Greeting = ({user, children}) => {
  return (
    <div className='component'>
    <h1>Hello, {user.userName} from {user.userLocation}!</h1>
    {children}
    </div>
  )
}

export default Greeting
