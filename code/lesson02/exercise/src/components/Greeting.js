
const Greeting = ({userName = 'Clemens', userLocation = 'Hamburg', children}) => {
  return (
    <>
    <h1>Hello, {userName} from {userLocation}</h1>
    {children}
    </>
  )
}

export default Greeting
