const Greeting = ({user, children}) => {
  return (
    <>
    <h1>Hello, {user.userName} from {user.userLocation}!</h1>
    {children}
    </>
  )
}

export default Greeting
