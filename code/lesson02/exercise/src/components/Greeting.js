
const Greeting = ({name, location, children}) => {
  return (
    <>
    <h1>Hello, {name} from {location}</h1>
    {children}
    </>
  )
}

export default Greeting
